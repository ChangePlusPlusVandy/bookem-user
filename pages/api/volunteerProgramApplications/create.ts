import dbConnect from 'lib/dbConnect';
import { hash } from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import Users from 'models/Users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'POST':
        const {userId, isApproved, emergencyContact, workStatus, employer, opportunites} = req.body;
        break;
    default:
        res.status(400).json({ message: 'Invalid request method' });
        break;
  }
}
