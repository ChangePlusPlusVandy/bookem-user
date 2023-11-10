import dbConnect from '@/lib/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import Tags from 'bookem-shared/src/models/Tags';
import VolunteerPrograms from 'bookem-shared/src/models/VolunteerPrograms';
import { INSERTED_PROGRAMS, INSERTED_TAGS } from './constants';
import { generateProgram, generateTag } from './helper-functions';

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
        // delete all tags
        await Tags.deleteMany({});

        // delete all programs
        await VolunteerPrograms.deleteMany({});

        // Generate programs
        INSERTED_PROGRAMS.forEach(async program => {
          const generatedProgram = generateProgram(program);
          await VolunteerPrograms.insertMany(generatedProgram);
        });

        // Generate tags
        INSERTED_TAGS.forEach(async tag => {
          const genratedTag = generateTag(tag);
          await Tags.insertMany(genratedTag);
        });

        res
          .status(200)
          .json({
            success: true,
            message: 'Inserted fake tags and program data',
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
