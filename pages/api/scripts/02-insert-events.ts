import dbConnect from '@/lib/dbConnect';
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
import { NextApiRequest, NextApiResponse } from 'next';
import { generateEvent } from '@/pages/api/scripts/helper-functions';
import { EventStatus } from '@/pages/api/scripts/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      try {
        // Connect to the database
        await dbConnect();

        // delete all events
        await VolunteerEvents.deleteMany({});

        // create a bulk operation to minimize the number of db calls
        const bulkEvents =
          VolunteerEvents.collection.initializeUnorderedBulkOp();

        // insert a bunch of equally distributed events
        for (let i = 0; i < 100; i++) {
          const event = generateEvent(i);
          bulkEvents.insert(event);
        }

        // execute the bulk operation
        await bulkEvents.execute();

        res.status(200).json({
          success: true,
          message:
            'Successfully inserted a bunch of events (past, current, future) to db',
        });
      } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
