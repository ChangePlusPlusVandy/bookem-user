import dbConnect from '@/lib/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Users from 'bookem-shared/src/models/Users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // Get request method
  const { method } = req;

  switch (method) {
    /**
     * @route PATCH /api/users/upload-profile
     * @desc Upload a profile picture for the user
     */
    case 'PATCH':
      try {
        // check that user is authenticated
        const session = await getServerSession(req, res, authOptions);

        await dbConnect();

        // get profile img url from req.body
        const { profileImgUrl } = req.body;

        // get user id from session
        const userId = session.user._id;

        // update user's profile picture
        const updatedUser = await Users.findByIdAndUpdate(
          userId,
          { profileImgUrl: profileImgUrl },
          { new: true }
        );

        // return the result
        res.status(200).json(updatedUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
      }

      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
