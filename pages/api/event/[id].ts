import dbConnect from '@/lib/dbConnect';
import Users from 'bookem-shared/src/models/Users';
import VolunteerEvents from 'bookem-shared/src/models/VolunteerEvents';
import Tags from 'bookem-shared/src/models/Tags';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import mongoose from 'mongoose';
import VolunteerPrograms from 'bookem-shared/src/models/VolunteerPrograms';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get session user
  const session = await getServerSession(req, res, authOptions);

  // Get request parameter
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    /**
     * @route GET /api/event/[id]
     * @desc Get event by id
     * @req event id, user in session
     * @res QueriedVolunteerEventData
     */
    case 'GET':
      try {
        await dbConnect();

        if (!id) return res.status(400).json({ message: 'Missing id' });

        // check if id is a valid mongoose id
        if (!ObjectId.isValid(id as string))
          return res.status(400).json({ message: 'Invalid id' });

        // TODO: remove this after development
        await Tags.find({});
        await VolunteerPrograms.find({});

        // query event and populate fields with mongoose refs
        const event = await VolunteerEvents.findById(id)
          .populate('program')
          .populate('tags')
          .populate('volunteers');

        // if event is not found
        if (!event) return res.status(400).json({ message: 'Event not found' });

        return res.status(200).json(event);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }
      break;

    /**
     * @route POST /api/event/[id]
     * @desc Signup/Unsignup the user
     * @req event id, user in session
     * @res Success message
     */
    case 'POST':
      try {
        await dbConnect();

        // Query event
        const event = await VolunteerEvents.findById(id).populate('program');

        // Query logged in user
        const user = await Users.findById(session.user._id);

        // Find the index of logged in user in event.volunteers
        const userIndex = event.volunteers.indexOf(user._id);

        // Find the index of event in user.events
        const eventIndex = user.events.indexOf(event._id);

        // Declare the following ops to be an atomic transaction
        const mongoSession = await mongoose.startSession();
        await mongoSession.withTransaction(async () => {
          if (userIndex === -1 && eventIndex === -1) {
            // Register to the event

            // TODO: Speed this up!
            event.volunteers.unshift(user._id);
            user.events.unshift(event._id);
          } else if (userIndex === -1 || eventIndex === -1) {
            throw new Error('Inconsistency between collections!');
          } else {
            // Unregister
            // Remove the user and event

            // TODO: Speed this up!
            event.volunteers.splice(userIndex, 1);
            user.events.splice(eventIndex, 1);
          }

          // Resave both document
          await user.save();
          await event.save();
        });

        return res.status(200).json('Register Success');
      } catch (error: any) {
        res.status(500).json({ message: error.message });
        console.error(error);
      }

      break;
    // case 'PUT':
    // case 'DELETE':
    // default:
    // res.setHeader('Allow', ['GET', 'PUT', 'DELETE', 'POST']);
    // res.status(405).end(`Method ${method} Not Allowed`);
  }
}
