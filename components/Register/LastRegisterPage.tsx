import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { RegisterFormData } from '@/utils/types';
import Image from 'next/image';
import {
  LastPageContainer,
  LastPageTextContainer,
  LastPageText,
  Button,
  UploadButton,
  UploadContainer,
  UploadInput,
  UploadPictureContainer,
} from '@/styles/register.styles';

/* TODO: MOVE ALL OF THIS TO BACKEND API */
import S3 from 'aws-sdk/clients/s3';
import axios from 'axios';

const s3 = new S3({
  region: 'us-east-2',
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
  signatureVersion: 'v4',
});

// upload file to S3 Bucket
const uploadS3 = async (file: File, email: string) => {
  try {
    // put file in S3 bucket
    const fileParams = {
      Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
      Key: file.name,
      Expires: 600,
      ContentType: file.type,
    };

    const putURL = await s3.getSignedUrlPromise('putObject', fileParams);

    await axios.put(putURL, file, {
      headers: {
        'Content-type': String(file.type),
      },
    });

    // get file's presigned URL from S3 bucket
    const getURL = await s3.getSignedUrlPromise('getObject', {
      Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
      Key: file.name,
    });

    const imageData = await Promise.resolve(fetch(getURL));

    console.log(imageData.url, typeof imageData.url);

    // send PATCH request to /api/users/upload-profile to update user's profile picture
    const res = await axios.patch(
      '/api/users/upload-profile',
      {
        profileImgUrl: imageData.url,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (res.status !== 200) {
      alert(
        'Error uploading profile picture. Please try again or contact us if the problem persists.'
      );
    } else {
      alert('Profile picture uploaded successfully!');
    }

    // Return the status of the user update
    return { message: 'User updated with picture', error: null };
  } catch (e) {
    return { message: 'An error occurred', error: e };
  }
};

const LastRegisterPage = ({ formData }: { formData: RegisterFormData }) => {
  // state for uploaded picture file
  const [pictureFile, setPictureFile] = useState<File | undefined>();

  // state for uploaded pictureURL, not the S3 url
  const [pictureURL, setPictureURL] = useState('');

  // object that helps with handling clicking on picture upload button
  const inputRef = useRef<HTMLInputElement | null>(null);

  // handles clicking on picture upload button
  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  // updates name of picture upload button to the name of the file uploaded
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files[0] == undefined) {
      return;
    }
    setPictureFile(e.target.files[0]);
    setPictureURL(URL.createObjectURL(e.target.files[0]));
  };

  // uploads picture file to S3 bucket
  const handleUpload = async () => {
    if (pictureFile) {
      const res = await uploadS3(pictureFile, formData.email);

      if (res.error) console.log('Success!');
      else console.log('error:', res.error);
    }
  };

  // Function to handle login and redirect.
  const handleLogin = async (data: FieldValues) => {
    const status = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!status) {
      alert("Couldn't create an account. Please try again or contact us.");
    }
  };

  useEffect(() => {
    // log users in right after they register
    handleLogin(formData);
  }, []);

  return (
    <LastPageContainer>
      <LastPageTextContainer>
        <LastPageText>Thank you!</LastPageText>
        <LastPageText>
          Your registration for the Book&apos;em Volunteer Portal is complete!
          Upload an optional picture of yourself, and press the button below to
          log in to your account.
        </LastPageText>
      </LastPageTextContainer>

      <UploadContainer>
        <UploadPictureContainer>
          <Image
            src={pictureURL ? pictureURL : '/registerFlow/user-circle.png'}
            alt={pictureURL ? 'Uploaded picture' : 'User profile stock image'}
            fill
            style={{ objectFit: 'contain' }}
          />
        </UploadPictureContainer>

        <UploadButton type="button" onClick={handleUploadClick}>
          {pictureFile ? `${pictureFile.name}` : 'Click here to upload'}
        </UploadButton>
        <UploadInput type="file" ref={inputRef} onChange={handleFileChange} />

        {/* TODO: when the api and mongodb update is working, get rid of this button 
          and make the Let's go button call the handleUpload function */}
        <Button type="button" onClick={handleUpload}>
          Upload picture
        </Button>
      </UploadContainer>

      <Button
        onClick={() => {
          window.location.href = '/';
        }}>
        Let&apos;s go
      </Button>
    </LastPageContainer>
  );
};

export default LastRegisterPage;
