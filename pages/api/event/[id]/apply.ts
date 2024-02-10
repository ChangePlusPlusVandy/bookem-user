import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import VolunteerApplications from 'bookem-shared/src/models/VolunteerApplications';
import { ApplicationResponseData } from 'bookem-shared/src/types/database';
import ApplicationResponse from 'bookem-shared/src/models/ApplicationResponse';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
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
     * @route GET /api/event/[id]/apply
     * @desc Return a list of application questions that this event needs
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
        const volunteerApplication = await VolunteerApplications.findOne({
          eventId: id,
        });

        if (!volunteerApplication) {
          return res
            .status(404)
            .json({ message: 'No application for the event found' });
        }

        const questions = volunteerApplication.questions;

        return res.status(200).json({ message: questions });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }
      break;

    /**
     * @route POST /api/event/[id]/apply
     * @desc Submit the answers to the questions this event needs
     * @req event id, user in session
     * @res Success message
     */
    case 'POST':
      try {
        await dbConnect();

        const response = req.body as ApplicationResponseData;
        const { answers } = response;

        // Declare the following ops to be an atomic transaction
        const mongoSession = await mongoose.startSession();
        await mongoSession.withTransaction(async () => {
          // insert the response to applicationResponses data
          const newResponse = new ApplicationResponse({
            userId: session.user.id,
            status: 'pending',
            eventId: id,
            answers,
          });

          await newResponse.save();

          // use the id of the saved response to update the volunteerApplications data
          await VolunteerApplications.updateOne(
            { eventId: id },
            {
              $push: {
                responses: newResponse._id,
              },
            }
          );
        });

        return res.status(200).json('Application Submitted');
      } catch (error: any) {
        res.status(500).json({ message: error.message });
        console.error(error);
      }

      break;
  }
}
