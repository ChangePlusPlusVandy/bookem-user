import dbConnect from 'lib/dbConnect';
import { hash } from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import Users from 'bookem-shared/src/models/Users';
import { QueriedUserData } from 'bookem-shared/src/types/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'POST':
      try {
        // start a try catch block to catch any errors in parsing the request body
        const user = req.body as QueriedUserData;

        // Get the user's email and password from the request body
        const { email, password, name } = user;

        // Check if the user's email and password are valid
        if (!email || !email.includes('@') || !password) {
          res.status(422).json({ message: 'Invalid input' });
          throw new Error('Invalid input');
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

        // Create a new user in the database
        const status = await Users.create({
          ...user,
          name,
          email,
          password: hashedPassword,
        });

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
