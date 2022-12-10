import dbConnect from 'lib/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { getSession } from 'next-auth/react';
import VolunteerProgramApplications from 'models/VolunteerProgramApplications';

interface VolunteerProgramApplication {
  emergencyContact: {
    firstName: string;
    lastName: string;
    phone: string;
    relationship: string;
  };
  workStatus?: string;
  employer?: string;
  opportunities?: Array<string>;
}

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
    case 'POST':
      const applicationData: VolunteerProgramApplication = req.body;
      const status = await VolunteerProgramApplications.create(applicationData);
      await dbConnect();
      res.status(201).json({ message: 'Application created', ...status });
      break;
    default:
      res.status(400).json({ message: 'Invalid request method' });
      break;
  }
}
