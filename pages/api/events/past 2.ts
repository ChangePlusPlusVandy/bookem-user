import dbConnect from '@/lib/dbConnect';
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get request method
  const { method } = req;

  switch (method) {
    /**
     * @route GET /api/events/past
     * @desc Get all events in the past
     * @res QueriedVolunteerEventData[]
     */
    case 'GET':
      try {
        await dbConnect();
        // Select all events where eventDate > today order by progamDate ascending
        const events = await VolunteerEvents.find({
          endDate: { $lt: new Date() },
        }).sort({ endDate: 1 });
        return res.status(200).json(events.slice(0, 5));
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }
      break;

    // case 'POST':
    // case 'PUT':
    // case 'DELETE':
    default:
      // res.setHeader('Allow', ['GET', 'PUT', 'DELETE', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
