import dbConnect from '@/lib/dbConnect';
import Admins from 'bookem-shared/src/models/Admins';
import Users from 'bookem-shared/src/models/Users';
import { NextApiRequest, NextApiResponse } from 'next';
import { generateAdmin, generateUser } from './helper-functions';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      try {
        // Connect to the database
        await dbConnect();

        // delete all users and admins
        await Users.deleteMany({});
        await Admins.deleteMany({});

        // insert user
        const user = await generateUser({});
        await Users.insertMany(user);

        // insert admin
        const admin = await generateAdmin();
        await Admins.insertMany(admin);

        res.status(200).json({
          success: true,
          message: 'Successfully inserted a user and an admin to db',
        });
      } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
