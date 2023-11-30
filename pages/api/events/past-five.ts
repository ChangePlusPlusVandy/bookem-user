// import dbConnect from '@/lib/dbConnect';
// import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // Get request method
//   const { method } = req;

//   switch (method) {
//     /**
//      * @route GET /api/events/past
//      * @desc Get all events in the past
//      * @res QueriedVolunteerEventData[]
//      */
//      case 'GET':
//       try {
//         await dbConnect();
//         // Select the first 5 events where endDate is in the past, ordered by endDate ascending
//         const events = await VolunteerEvents.find({
//           endDate: { $lt: new Date() },
//         })
//         .sort({ endDate: 1 })
//         .limit(5); // Limit the query to 5 results
//         return res.status(200).json(events);
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error });
//       }
//       break;

//     // case 'POST':
//     // case 'PUT':
//     // case 'DELETE':
//     default:
//       // res.setHeader('Allow', ['GET', 'PUT', 'DELETE', 'POST']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// }

import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'lib/dbConnect';
import { getServerSession } from 'next-auth';
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
import Users from 'bookem-shared/src/models/Users';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

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

        // Ensure the user is found in the session
        if (!session?.user?._id) {
          return res.status(401).json({ message: 'User not authenticated' });
        }

        // Get user from Users collection
        const user = await Users.findById(session.user._id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        // Use the user's events array to filter the VolunteerEvents
        // Only fetch events that have ended and limit to 5
        const events = await VolunteerEvents.find({
          _id: { $in: user.events },
          endDate: { $lt: new Date() },
        })
          .sort({ endDate: 1 })
          .limit(5);

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
