// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// dbConnect is used to connect to our mongoDB database (via mongoose)
import dbConnect from 'lib/dbConnect';

// getSession is used to get the user's session (if they are logged in)
import { getSession } from 'next-auth/react';
import VolunteerEvents from 'models/VolunteerEvents';

/**
 * /api/volunteerEvents/:
 *  get:
 *    description: Get all volunteer events
 *      200:
 *        description: Success
 *        content: JSON object of all volunteer events 
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

  switch (req.method) {
    case 'GET':
      try {
        // connect to our database
        await dbConnect();

        // get all volunteerEvents from collection
        const volunteerEvents = await VolunteerEvents.find();

        // return the result
        res.status(200).json(volunteerEvents);
      } catch (e) {
        // if there is an error, print and return the error
        console.error('An error has occurred in volunteerEvents index.ts', e);
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