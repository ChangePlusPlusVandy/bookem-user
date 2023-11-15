import dbConnect from '@/lib/dbConnect';
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  fillProgramEvents,
  generateEvent,
  generateProgram,
  generateTag,
} from '@/pages/api/scripts/helper-functions';
import {
  INSERTED_PROGRAMS,
  INSERTED_TAGS,
} from '@/pages/api/scripts/constants';
import Tags from 'bookem-shared/src/models/Tags';
import VolunteerPrograms from 'bookem-shared/src/models/VolunteerPrograms';
import {
  QueriedTagData,
  QueriedVolunteerEventData,
  QueriedVolunteerProgramData,
} from 'bookem-shared/src/types/database';

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

        // get all tags
        const tags = await Tags.find({});

        // get all programs
        const programs = await VolunteerPrograms.find({});

        // create a bulk operation to minimize the number of db calls
        const bulkEvents =
          VolunteerEvents.collection.initializeUnorderedBulkOp();

        // insert a bunch of equally distributed events
        for (let i = 0; i < 100; i++) {
          const event = generateEvent(
            i,
            tags as QueriedTagData[],
            programs as QueriedVolunteerProgramData[]
          );
          bulkEvents.insert(event);
        }

        // execute the bulk operation
        await bulkEvents.execute();

        // Query them back to update program
        const events = await VolunteerEvents.find({ program: { $ne: null } });
        // Update programs so that programs contain their corresponding events
        await fillProgramEvents(events);

        // TODO: Fill the tags with events as well

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
