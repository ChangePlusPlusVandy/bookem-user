import dbConnect from 'lib/dbConnect';
import { hash } from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import Users from 'models/Users';

interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  sourceHeardFrom: string;
  ethnicity: string;
  gender: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'POST':
      // Get the user's email and password from the request body
      const userData:User = req.body;

      // Connect to the database
      await dbConnect();

      // Check if the user already exists in database
      const checkExisting = await Users.findOne({ email:userData.email });

      // If the user already exists, return an error
      if (checkExisting) {
        res.status(422).json({ message: 'User email already exists' });
        throw new Error('User email already exists');
      }

      // Hash the user's password
      const hashedPassword = await hash(userData.password, 12);

      // Create a new user in the database
      const status = await Users.create({...userData, password: hashedPassword});

      // Return the status of the user creation
      res.status(201).json({ message: 'User created', ...status });
      break;
    default:
      res.status(400).json({ message: 'Invalid request method' });
      break;
  }
}
