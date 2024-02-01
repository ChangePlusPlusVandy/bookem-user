// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// dbConnect is used to connect to our mongoDB database (via mongoose)
import dbConnect from '@/lib/dbConnect';

// import the models and types we need
import Users from 'bookem-shared/src/models/Users';
import VolunteerLogs from 'bookem-shared/src/models/VolunteerLogs';
import { VolunteerLogData } from 'bookem-shared/src/types/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

/**
 * /api/volunteerLogs/create:
 *  post:
 *    description: Insert volunteerLog
 *    responses:
 *      200:
 *        description: Success
 *        content: Success message
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

  const validateData = (volunteerLog: VolunteerLogData) => {
    if (!volunteerLog.eventId) {
      res.status(400).json({
        message: 'You forgot to select an event.',
      });
      return;
    }

    if (!volunteerLog.hours) {
      res
        .status(400)
        .json({ message: 'You forgot to fill in number of hours.' });
      return;
    }

    if (!volunteerLog.numBooks) {
      res
        .status(400)
        .json({ message: 'You forgot to fill in number of books donated' });
      return;
    }

    if (!volunteerLog.date) {
      res.status(400).json({ message: 'You forgot to fill in date' });
      return;
    }
  };

  switch (req.method) {
    case 'POST':
      try {
        // connect to our database
        await dbConnect();

        // start a try catch block to catch any errors in parsing the request body
        const volunteerLog = JSON.parse(req.body) as VolunteerLogData;

        validateData(volunteerLog);

        const usersId = session.user._id;

        // construct the object we want to insert into our database
        await VolunteerLogs.insertMany({
          ...volunteerLog,
          userId: usersId,
        });

        // return the result of the action
        res.status(200).json({
          message: 'Successfully Logged hours',
        });
      } catch (e) {
        // if there is an error, print and return the error
        console.error('An error has occurred in volunteerLogs/create.ts', e);
        res.status(500).json({
          error:
            'Sorry, an error occurred while connecting/inserting to the database: ',
          message: '' + e,
        });
      }
      break;

    default:
      res.status(405).json({
        message: 'Sorry, only POST requests are supported',
      });
      break;
  }
}
