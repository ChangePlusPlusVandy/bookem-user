import dbConnect from 'lib/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import VolunteerProgramApplications from 'bookem-shared/src/models/VolunteerProgramApplications';
import { VolunteerProgramData } from 'bookem-shared/src/types/database';

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
      // start a try catch block to catch any errors in parsing the request body
      const applicationData = req.body as VolunteerProgramData;

      // Connect to the database
      await dbConnect();

      // create the application in the database
      const status = await VolunteerProgramApplications.create(applicationData);

      // return the status of the application
      res.status(201).json({ message: 'Application created', ...status });
      break;
    default:
      res.status(400).json({ message: 'Invalid request method' });
      break;
  }
}
