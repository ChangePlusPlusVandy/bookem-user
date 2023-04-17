import React, { ChangeEvent, useRef, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { RegisterFormData, RegisterFormFunctions } from '@/utils/types';
import RegisterFlow from '@/components/shared/RegisterFlow';
import Image from 'next/image';
import {
  RightContainer,
  Form,
  Header,
  SectionContainer,
  SectionHeader,
  InputFlex,
  InputText,
  InputContainer,
  ButtonContainer,
  Button,
  UploadButton,
} from '@/styles/register.styles';
import { dateIsValid, formatBirthday, formatPhoneNumber } from '@/utils/utils';

// NEW CODE STARTS HERE
import S3 from 'aws-sdk/clients/s3';
import axios from 'axios';

const s3 = new S3({
  region: 'us-east-2',
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
  signatureVersion: 'v4',
});

const uploadS3 = async (file: File) => {
  try {
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

    const getURL = await s3.getSignedUrlPromise('getObject', {
      Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
      Key: file.name,
    });

    const imageData = await Promise.resolve(fetch(getURL));

    console.log(imageData.url);

    return 'Uploaded!';
  } catch (e) {
    return e;
  }
};

const RegisterPage1 = ({
  formFunctions: {
    handleForm,
    onSubmit,
    handleEnter,
    printError,
    handleLeftArrow,
    handleRightArrow,
  },
  formData,
}: {
  formFunctions: RegisterFormFunctions;
  formData: RegisterFormData;
}) => {
  // react hook form
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = handleForm;

  // state for phone number
  const [phoneValue, setPhoneValue] = useState(formData.phone);

  // state for birthday
  const [birthdayValue, setBirthdayValue] = useState(formData.birthday);

  // state for uploaded picture file
  const [pictureFile, setPictureFile] = useState<File | undefined>();

  // state for uploaded pictureURL, not the S3 url
  const [pictureURL, setPictureURL] = useState('');

  // object that helps with handling clicking on picture upload button
  const inputRef = useRef<HTMLInputElement | null>(null);

  // updates phone number with correct format
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  // updates birthday with correct format
  const handleBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedBirthday = formatBirthday(e.target.value);
    setBirthdayValue(formattedBirthday);
  };

  // handles clicking on picture upload button
  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  // updates name of picture upload button to the name of the file uploaded
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files[0] == undefined) {
      return;
    }
    setValue('picture', e.target.files[0]);
    setPictureFile(e.target.files[0]);
    setPictureURL(URL.createObjectURL(e.target.files[0]));
  };

  // uploads picture file to S3 bucket
  const handleUpload = async () => {
    if (pictureFile) {
      await uploadS3(pictureFile);

      // let formData = new FormData();
      // formData.append('file', pictureFile);
      // console.log(formData.get('file'));
      // try {
      //   const res = await fetch('/api/users/uploadPicture', {
      //     method: 'POST',
      //     body: formData,
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   });
      // } catch (err) {
      //   console.log(err);
      // }

      // const formData = new FormData();
      // formData.append('file', pictureFile);
      // try {
      //   const res = await fetch('/api/users/uploadPicture', {
      //     body: formData.toString(),
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   });
      // } catch (err) {
      //   console.log(err);
      // }
    }
  };

  // try {
  //   const res = await fetch('/api/users/uploadPicture', {
  //     method: 'POST',
  //     body: JSON.stringify(picture),
  //   });

  //   if (res.status == 201) console.log('Uploaded!!');
  //   else {
  //     console.log(res.status);
  //   }
  // } catch (err) {
  //   console.log(err);
  // }

  return (
    <RightContainer>
      <Header>Tell us about yourself!</Header>

      <Form
        id="registerPage1"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <SectionContainer>
          <SectionHeader>Basic information</SectionHeader>

          <InputFlex>
            <InputText
              {...register('firstName', { required: true })}
              placeholder="First name"
              width="45%"
              onKeyDown={handleEnter}
            />
            <InputText
              {...register('lastName', { required: true })}
              placeholder="Last name"
              width="45%"
              onKeyDown={handleEnter}
            />
          </InputFlex>

          <InputContainer>
            <InputText
              {...register('birthday', { required: true })}
              placeholder="Date of birth (MM-DD-YYYY)"
              value={birthdayValue}
              width="100%"
              onChange={e => handleBirthday(e)}
              onKeyDown={handleEnter}
            />
          </InputContainer>

          {errors.firstName && printError('First name is required')}
          {errors.lastName && printError('Last name is required')}
          {errors.birthday &&
            birthdayValue === '' &&
            printError('Date of birth is required')}
          {birthdayValue.length === 10 &&
            !dateIsValid(birthdayValue) &&
            printError('Date of birth is invalid')}
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Contact</SectionHeader>

          <InputContainer>
            <InputText
              {...register('phone', { required: true })}
              placeholder="Phone number"
              value={phoneValue}
              width="100%"
              onChange={e => handlePhone(e)}
              onKeyDown={handleEnter}
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('email', { required: true })}
              placeholder="Email Address"
              width="100%"
              onKeyDown={handleEnter}
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('password', { required: true })}
              type="password"
              placeholder="Password"
              width="45%"
              onKeyDown={handleEnter}
            />
          </InputContainer>

          {errors.phone &&
            phoneValue === '' &&
            printError('Phone number is required')}
          {errors.email && printError('Email address is required')}
          {errors.password && printError('Password is required')}
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Address</SectionHeader>

          <InputContainer>
            <InputText
              {...register('streetAddress', { required: true })}
              placeholder="Street address"
              width="100%"
              onKeyDown={handleEnter}
            />
          </InputContainer>

          <InputFlex>
            <InputText
              {...register('city', { required: true })}
              placeholder="City"
              width="45%"
              onKeyDown={handleEnter}
            />
            <InputText
              {...register('state', { required: true })}
              placeholder="State"
              width="45%"
              onKeyDown={handleEnter}
            />
          </InputFlex>

          <InputContainer>
            <InputText
              {...register('zip', { required: true })}
              placeholder="Zip code"
              width="45%"
              onKeyDown={handleEnter}
            />
          </InputContainer>

          {errors.streetAddress && printError('Street address is required')}
          {errors.city && printError('City is required')}
          {errors.state && printError('State is required')}
          {errors.zip && printError('Zip code is required')}
        </SectionContainer>
      </Form>

      <ButtonContainer>
        <UploadButton type="button" onClick={handleUploadClick}>
          {pictureFile ? `${pictureFile.name}` : 'Click here to upload'}
        </UploadButton>
      </ButtonContainer>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }} // TODO: MAKE STYLED COMPONENT
      />

      <ButtonContainer>
        <Button type="button" onClick={handleUpload}>
          Upload picture
        </Button>
      </ButtonContainer>

      {pictureURL && (
        <Image
          src={pictureURL}
          alt="Uploaded picture"
          width="300"
          height="300"
        />
      )}

      <RegisterFlow
        currentPage={1}
        form="registerPage1"
        getValues={getValues}
        handleLeftArrow={handleLeftArrow}
        handleRightArrow={handleRightArrow}
      />
    </RightContainer>
  );
};

export default RegisterPage1;
