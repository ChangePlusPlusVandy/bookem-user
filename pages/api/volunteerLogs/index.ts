// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// dbConnect is used to connect to our mongoDB database (via mongoose)
import dbConnect from 'lib/dbConnect';

// getSession is used to get the user's session (if they are logged in)
import { getSession } from 'next-auth/react';

// mongoose is used to create types for our models
import mongoose from 'mongoose';

// import the models and types we need
import VolunteerLogs from 'bookem-shared/src/models/VolunteerLogs';
import Users from 'bookem-shared/src/models/Users';
import { UserData } from 'bookem-shared/src/types/database';

// creating a new interface that extend UserData and adds the field _id
interface QueriedUserData extends UserData {
  _id: mongoose.Types.ObjectId;
}

/**
 * /api/VolunteerLogs/:
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
        const email = session.user?.email;

        // Connect to the database
        await dbConnect();

        const user: QueriedUserData | null = await Users.findOne({
          email: email,
        });

        // If the user doesn't exist, return an error
        if (!user) {
          res.status(422).json({ message: 'This user does not exist' });
          throw new Error('This user does not exist');
        }

        const usersId = user._id;

        // get all volunteerEvents from collection that match the user's Id
        const volunteerLogs = await VolunteerLogs.find({
          userId: usersId,
        });

        // return the result
        res.status(200).json(volunteerLogs);
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
