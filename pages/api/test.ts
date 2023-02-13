/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        res.json({ message: 'Test Get' });
      } catch (error: any) {
        console.log('Exception thrown');
        console.error(error);
      }
    case 'POST':
      try {
        res.json({ message: 'Test POST' });
      } catch (error: any) {
        console.error(error);
      }
  }
}
