// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// dbConnect is used to connect to our mongoDB database (via mongoose)
import dbConnect from 'lib/dbConnect';

// getSession is used to get the user's session (if they are logged in)
import { getSession } from 'next-auth/react';
import Users from 'bookem-shared/src/models/Users';

/**
 * /api/dummy:
 *  get:
 *    description: Get all dummy data
 *    responses:
 *      200:
 *        description: Success
 *        content: JSON object of all dummy data
 *      500:
 *        description: Error
 *        content: JSON object of error
 *  post:
 *    description: Insert dummy data
 *    responses:
 *      200:
 *        description: Success
 *        content: Success message
 *      500:
 *        description: Error
 *        content: JSON object of error
 * */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // check that user is authenticated
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({
      error: 'You are unauthorized to perform this action. Please login first',
    });
    return;
  }

  // check if the request method is GET
  switch (req.method) {
    case 'GET':
      try {
        // connect to our database
        await dbConnect();

        // do action on db. in this case, we are retrieving all documents from the collection
        const users = await Users.find();

        // return the result of the action
        res.status(200).json(users);
      } catch (e) {
        // if there is an error, print and return the error
        console.error('An error has occurred in dummy.ts', e);
        res.status(500).json({
          error: 'Sorry, an error occurred while connecting to the database',
        });
      }
      break;

    case 'POST':
      try {
        // connect to our database
        const client = await dbConnect();

        // automatically connect to db based on .env URL
        const db = client.db();

        // construct the object we want to insert into our database
        const objToInsert = {
          name: 'John Doe',
        };

        // do action on db. in this case, we are inserting a new document into dummyCollection
        await db.collection('dummyCollection').insertOne(objToInsert);

        // return the result of the action
        res
          .status(200)
          .json(
            'Successfully inserted the document into the dummyCollection collection'
          );
      } catch (e) {
        // if there is an error, print and return the error
        console.error('An error has occurred in hello.ts', e);
        res.status(500).json({
          error:
            'Sorry, an error occurred while connecting/inserting to the database',
        });
      }
      break;

    default:
      res.status(405).json({
        error: 'Sorry, only GET and POST requests are supported',
      });
      break;
  }
}
