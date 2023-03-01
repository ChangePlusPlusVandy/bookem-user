// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// dbConnect is used to connect to our mongoDB database (via mongoose)
import dbConnect from 'lib/dbConnect';

// getSession is used to get the user's session (if they are logged in)
import { getSession } from 'next-auth/react';

// import the models and types we need
import Users from 'bookem-shared/src/models/Users';
import { QueriedUserData } from 'bookem-shared/src/types/database';
import VolunteerPrograms from 'bookem-shared/src/models/VolunteerPrograms';

/**
 * /api/volunteerPrograms/:
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
        // TODO: change from fixed user to variable
        const email = 'test_user@bookem.org';

        // Connect to the database
        await dbConnect();

        // TODO: use find by id from session
        const user = (await Users.findOne({
          email: email,
        })) as QueriedUserData;

        // If the user doesn't exist, return an error
        if (!user) {
          res.status(422).json({ message: 'This user does not exist' });
          throw new Error('This user does not exist');
        }

        const usersId = user._id;

        // get all volunteerEvents from collection that match the user's Id
        const volunteerPrograms = await VolunteerPrograms.find({
          userId: usersId,
        });

        // return the result
        res.status(200).json(volunteerPrograms);
      } catch (e) {
        // if there is an error, print and return the error
        console.error('An error has occurred in volunteerPrograms index.ts', e);
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
