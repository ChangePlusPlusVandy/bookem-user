import dbConnect from '@/lib/dbConnect';
import { hash } from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import Users from 'bookem-shared/src/models/Users';
import { QueriedUserData, UserData } from 'bookem-shared/src/types/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'POST':
      try {
        // start a try catch block to catch any errors in parsing the request body
        const user = JSON.parse(req.body) as QueriedUserData;

        // Get the user's email and password from the request body
        const { email, password, name } = user;

        // Check if the user's email and password are valid
        if (!email || !email.includes('@') || !password) {
          res.status(422).json({ message: 'Invalid email or password' });
          throw new Error('Invalid email or password');
        }

        // Connect to the database
        await dbConnect();

        // Check if the user already exists in database
        const checkExisting = (await Users.findOne({
          email,
        })) as QueriedUserData;

        // If the user already exists, return an error
        if (checkExisting) {
          res.status(422).json({ message: 'User email already exists' });
          throw new Error('User email already exists');
        }

        // Hash the user's password
        const hashedPassword = await hash(password, 12);

        // construct the user object to insert into the database
        let userToInsert: UserData = {
          name,
          email,
          password: hashedPassword,
          phone: user.phone,
          address: user.address,
          birthday: user.birthday,
          emergencyName: user.emergencyName,
          emergencyPhone: user.emergencyPhone,
          emergencyRelationship: user.emergencyRelationship,
          members: user.members,
          volunteerReason: user.volunteerReason,
          occupation: user.occupation,
          occupationTitle: user.occupationTitle,
          occupationOrg: user.occupationOrg,
          joinNewsletter: user.joinNewsletter,
          sourceHeardFrom: user.sourceHeardFrom,
          ethnicity: user.ethnicity,
          gender: user.gender,
          events: user.events,
        };

        // Delete any fields that are undefined or empty
        if (
          !user.members ||
          user.members.length === 0 ||
          user.members.length === undefined
        )
          delete userToInsert.members;
        // delete optional fields if they are empty
        if (!user.ethnicity) delete userToInsert.ethnicity;
        if (!user.gender) delete userToInsert.gender;

        // Create a new user in the database
        const status = await Users.insertMany(userToInsert);

        // Return the status of the user creation
        res.status(201).json({ message: 'User created', ...status });
      } catch (e) {
        res.status(500).json({ message: 'An error occurred', error: e });
      }
      break;
    default:
      res.status(400).json({ message: 'Invalid request method' });
      break;
  }
}
