import dbConnect from '@/lib/dbConnect';
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get request method
  const { method } = req;

  switch (method) {
    /**
     * @route GET /api/events/past
     * @desc Get all events in the past
     * @res QueriedVolunteerEventData[]
     */
    case 'GET':
      try {
        await dbConnect();

        const { userId } = req.query; // Assuming you're passing a userId to identify the user

        // Fetching the past 5 activities
        const activities = await VolunteerEvents.find({ userId: userId, eventDate: { $lt: new Date() } })
                                                .sort({ eventDate: -1 })
                                                .limit(5);

        res.status(200).json(activities);
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
