import { S3Client } from '@aws-sdk/client-s3';

export const buildS3 = () => {
  return new S3Client({
    region: process.env.AWS_REGION as string,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      //   sessionToken: process.env.aws_session_token as string,
    },
  });
};
