import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { RegisterFormData } from '@/utils/types';
import Image from 'next/image';
import { message } from 'antd';
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

import axios from 'axios';

const LastRegisterPage = ({ formData }: { formData: RegisterFormData }) => {
  // state for uploaded picture file
  const [pictureFile, setPictureFile] = useState<File | undefined>();

  // state for uploaded pictureURL, not the S3 url
  const [pictureURL, setPictureURL] = useState('');

  // object that helps with handling clicking on picture upload button
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [messageApi, contextHolder] = message.useMessage();

  // handles clicking on picture upload button
  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const uploadS3 = async (file: File, email: String) => {
    const formData = new FormData();
    formData.append('file', file);

    // formData.append('email', email);
    try {
      const res = await fetch('/api/users/upload-s3', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const imageUrl = await res.json();
      console.log(imageUrl, typeof imageUrl);
      uploadDB(imageUrl.fileName);
      return { message: 'User updated with picture', error: null };
    } catch (err) {
      return { message: 'An error occurred', error: err };
    }
  };

  const uploadDB = async (fileName: String) => {
    try {
      console.log(fileName);
      const res = await axios.patch(
        '/api/users/upload-profile',
        {
          // profileImgUrl: imageData.url,
          profileImgUrl: fileName,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.status !== 200) {
        messageApi.open({
          type: 'error',
          content: 'Sorry, an error occurred',
        });
      } else {
        messageApi.open({
          type: 'success',
          content: 'Profile image uploaded successfully',
        });
      }
      // Return the status of the user update
      return { message: 'User updated with picture', error: null };
    } catch (e) {
      return { message: 'An error occurred', error: e };
    }
  };

  // updates name of picture upload button to the name of the file uploaded
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files[0] == undefined) {
      return;
    }
    //check if file uploaded is the right type
    const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const file = e.target.files[0];
    if (validImageTypes.includes(file.type)) {
      setPictureFile(file);
      setPictureURL(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid image file (JPEG, PNG, JPG)');
      //TODO: test with non-jpeg file
    }
  };

  // uploads picture file to S3 bucket
  const handleUpload = async () => {
    if (pictureFile) {
      const res = await uploadS3(pictureFile, formData.email);

      if (res.error) console.log('Success!');
      else console.log('error:', res.error);
    } else {
      alert('Please upload a picture'); //TODO: maybe make this look better
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
      {/* Context holder for message API */}
      {contextHolder}
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
