import dbConnect from '@/lib/dbConnect';
import Users from 'bookem-shared/src/models/Users';
import VolunteerPrograms from 'bookem-shared/src/models/VolunteerPrograms';
import {
  QueriedUserData,
  QueriedVolunteerProgramData,
} from 'bookem-shared/src/types/database';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import mongoose from 'mongoose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  const sessionUser = session.user;
  console.log('Logged in user: ' + sessionUser);

  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    /**
     * @route GET /api/event/[id]
     * @desc Get program by id
     * @req id, user
     * @res QueriedVolunteerProgramData
     */
    case 'GET':
      try {
        await dbConnect();
        const program: QueriedVolunteerProgramData =
          (await VolunteerPrograms.findById(
            new mongoose.Types.ObjectId(id as string)
          )) as QueriedVolunteerProgramData;
        return res.status(200).json(program);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }
    case 'POST':
      try {
        await dbConnect();
        const program: QueriedVolunteerProgramData =
          (await VolunteerPrograms.findById(id)) as QueriedVolunteerProgramData;

        const user: QueriedUserData = (await Users.findById(
          sessionUser._id
        )) as QueriedUserData;

        console.log('User in database: ', user);
        console.log('Program in database: ', program);

        const userIndex = program.users.indexOf(user._id);

        if (userIndex == -1) {
          // Register the user
        } else {
          // Remove the user
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }
    // case 'PUT':
    // case 'DELETE':
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
