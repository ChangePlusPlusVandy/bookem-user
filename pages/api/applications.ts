import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import VolunteerApplications from 'bookem-shared/src/models/VolunteerApplications';
import { ApplicationResponseData } from 'bookem-shared/src/types/database';
import ApplicationResponse from 'bookem-shared/src/models/ApplicationResponse';
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get session user
  const session = await getServerSession(req, res, authOptions);
  // for API testing only
  // TODO extract this logic
  // const session = {
  //   user: {
  //     id: '60f3f5f8f0f6f6f6f6f6f6f6',
  //   },
  // };

  // Get request parameter
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    /**
     * @route GET /api/applications
     * @desc Get all applications to all applied events for a user
     * @req event id, user in session
     * @res list of applied events
     */
    case 'GET':
      try {
        await dbConnect();
        await VolunteerEvents.find({});

        // query volunteerApplication by event id attributes
        const applicationResponses = await ApplicationResponse.find({
          userId: session.user.id,
        }).populate('eventId');

        // const appliedEvents = applicationResponses.map((applicationResponse) => {
        //     return applicationResponse.eventId;
        // };

        return res.status(200).json({ message: applicationResponses });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }
      break;
  }
}
