import dbConnect from '@/lib/dbConnect';
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
import Users from 'bookem-shared/src/models/Users';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get request method
  const { method } = req;

  const session = await getServerSession(req, res, authOptions);

  switch (method) {
    /**
     * @route GET /api/events/upcoming
     * @desc Get all events in the future that the user is signed up for
     * @res QueriedVolunteerEventData[]
     */
    case 'GET':
      try {
        // const session = await getSession({ req });
        await dbConnect();
        // Fetch the user by ID to get their events array
        // session.user._id shouldn't be null because we have the middleware to
        // handle unauthenticated users
        const user = await Users.findById(session.user._id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        // Use the user's events array to filter the VolunteerEvents
        const events = await VolunteerEvents.find({
          _id: { $in: user.events },
          startDate: { $lt: new Date() },
        }).sort({ startDate: 1 });

        return res.status(200).json(events);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }
      break;

    // case 'POST':
    // case 'PUT':
    // case 'DELETE':
    default:
      // res.setHeader('Allow', ['GET', 'PUT', 'DELETE', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
