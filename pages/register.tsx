import React, { useState, ChangeEvent, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { UserData } from 'bookem-shared/src/types/database';
import LeftDisplay from '@/components/LeftDisplay';
import RegisterFlow from '@/components/RegisterFlow';

interface Props {
  width?: string;
  margin?: string;
  page?: number;
  fontSize?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const RightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background: white;
  padding-top: 7vh;
  padding-bottom: 7vh;
  gap: 4vh;
  padding-left: 19vh;
  padding-right: 19vh;
  overflow-y: auto;
`;

const Header = styled.div<Props>`
  margin-bottom: ${props => (props.margin ? props.margin : '2vh')};
  padding: 1vh;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
`;

const SectionContainer = styled.div<Props>`
  margin-bottom: ${props => props.margin};
`;

const SectionHeader = styled.div`
  padding: 1vh;
  padding-bottom: 1.2vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

const InputFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vh;
`;

const InputContainer = styled.div`
  padding: 1vh;
`;

const InputText = styled.input<Props>`
  outline: 0;
  border-width: 0 0 1px;
  border-bottom: 1px solid #c1c1c1;
  width: ${props => props.width};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  ::placeholder {
    color: #a4a4a4;
  }
`;

const LabelRadio = styled.label`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 18px;
  width: 33vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

const InputRadio = styled.input`
  width: 21px;
  height: 21px;
  border: 1px solid #000000;
`;

const CheckboxColumns = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const LabelCheckbox = styled.label`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 18px;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  color: #000000;
`;

const InputCheckbox = styled.input`
  width: 21px;
  height: 21px;
  border: 1px solid #000000;
`;

const TextareaContainer = styled.div`
  padding: 1vh;
`;

const InputTextarea = styled.textarea`
  border: 1px solid #6d6d6d;
  border-radius: 20px;
  resize: none;
  width: 100%;
  height: 160px;
  padding: 12px 25px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  ::placeholder {
    color: #a4a4a4;
  }
`;

const InputRadioVertical = styled.ul`
  list-style-type: none;
  padding: 1vh;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const ResumeButton = styled.button`
  cursor: pointer;
  margin-top: 45px;
  border: 1px solid #6d6d6d;
  border-radius: 20px;
  background: #ffffff;
  width: 334px;
  height: fit-content;
  padding: 10px 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #6d6d6d;
`;

const ReviewInfoText = styled.div`
  padding-left: 1vh;
  margin-bottom: 2vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

const Button = styled.button`
  cursor: pointer;
  width: 215px;
  height: 47px;
  background: #6d6d6d;
  border: 1px solid #6d6d6d;
  border-radius: 20px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #ffffff;
`;

const LastPageContainer = styled(RightContainer)`
  padding: 10vh;
  gap: 0vh;
`;

const LastPageText = styled.div<Props>`
  margin-bottom: 2vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${props => (props.fontSize ? props.fontSize : '25px')};
  line-height: 36px;

  color: #000000;
`;

const LastPageImage = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LastPageButtonContainer = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Error = styled.span`
  padding: 1vh;
  color: red;
`;

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

// send api request to create user
// const createUser = async (userData: UserData) => {
//   try {
//     const res = await fetch('/api/users/create', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//     console.log(res);

//     if (res.status == 201) return null;
//     else return { message: 'You have entered invalid information.' };
//   } catch (err) {
//     return { message: 'Some error has occurred.' };
//   }
// };

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

  let submitted = false; // true only if you press the submit button on page 4

  const onSubmit = async (data: any) => {
    console.log(data);
    if (submitted) {
      const error = await onFinished(data);
      console.log(error);
      if (!error) nextPage = nextPage + 1;
      else alert(error.message);
    }
    setPage(nextPage);
  };

  const onFinished = async (data: any) => {
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
    // return createUser(userData);
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

            {/* {errors.firstName ||
            errors.lastName ||
            errors.phone ||
            errors.email ||
            errors.password ||
            errors.streetAddress ||
            errors.city ||
            errors.state ||
            errors.zip ? (
              <p style={{ padding: '1vh', paddingTop: '15px', color: 'red' }}>
                You must complete all required fields
              </p>
            ) : null} */}

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
              {errors.phone && printError('Phone number is required')}
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
                  submitted = true;
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
              <Link href="/">Let&apos;s Go</Link>
            </Button>
          </LastPageButtonContainer>
        </LastPageContainer>
      </Container>
    );
};

export default RegisterPage;
