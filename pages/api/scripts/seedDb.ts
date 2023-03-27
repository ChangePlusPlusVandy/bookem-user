import dbConnect from '@/lib/dbConnect';
import { faker } from '@faker-js/faker';
import { hash } from 'bcrypt';
import Admins from 'bookem-shared/src/models/Admins';
import Users from 'bookem-shared/src/models/Users';
import VolunteerLogs from 'bookem-shared/src/models/VolunteerLogs';
import VolunteerProgramApplications from 'bookem-shared/src/models/VolunteerProgramApplications';
import VolunteerPrograms from 'bookem-shared/src/models/VolunteerPrograms';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.NODE_ENV !== 'test') {
    res.status(400).json({ message: 'Node Environment must be test!' });
    return;
  }

  switch (req.method) {
    case 'POST':
      // Connect to the database
      await dbConnect();

      // clear test collections
      await Users.deleteMany({});
      await Admins.deleteMany({});
      await VolunteerLogs.deleteMany({});
      await VolunteerPrograms.deleteMany({});
      await VolunteerProgramApplications.deleteMany({});

      // Add our test user
      await Users.insertMany({
        name: 'Bookem User',
        email: process.env.TEST_EMAIL || 'test_user@bookem.org',
        password: await hash(process.env.TEST_USER_PASSWD || '', 12),
        phone: '615-555-5555',
        address: faker.address.streetAddress(),
        sourceHeardFrom: 'social media',
        ethnicity: 'white',
        gender: 'female',
        backgroundCheck: {
          passed: true,
          expirationDate: new Date(),
        },
        userType: 'user',
        programs: [],
        tags: 'BFNK',
      });

      res.status(200).json({ message: 'Test database cleared' });
      break;

    default:
      res.status(400).json({ message: 'Invalid request method' });
      break;
  }
}
