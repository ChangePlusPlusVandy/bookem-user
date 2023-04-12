import dbConnect from '@/lib/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
import Tags from 'bookem-shared/src/models/Tags';
import mongoose from 'mongoose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      try {
        // Connect to the database
        await dbConnect();

        // Uncomment this line if mongoose complains
        // await Tags.find();

        // select events where tags contains "featured"
        const eventsDTO = await VolunteerEvents.find().populate('tags', [
          'tagName',
        ]);

        // Only keep events that have a featured tags
        const result = eventsDTO.filter(event =>
          event.tags.some((tag: any) => 'featured' === tag.tagName)
        );

        console.log('Events: ', result);

        res.status(200).json(result);
      } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
