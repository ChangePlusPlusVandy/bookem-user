import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
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
const NUM_OF_USERS = 100;
const NUM_OF_LOGS_PER_USER = 20;
const NUM_OF_SCHOOLS = 40;

// arrays for dummy data
const SOURCES = ['social media', 'friend', 'news', 'other'];
const GENDERS = ['male', 'female'];
const ETHNICITY = ['white', 'black', 'asian', 'hispanic', 'other'];

const CATEGORIES = ['BFNK', 'RIF', 'RFR', 'Read Me Day', 'Book Drive'];

const USERTYPES = ['admin', 'user'];

const SCHOOLS = [...Array(NUM_OF_SCHOOLS)].map(
  () => faker.company.name() + ' School'
);

const PROGRAM_NAMES = [
  "Book sorting in Book'em center",
  ...SCHOOLS.map(school => 'Book sorting in ' + school),
];

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
        // throw 'Comment this line to delete all data from the database and re-populate it with dummy data';

        // ----------------- REPOPULATE USERS -----------------

        // Remove all users from the database
        await Users.deleteMany({});

        // Create a bulk insert operation for Users
        const bulkUsers = Users.collection.initializeUnorderedBulkOp();

        // Add our test user
        bulkUsers.insert({
          name: 'Bookem User',
          email: process.env.TEST_EMAIL || 'test_user@bookem.org',
          password: await hash(process.env.TEST_USER_PASSWD || '', 12),
          phone: '615-555-5555',
          address: faker.address.streetAddress(),
          sourceHeardFrom: SOURCES[0],
          ethnicity: faker.helpers.arrayElement(ETHNICITY),
          gender: faker.helpers.arrayElement(GENDERS),
          backgroundCheck: {
            passed: true,
            expirationDate: new Date(),
          },
          userType: USERTYPES[0],
          programs: [],
          tags: CATEGORIES[0],
        });

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
            backgroundCheck: {
              passed: true,
              expirationDate: new Date(),
            },
            userType: faker.helpers.arrayElement(USERTYPES),
            programs: [],
            tags: [],
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
        PROGRAM_NAMES.forEach(programName => {
          // select random volunteers
          const selectedUsers = faker.helpers.arrayElements(userIds);

          const isOpen: boolean = faker.datatype.boolean();
          const programId = new ObjectId();
          if (isOpen) {
            // for every volunteer chosen, add the program to their programs array
            selectedUsers.forEach(userId => {
              // add the program ID to the user's programs array
              bulkUsers2.find({ _id: new ObjectId(userId) }).updateOne({
                $push: {
                  programs: programId,
                },
              });
            });
          }

          // insert the program into the database
          bulkPrograms.insert({
            _id: programId,
            name: programName,
            description: faker.lorem.paragraph(),
            school: faker.helpers.arrayElement(SCHOOLS),
            programDate: faker.date.past(),
            category: faker.helpers.arrayElement(CATEGORIES),
            isOpen: isOpen,
            volunteers: isOpen
              ? selectedUsers.map(userId => new ObjectId(userId))
              : [],
            maxSpot: faker.datatype.number({
              min: selectedUsers.length,
              max: selectedUsers.length + 20,
            }),
            location: faker.address.streetAddress(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
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
