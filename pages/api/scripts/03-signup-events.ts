import dbConnect from '@/lib/dbConnect';
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
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

        // TODO: sign up the user for many events

        // filter to find those that don't require application
        const allEvents = await VolunteerEvents.find({
          requireApplication: false,
        });

        // TODO: call event/signup endpoint

        res.status(200).json(allEvents);
      } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
