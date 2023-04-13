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

        // select events where tags contain "featured"
        const result = await VolunteerEvents.aggregate([
          // Multitable query: Populate the tags array as actual tag
          // objects rather than ids
          {
            $lookup: {
              from: 'tags',
              localField: 'tags',
              foreignField: '_id',
              as: 'tags',
            },
          },

          // Only keep events with featured tag
          {
            $match: {
              tags: {
                $elemMatch: {
                  tagName: 'featured',
                },
              },
            },
          },
        ]);

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
