import { NextApiRequest, NextApiResponse } from 'next';
import { buildS3 } from '@/lib/s3config'; // Import AWS SDK for S3
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Users from 'bookem-shared/src/models/Users';
import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import multer from 'multer';

interface ExtendedRequest extends NextApiRequest {
  file: any;
}
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
export const config = {
  api: {
    bodyParser: false,
  },
};

const runMiddleware = (
  req: ExtendedRequest,
  res: NextApiResponse,
  fn: (...args: any[]) => void
): Promise<any> => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

export default async function handler(
  req: ExtendedRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    /**
     * @route POST /api/users/upload-s3
     * @desc Upload profile picture to S3 bucket
     */
    case 'POST':
      const s3 = buildS3();
      try {
        await runMiddleware(req, res, upload.single('file'));
        const file = req.file;
        // const { email } = req.body;
        const fileName = Date.now().toString();
        if (!file) {
          console.log('did not receive file');
        }
        const uploadCommand = new PutObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET,
          Key: fileName,
          Body: file.buffer,
          ContentType: 'image/jpeg',
          ACL: 'public-read',

        });
        const uploadResult = await s3.send(uploadCommand);
        if (uploadResult.$metadata.httpStatusCode === 200) {
          console.log('File uploaded to bucket: ', uploadCommand.input.Bucket);
          const command = new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: fileName,
          });
          const url = await getSignedUrl(s3, command, { expiresIn: 15 * 60 });
          console.log(url);
          res.status(200).json({ url });
        } else {
          console.error(
            'Error uploading file to S3. HTTP Status Code:',
            uploadResult.$metadata.httpStatusCode
          );
          res.status(500).json({ error: 'Internal Server Error' });
        }
      } catch (err) {
        console.error('Error uploading file to S3:', err);
        res.status(500).json({ err });
      }
  }
}
