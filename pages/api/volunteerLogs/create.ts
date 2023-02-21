// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// dbConnect is used to connect to our mongoDB database (via mongoose)
import dbConnect from '@/lib/dbConnect';

// getSession is used to get the user's session (if they are logged in)
import { getSession } from 'next-auth/react';

// import the models and types we need
import Users from 'bookem-shared/src/models/Users';
import VolunteerLogs from 'bookem-shared/src/models/VolunteerLogs';
import {
  VolunteerLogData,
  QueriedUserData,
} from 'bookem-shared/src/types/database';

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
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({
      error: 'You are unauthorized to perform this action. Please login first',
    });
    return;
  }

  // start a try catch block to catch any errors in parsing the request body
  const volunteerLog = req.body as VolunteerLogData;

  if (!volunteerLog.hours) {
    res.status(400).json({ message: 'Missing hours in request body.' });
    throw new Error('Invalid input. Missing hours in request body.');
  }

  if (!volunteerLog.numBooks) {
    res.status(400).json({ message: 'Missing numBooks in request body.' });
    throw new Error('Invalid input. Missing numBooks in request body.');
  }

  if (!volunteerLog.date) {
    res.status(400).json({ message: 'Missing date in request body.' });
    throw new Error('Invalid input. Missing date in request body.');
  }

  switch (req.method) {
    case 'POST':
      try {
        // connect to our database
        await dbConnect();
        const email = session.user?.email;

        const user = (await Users.findOne({
          email: email,
        })) as QueriedUserData;

        // If the user doesn't exist, return an error
        if (!user) {
          res.status(422).json({ message: 'This user does not exist' });
          throw new Error('This user does not exist');
        }

        const usersId = user._id;

        // construct the object we want to insert into our database
        await VolunteerLogs.create({
          ...volunteerLog,
          userId: usersId,
        });

        // return the result of the action
        res
          .status(200)
          .json(
            'Successfully inserted the log into the volunteerLogs collection'
          );
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
        error: 'Sorry, only POST requests are supported',
      });
      break;
  }
}
