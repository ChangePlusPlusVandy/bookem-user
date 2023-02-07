import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'lib/dbConnect';
import Users from 'bookem-shared/src/models/Users';
import { faker } from '@faker-js/faker';
import VolunteerLogs from 'bookem-shared/src/models/VolunteerLogs';
import { ObjectId } from 'mongodb';
import { hash } from 'bcrypt';
import VolunteerPrograms from 'bookem-shared/src/models/VolunteerPrograms';

// Important: this script is only for development purposes!
if (process.env.NODE_ENV !== 'development')
  throw new Error('This script is only for development purposes');

/**
 * This API route is used to populate the database with dummy data
 *
 * It will delete All data from Users, VolunteerLogs
 * and repopulate them with dummy data
 */
const NUM_OF_USERS = 10;
const NUM_OF_LOGS_PER_USER = 15;
const NUM_OF_SCHOOLS = 40;

// arrays for dummy data
const SOURCES = ['social media', 'friend', 'news', 'other'];
const GENDERS = ['male', 'female'];
const ETHNICITY = ['white', 'black', 'asian', 'hispanic', 'other'];
const PROGRAM_NAMES = [
  "Books For Nashville's Kids",
  'Reading Is Fundamental',
  'Ready For Reading',
  'Read Me Day',
  'Book Drive',
];
const SCHOOLS = [...Array(NUM_OF_SCHOOLS)].map(
  () => faker.company.name() + ' School'
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'GET':
      try {
        // Connect to the database
        await dbConnect();

        // TODO: uncomment this line but do not commit it to the repo
        throw 'Uncomment this line to delete all data from the database and re-populate it with dummy data';

        // ----------------- REPOPULATE USERS -----------------

        // Remove all users from the database
        await Users.deleteMany({});

        // Create a bulk insert operation for Users
        const bulkUsers = Users.collection.initializeUnorderedBulkOp();

        // Insert NUM_OF_USERS users into the database
        for (let i = 0; i < NUM_OF_USERS; i++) {
          bulkUsers.insert({
            name: faker.name.firstName(),
            email: faker.internet.email(),
            password: await hash(faker.internet.password(), 12),
            phone: faker.phone.number(),
            address: faker.address.streetAddress(),
            sourceHeardFrom: faker.helpers.arrayElement(SOURCES),
            ethnicity: faker.helpers.arrayElement(ETHNICITY),
            gender: faker.helpers.arrayElement(GENDERS),
            programs: [],
          });
        }

        // execute the bulk insert
        await bulkUsers.execute();

        // ----------------- REPOPULATE VOLUNTEER LOGS -----------------

        // Remove all volunteer logs from the database
        await VolunteerLogs.deleteMany({});

        // Create a bulk insert operation for VolunteerLogs
        const bulkLogs = VolunteerLogs.collection.initializeUnorderedBulkOp();

        // get the Users collection
        const users = await Users.find({});

        // get the list of user IDs
        const userIds: string[] = users.map(user => user._id.toString());

        // iterate through each user's userID
        userIds.forEach(userId => {
          // Insert NUM_OF_LOGS_PER_USER volunteer logs for each user
          for (let i = 0; i < NUM_OF_LOGS_PER_USER; i++) {
            bulkLogs.insert({
              userID: new ObjectId(userId),
              school: faker.helpers.arrayElement(SCHOOLS),
              teacher: faker.name.firstName() + ' ' + faker.name.lastName(),
              date: faker.date.past(),
              hours: faker.datatype.number({ min: 1, max: 5 }),
              feedback: faker.lorem.sentence(),
              numBooks: faker.datatype.number({ min: 0, max: 10 }),
            });
          }
        });

        // execute the bulk insert
        await bulkLogs.execute();

        // ----------------- REPOPULATE PROGRAMS -----------------

        // Remove all volunteer programs from the database
        await VolunteerPrograms.deleteMany({});

        // Create a bulk insert operation for VolunteerPrograms
        const bulkPrograms =
          VolunteerPrograms.collection.initializeUnorderedBulkOp();

        // Create a new bulk insert operation for Users
        const bulkUsers2 = Users.collection.initializeUnorderedBulkOp();

        // iterate through each program name
        PROGRAM_NAMES.forEach(program => {
          // select random volunteers
          const selectedUsers = faker.helpers.arrayElements(userIds);

          // for every volunteer chosen, add the program to their programs array
          selectedUsers.forEach(userId => {
            // add the program ID to the user's programs array
            bulkUsers2.find({ _id: new ObjectId(userId) }).updateOne({
              $push: {
                programs: new ObjectId(),
              },
            });
          });

          // insert the program into the database
          bulkPrograms.insert({
            name: program,
            description: faker.lorem.paragraph(),
            school: faker.helpers.arrayElement(SCHOOLS),
            programDate: faker.date.past(),
            isArchived: false,
            volunteers: selectedUsers.map(userId => new ObjectId(userId)),
          });
        });

        // execute the bulk insert
        await bulkPrograms.execute();
        await bulkUsers2.execute();

        // Return the status of the user creation
        res.status(201).json({
          message:
            new Date() + 'Successfully populated the database with dummy data',
        });
      } catch (e) {
        res.status(500).json({ message: 'An error occurred', error: e });
      }
      break;
    default:
      res.status(400).json({ message: 'Invalid request method' });
      break;
  }
}
