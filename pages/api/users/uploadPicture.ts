import S3 from 'aws-sdk/clients/s3';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'POST':
      try {
      } catch (e) {
        console.log('error:', e);
      }

      break;
    default:
      break;
  }
}
