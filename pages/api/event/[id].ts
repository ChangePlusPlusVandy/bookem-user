import dbConnect from '@/lib/dbConnect';
import VolunteerPrograms from 'bookem-shared/src/models/VolunteerPrograms';
import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({
      error: 'You are unauthorized to perform this action. Please login first',
    });
    return;
  }
  const user = session.user;
  console.log('Logged in user: ' + user);

  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        await dbConnect();
        const program: QueriedVolunteerProgramData =
          (await VolunteerPrograms.findById(id)) as QueriedVolunteerProgramData;
        return res.status(200).json(program);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }
    case 'PUT':
    case 'DELETE':
    case 'POST':
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
