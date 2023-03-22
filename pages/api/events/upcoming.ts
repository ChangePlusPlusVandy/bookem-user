import dbConnect from '@/lib/dbConnect';
import VolunteerPrograms from 'bookem-shared/src/models/VolunteerPrograms';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get request method
  const { method } = req;

  switch (method) {
    /**
     * @route GET /api/events/upcoming
     * @desc Get all programs in the future
     * @res QueriedVolunteerProgramData[]
     */
    case 'GET':
      try {
        await dbConnect();

        // Select all programs where programDate > today order by progamDate ascending
        const programs = await VolunteerPrograms.find({
          programDate: { $gt: new Date() },
        }).sort({ programDate: 1 });

        return res.status(200).json(programs);
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
