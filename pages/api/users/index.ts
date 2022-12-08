import type { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from 'lib/dbConnect';

import { getSession } from 'next-auth/react';
import Users from 'models/Users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({
      error: 'You are unauthorized to perform this action. Please login first',
    });
    return;
  }

  switch (req.method) {
    case 'GET':
      const email = session.user?.email;

      try {
        const user = await Users.findOne({ email: email });
        res.status(200).json(user);
      } catch (e) {
        console.error('An error has occurred in index.ts', e);
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