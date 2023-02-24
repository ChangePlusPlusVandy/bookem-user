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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  const sessionUser = session.user;
  console.log('Logged in user: ' + JSON.stringify(sessionUser));

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

        // Query program
        const program: QueriedVolunteerProgramData =
          (await VolunteerPrograms.findById(id)) as QueriedVolunteerProgramData;

        return res.status(200).json(program);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }
    case 'POST':
      try {
        await dbConnect();

        // Query program
        const program = await VolunteerPrograms.findById(id);

        // Query logged in user
        const user = await Users.findById(sessionUser._id);

        console.log('User in database: ', user);
        console.log('Program in database: ', program);

        // Find the index of logged in user in program.users
        const userIndex = program.users.indexOf(user._id);

        // Find the index of program in user.programs
        const programIndex = user.programs.indexOf(program._id);

        if (userIndex === -1 && programIndex === -1) {
          // Register to the program
          program.users.unshift(user._id);
          user.programs.unshift(program._id);
        } else if (userIndex === -1 && programIndex === -1) {
          throw new Error('Inconsistency betwee collections!');
        } else {
          // Unregister
          // Remove the user and program
          program.users.splice(userIndex, 1);
          user.programs.splice(programIndex, 1);
        }

        // Resave both document
        await user.save();
        await program.save();

        return res.status(200).json('Register Success');
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    // case 'PUT':
    // case 'DELETE':
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
