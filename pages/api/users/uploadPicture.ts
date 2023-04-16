import S3 from 'aws-sdk/clients/s3';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const s3 = new S3({
  region: 'us-east-2',
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
  signatureVersion: 'v4',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log('hi');
  switch (req.method) {
    case 'POST':
      try {
        const file = JSON.parse(req.body) as File;
        console.log(file);

        const fileParams = {
          Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
          Key: file.name,
          Expires: 600,
          ContentType: file.type,
        };

        const url = await s3.getSignedUrlPromise('putObject', fileParams);

        await axios.put(url, file, {
          headers: {
            'Content-type': String(file.type),
          },
        });

        res.status(201).json({ message: 'Uploaded user picture', file });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'An error occurred', error: e });
      }
      break;
    default:
      res.status(400).json({ message: 'Invalid request method' });
      break;
  }
}

/*
export default async function aws(file: File) {
  try {
    const fileParams = {
      Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
      Key: file.name,
      Expires: 600,
      ContentType: file.type,
    };

    const url = await s3.getSignedUrlPromise('putObject', fileParams);

    await axios.put(url, file, {
      headers: {
        'Content-type': String(file.type),
      },
    });

    return 'Uploaded!';
  } catch (e) {
    return e;
  }
}
*/
