import React, { useState, ChangeEvent, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { UserData } from 'bookem-shared/src/types/database';
import LeftDisplay from '@/components/LeftDisplay';
import RegisterFlow from '@/components/RegisterFlow';
import {
  Container,
  RightContainer,
  Header,
  SectionContainer,
  SectionHeader,
  InputFlex,
  InputContainer,
  InputText,
  LabelRadio,
  InputRadio,
  CheckboxColumns,
  LabelCheckbox,
  InputCheckbox,
  TextareaContainer,
  InputTextarea,
  InputRadioVertical,
  ButtonContainer,
  ResumeButton,
  ReviewInfoText,
  Button,
  LastPageContainer,
  LastPageText,
  LastPageImage,
  LastPageButtonContainer,
  Error,
} from '@/styles/register.styles';

// format error message
const printError = (message: string) => {
  return (
    <>
      <Error>{message}</Error>
      <br />
    </>
  );
};

// auto-format phone number input
// adapted from https://tomduffytech.com/how-to-format-phone-number-in-react/
const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  const phoneNumber: string = value.replace(/[^\d]/g, '');
  const phoneNumberLength: number = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

const RegisterPage = () => {
  // page number handling
  const [page, setPage] = useState(1);
  let nextPage = page;

  const handleLeftArrow = () => {
    nextPage = nextPage - 1;
  };

  const handleRightArrow = () => {
    nextPage = nextPage + 1;
  };

  // phone number handling
  const [phoneValue, setPhoneValue] = useState('');
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  // resume upload handling
  // based on https://codefrontend.com/file-upload-reactjs/, only works for files with <= 16 MB I think
  const [resume, setResume] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setValue('resume', e.target.files[0]);
    setResume(e.target.files[0]);
  };

  // form data handling
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  let finished = false; // true only if you press the submit button on page 4

  const onSubmit = async (data: any) => {
    console.log(data);
    if (finished) {
      const error = await onFinished(data);
      console.log(error);
      if (!error) nextPage = nextPage + 1;
      else alert(error.message);
    }
    setPage(nextPage);
  };

  const onFinished = async (data: any) => {
    // put data into correct format
    const userData: UserData = {
      name: data.firstName + ' ' + data.lastName,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address:
        data.streetAddress +
        ', ' +
        data.city +
        ', ' +
        data.state +
        ' ' +
        data.zip,
      sourceHeardFrom: 'somethingrandomidkwhattoputhere',
      ethnicity: 'somethingrandomidkwhattoputhere',
      gender: 'somethingrandomidkwhattoputhere',
      programs: [],
    };

    // send api request to create user
    try {
      const res = await fetch('/api/users/create', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log(res);

      if (res.status == 201) return null;
      else return { message: 'You have entered invalid information.' };
    } catch (err) {
      return { message: 'Some error has occurred.' };
    }
  };

  if (page == 1)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Tell us about yourself!</Header>
          <form id="registerPage1" onSubmit={handleSubmit(onSubmit)}>
            <SectionContainer margin="5vh">
              <SectionHeader>Basic Information</SectionHeader>
              <InputFlex>
                <InputText
                  {...register('firstName', { required: true })}
                  placeholder="First name"
                  width="45%"></InputText>
                <InputText
                  {...register('lastName', { required: true })}
                  placeholder="Last name"
                  width="45%"></InputText>
              </InputFlex>
              {errors.firstName && printError('First name is required')}
              {errors.lastName && printError('Last name is required')}
            </SectionContainer>

            <SectionContainer margin="5vh">
              <SectionHeader>Contact</SectionHeader>
              <InputContainer>
                <InputText
                  {...register('phone', { required: true })}
                  placeholder="Phone number"
                  onChange={e => handlePhone(e)}
                  value={phoneValue}
                  width="100%"></InputText>
              </InputContainer>
              <InputContainer>
                <InputText
                  {...register('email', { required: true })}
                  placeholder="Email Address"
                  width="100%"></InputText>
              </InputContainer>
              <InputContainer>
                <InputText
                  {...register('password', { required: true })}
                  placeholder="Password"
                  width="45%"
                  type="password"></InputText>
              </InputContainer>
              {errors.phone &&
                phoneValue == '' &&
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
                  width="100%"></InputText>
              </InputContainer>

              <InputFlex>
                <InputText
                  {...register('city', { required: true })}
                  placeholder="City"
                  width="45%"></InputText>
                <InputText
                  {...register('state', { required: true })}
                  placeholder="State"
                  width="45%"></InputText>
              </InputFlex>

              <InputContainer>
                <InputText
                  {...register('zip', { required: true })}
                  placeholder="Zip code"
                  width="45%"></InputText>
              </InputContainer>
              {errors.streetAddress && printError('Street address is required')}
              {errors.city && printError('City is required')}
              {errors.state && printError('State is required')}
              {errors.zip && printError('Zip code is required')}
            </SectionContainer>

            <RegisterFlow
              currentPage={page}
              form="registerPage1"
              handleLeftArrow={handleLeftArrow}
              handleRightArrow={handleRightArrow}
            />
          </form>
        </RightContainer>
      </Container>
    );
  else if (page == 2)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Next up</Header>
          <form id="registerPage2" onSubmit={handleSubmit(onSubmit)}>
            <SectionContainer margin="4vh">
              <SectionHeader>Select age range</SectionHeader>
              <InputFlex>
                <LabelRadio>
                  <InputRadio
                    type="radio"
                    value="under18"
                    {...register('ageRange', { required: true })}
                  />
                  Under 18
                </LabelRadio>
                <LabelRadio>
                  <InputRadio
                    type="radio"
                    value="18to45"
                    {...register('ageRange', { required: true })}
                  />
                  18-45
                </LabelRadio>
                <LabelRadio>
                  <InputRadio
                    type="radio"
                    value="45plus"
                    {...register('ageRange', { required: true })}
                  />
                  45+
                </LabelRadio>
              </InputFlex>
              {errors.ageRange && printError('A selection is required')}
            </SectionContainer>

            <SectionContainer margin="4vh">
              <SectionHeader>
                Are you a member of the following? (Optional)
              </SectionHeader>

              <fieldset style={{ border: 'none' }}>
                <CheckboxColumns>
                  {[
                    'Rotary member',
                    'Kiwanis member',
                    'Current board member',
                    'Former board member',
                  ].map(member => (
                    <li key={member}>
                      <LabelCheckbox>
                        <InputCheckbox
                          type="checkbox"
                          value={member}
                          {...register('members')}
                        />
                        {member}
                      </LabelCheckbox>
                    </li>
                  ))}
                </CheckboxColumns>
                <LabelCheckbox>
                  <InputCheckbox
                    type="checkbox"
                    value="Junior League member or sustainer"
                    {...register('members')}
                  />
                  Junior League member or sustainer
                </LabelCheckbox>
              </fieldset>
            </SectionContainer>

            <SectionContainer>
              <SectionHeader>
                Why do you want to become a community volunteer?
              </SectionHeader>
              <TextareaContainer>
                <InputTextarea
                  placeholder="Start here..."
                  {...register('volunteerReason', { required: true })}
                />
              </TextareaContainer>
              {errors.volunteerReason && printError('A response is required')}
            </SectionContainer>

            <RegisterFlow
              currentPage={page}
              form="registerPage2"
              handleLeftArrow={handleLeftArrow}
              handleRightArrow={handleRightArrow}
            />
          </form>
        </RightContainer>
      </Container>
    );
  else if (page == 3)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Almost there</Header>
          <form id="registerPage3" onSubmit={handleSubmit(onSubmit)}>
            <SectionContainer margin="5vh">
              <SectionHeader>Occupation</SectionHeader>
              <InputContainer>
                <InputText
                  {...register('jobTitle1', { required: true })}
                  placeholder="Job Title 1"
                  width="100%"></InputText>
              </InputContainer>
              <InputContainer>
                <InputText
                  {...register('jobTitle2')}
                  placeholder="Job Title 2 (Optional)"
                  width="100%"></InputText>
              </InputContainer>
              {errors.jobTitle1 && printError('A job title is required')}
            </SectionContainer>

            <SectionContainer margin="5vh">
              <SectionHeader>
                Please upload your resume (Optional)
              </SectionHeader>
              <ButtonContainer>
                <ResumeButton type="button" onClick={handleUploadClick}>
                  {resume ? `${resume.name}` : 'Click here to upload'}
                </ResumeButton>
              </ButtonContainer>
              <input
                type="file"
                {...register('resume')}
                ref={inputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </SectionContainer>

            <SectionContainer>
              <SectionHeader>
                Would you like to join our newsletter?
              </SectionHeader>
              <InputRadioVertical>
                <li style={{ marginBottom: '40px' }}>
                  <LabelRadio>
                    <InputRadio
                      type="radio"
                      value="yes"
                      {...register('joinNewsletter', { required: true })}
                    />
                    Yes, please!
                  </LabelRadio>
                </li>
                <li>
                  <LabelRadio>
                    <InputRadio
                      type="radio"
                      value="no"
                      {...register('joinNewsletter', { required: true })}
                    />
                    No, thanks
                  </LabelRadio>
                </li>
              </InputRadioVertical>
              {errors.joinNewsletter && printError('A selection is required')}
            </SectionContainer>

            <RegisterFlow
              currentPage={page}
              form="registerPage3"
              handleLeftArrow={handleLeftArrow}
              handleRightArrow={handleRightArrow}
            />
          </form>
        </RightContainer>
      </Container>
    );
  else if (page == 4)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header margin="0vh">Review Information</Header>
          <form id="registerPage4" onSubmit={handleSubmit(onSubmit)}>
            <SectionContainer margin="3vh">
              <SectionHeader>Basic Information</SectionHeader>
              <InputFlex>
                <InputText
                  {...register('firstName', { required: true })}
                  placeholder="First name"
                  width="45%"></InputText>
                <InputText
                  {...register('lastName', { required: true })}
                  placeholder="Last name"
                  width="45%"></InputText>
              </InputFlex>
              {errors.firstName && printError('First name is required')}
              {errors.lastName && printError('Last name is required')}
            </SectionContainer>

            <SectionContainer margin="3vh">
              <SectionHeader>Contact</SectionHeader>
              <InputContainer>
                <InputText
                  {...register('phone', { required: true })}
                  placeholder="Phone number"
                  onChange={e => handlePhone(e)}
                  value={phoneValue}
                  width="100%"></InputText>
              </InputContainer>
              <InputContainer>
                <InputText
                  {...register('email', { required: true })}
                  placeholder="Email Address"
                  width="100%"></InputText>
              </InputContainer>
              <InputContainer>
                <InputText
                  {...register('password', { required: true })}
                  placeholder="Password"
                  width="45%"
                  type="password"></InputText>
              </InputContainer>
              {errors.phone &&
                phoneValue == '' &&
                printError('Phone number is required')}
              {errors.email && printError('Email address is required')}
              {errors.password && printError('Password is required')}
            </SectionContainer>

            <SectionContainer margin="2vh">
              <SectionHeader>Address</SectionHeader>

              <InputContainer>
                <InputText
                  {...register('streetAddress', { required: true })}
                  placeholder="Street address"
                  width="100%"></InputText>
              </InputContainer>

              <InputFlex>
                <InputText
                  {...register('city', { required: true })}
                  placeholder="City"
                  width="45%"></InputText>
                <InputText
                  {...register('state', { required: true })}
                  placeholder="State"
                  width="45%"></InputText>
              </InputFlex>

              <InputContainer>
                <InputText
                  {...register('zip', { required: true })}
                  placeholder="Zip code"
                  width="45%"></InputText>
              </InputContainer>
              {errors.streetAddress && printError('Street address is required')}
              {errors.city && printError('City is required')}
              {errors.state && printError('State is required')}
              {errors.zip && printError('Zip code is required')}
            </SectionContainer>

            <ReviewInfoText>More text here...</ReviewInfoText>
            <ButtonContainer>
              <Button
                onClick={() => {
                  finished = true;
                }}>
                Submit
              </Button>
            </ButtonContainer>

            <RegisterFlow
              currentPage={page}
              form="registerPage4"
              handleLeftArrow={handleLeftArrow}
              handleRightArrow={handleRightArrow}
            />
          </form>
        </RightContainer>
      </Container>
    );
  else if (page == 5)
    return (
      <Container>
        <LeftDisplay />
        <LastPageContainer>
          <LastPageText fontSize="30px">Thank you!</LastPageText>
          <LastPageText>
            Your registration for Volunteer is complete!
          </LastPageText>
          <LastPageText>
            Press the button below to log in to your account
          </LastPageText>
          <LastPageImage>
            <Image
              src="/user-circle.png"
              alt="User profile stock image"
              width="226"
              height="226"
            />
          </LastPageImage>
          <LastPageButtonContainer>
            <Button>
              <Link href="/">Let&apos;s go</Link>
            </Button>
          </LastPageButtonContainer>
        </LastPageContainer>
      </Container>
    );
};

export default RegisterPage;
