import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export async function authenticateUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getSession({ req });
    if (!session) {
      res.status(401).json({ message: 'Not authenticated' });
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}
