/* eslint-disable import/no-anonymous-default-export */
import { authenticateUser } from '@/lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from './auth/[...nextauth]';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        await authenticateUser(req, res);
        res.json({ message: 'Test Get' });
      } catch (error: any) {
        if (
          error.message.includes(
            'Cannot set headers after they are sent to the client'
          )
        ) {
          console.log('User not authenticated');
        }
      }
  }
};

export default handler;
