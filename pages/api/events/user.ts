// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// dbConnect is used to connect to our mongoDB database (via mongoose)
import dbConnect from 'lib/dbConnect';

// getSession is used to get the user's session (if they are logged in)
import { getServerSession } from 'next-auth';

// import the models and types we need
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
import Users from 'bookem-shared/src/models/Users';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

/**
 * /api/VolunteerEvents/:
 *  get:
 *    description: Get all volunteer logs from a certain user
 *      200:
 *        description: Success
 *        content: JSON object of all volunteer logs from a certain user
 *      500:
 *        description: Error
 *        content: JSON object of error
 * */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // check that user is authenticated
  const session = await getServerSession(req, res, authOptions);

  switch (req.method) {
    case 'GET':
      try {
        // Connect to the database
        await dbConnect();

        // get all volunteerEvents from collection that match the user's Id
        // sorted in descending order
        const user = await Users.findById(session.user._id);
        
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        // Use the user's events array to filter the VolunteerEvents
        const events = await VolunteerEvents.find({
          _id: { $in: user.events },
          endDate: { $lt: new Date() },
        }).sort({ eventDate: 1 });

        // return the result
        res.status(200).json(events);
      } catch (e) {
        // if there is an error, print and return the error
        console.error('An error has occurred in VolunteerEvents index.ts', e);
        res.status(500).json({
          error: 'Sorry, an error occurred while connecting to the database',
        });
      }
      break;

    default:
      res.status(405).json({
        error: 'Sorry, only GET requests are supported',
      });
      break;
  }
}
