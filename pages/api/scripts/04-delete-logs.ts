import dbConnect from '@/lib/dbConnect';
import VolunteerLogs from 'bookem-shared/src/models/VolunteerLogs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      try {
        // Connect to the database
        await dbConnect();

        // TODO:
        await VolunteerLogs.deleteMany({});

        res
          .status(200)
          .json({ success: true, message: 'This is a template endpoint' });
      } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
