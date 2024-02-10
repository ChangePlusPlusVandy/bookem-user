import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import ApplicationResponse from 'bookem-shared/src/models/ApplicationResponse';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { makeSessionForAPITest } from '@/utils/api-testing';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get session user
  let session =
    (await getServerSession(req, res, authOptions)) || makeSessionForAPITest();

  // Get request parameter
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    /**
     * @route GET /api/event/[id]/submitted-application
     * @desc Get submitted application
     * @req event id, user in session
     * @res list of application questions
     */
    case 'GET':
      try {
        await dbConnect();

        if (!id) return res.status(400).json({ message: 'Missing id' });

        // check if id is a valid mongoose id
        if (!ObjectId.isValid(id as string))
          return res.status(400).json({ message: 'Invalid id' });

        // query volunteerApplication by event id attributes
        // using findOne - assuming there is only one application per event per user
        const volunteerApplication = await ApplicationResponse.findOne({
          userId: session.user.id,
          eventId: id,
        });

        // TODO - refactor a common util for when something is not found
        if (!volunteerApplication) {
          return res
            .status(404)
            .json({ message: 'No application for the event found' });
        }

        return res.status(200).json({ message: volunteerApplication });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }
      break;
  }
}
