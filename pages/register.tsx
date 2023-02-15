import React, { useState, ChangeEvent, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Link from 'next/link';
import { UserData } from 'bookem-shared/src/types/database';
import Image from 'next/image';
import LeftDisplay from '@/components/LeftDisplay';
import RegisterFlow from '@/components/RegisterFlow';

interface Props {
  width?: string;
  margin?: string;
  page?: number;
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

const Header = styled.div`
  margin-bottom: 2vh;
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

const ResumeContainer = styled.div`
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
const createUser = async (userData: UserData) => {
  try {
    const res = await fetch('/api/users/create', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const RegisterPage = () => {
  // user data
  // TODO: DO I NEED TO CREATE A TYPE FOR THIS?
  // TODO: I DON'T NEED USER AS A STATE AT ALL, I COULD JUST UPLOAD ALL THE DATA IN THE LAST ONSUBMIT, CREATE PAGE STATE ONLY, PASS DATA INTO ONFINISHED PARAM
  const [user, setUser] = useState({
    page: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    ageRange: '',
    members: [],
    volunteerReason: '',
    jobTitle1: '',
    jobTitle2: '',
    resume: null,
    joinNewsletter: '',
  });

  // phone number handling
  const [phoneValue, setPhoneValue] = useState('');
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  // possible values of members field
  const members = [
    'Rotary member',
    'Kiwanis member',
    // 'Junior League member or sustainer',
    'Current board member',
    'Former board member',
  ];

  // resume upload handling, based on https://codefrontend.com/file-upload-reactjs/
  // TODO: THIS ONLY WORKS FOR <= 16 MB FILES
  const [resume, setResume] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    setResume(e.target.files[0]);

    // TODO: do the file upload here normally...?????
  };

  // arrow button handling
  let nextPage = user.page;
  const handleLeftArrow = () => {
    nextPage = nextPage - 1;
  };

  const handleRightArrow = () => {
    nextPage = nextPage + 1;
  };

  // form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitPage1 = (data: any) => {
    setUser({ ...user, ...data, page: nextPage });
    console.log(user, data);
  };

  const onSubmitPage2 = (data: any) => {
    setUser({ ...user, ...data, page: nextPage });
    console.log(user, data);
  };

  const onSubmitPage3 = (data: any) => {
    // TODO: I can't figure out a better way to update resume field
    data.resume = resume;

    setUser({ ...user, ...data, page: nextPage });
    console.log(user, data);
  };

  // true only if you press the final submit button on page 4
  let finalSubmit = false;
  const pressSubmit = () => {
    finalSubmit = true;
  };

  const onSubmitPage4 = (data: any) => {
    console.log(data);
    user.page = nextPage;

    if (finalSubmit) {
      nextPage = nextPage + 1;
      user.page = nextPage;
      onFinished();
      // TODO: SHOULD DO SOMETHING WHEN USER CANNOT BE CREATED
    }
  };

  const onFinished = () => {
    const userData: UserData = {
      name: user.firstName + ' ' + user.lastName,
      email: user.email,
      password: user.password,
      phone: user.phone,
      address:
        user.streetAddress +
        ', ' +
        user.city +
        ', ' +
        user.state +
        ' ' +
        user.zip,
      sourceHeardFrom: 'somethingrandomidkwhattoputhere',
      ethnicity: 'somethingrandomidkwhattoputhere',
      gender: 'somethingrandomidkwhattoputhere',
      programs: [],
    };
    createUser(userData);
  };

  if (user.page == 1)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Tell us about yourself!</Header>
          <form id="registerPage1" onSubmit={handleSubmit(onSubmitPage1)}>
            <SectionContainer margin={'5vh'}>
              <SectionHeader>Basic Information</SectionHeader>
              <InputFlex>
                <InputText
                  {...register('firstName', { required: true })}
                  placeholder="First name"
                  width={'45%'}></InputText>
                <InputText
                  {...register('lastName', { required: true })}
                  placeholder="Last name"
                  width={'45%'}></InputText>
              </InputFlex>
            </SectionContainer>

            <SectionContainer margin={'5vh'}>
              <SectionHeader>Contact</SectionHeader>
              <InputContainer>
                <InputText
                  {...register('phone', { required: true })}
                  placeholder="Phone number"
                  onChange={e => handlePhone(e)}
                  value={phoneValue}
                  width={'100%'}></InputText>
              </InputContainer>
              <InputContainer>
                <InputText
                  {...register('email', { required: true })}
                  placeholder="Email Address"
                  width={'100%'}></InputText>
              </InputContainer>
              <InputContainer>
                <InputText
                  {...register('password', { required: true })}
                  placeholder="Password"
                  width={'45%'}
                  type={'password'}></InputText>
              </InputContainer>
            </SectionContainer>

            <SectionContainer>
              <SectionHeader>Address</SectionHeader>

              <InputContainer>
                <InputText
                  {...register('streetAddress', { required: true })}
                  placeholder="Street address"
                  width={'100%'}></InputText>
              </InputContainer>

              <InputFlex>
                <InputText
                  {...register('city', { required: true })}
                  placeholder="City"
                  width={'45%'}></InputText>
                <InputText
                  {...register('state', { required: true })}
                  placeholder="State"
                  width={'45%'}></InputText>
              </InputFlex>

              <InputContainer>
                <InputText
                  {...register('zip', { required: true })}
                  placeholder="Zip code"
                  width={'45%'}></InputText>
              </InputContainer>
            </SectionContainer>

            {errors.firstName && <span>First name is required</span>}
            {errors.lastName && <span>Last name is required</span>}
            {errors.phone && <span>Phone number is required</span>}
            {errors.email && <span>Email address is required</span>}
            {errors.password && <span>Password is required</span>}
            {errors.streetAddress && <span>Street address is required</span>}
            {errors.city && <span>City is required</span>}
            {errors.state && <span>State is required</span>}
            {errors.zip && <span>Zip code is required</span>}

            <RegisterFlow
              currentPage={user.page}
              form={'registerPage1'}
              handleLeftArrow={handleLeftArrow}
              handleRightArrow={handleRightArrow}
            />
          </form>
        </RightContainer>
      </Container>
    );
  else if (user.page == 2)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Next up</Header>
          <form id="registerPage2" onSubmit={handleSubmit(onSubmitPage2)}>
            <SectionContainer margin={'4vh'}>
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
            </SectionContainer>

            <SectionContainer margin={'4vh'}>
              <SectionHeader>
                Are you a member of the following? (Optional)
              </SectionHeader>

              <fieldset style={{ border: 'none' }}>
                <CheckboxColumns>
                  {members.map(member => (
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

                  {'Junior League member or sustainer'}
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
            </SectionContainer>

            <RegisterFlow
              currentPage={user.page}
              form={'registerPage2'}
              handleLeftArrow={handleLeftArrow}
              handleRightArrow={handleRightArrow}
            />
          </form>
        </RightContainer>
      </Container>
    );
  else if (user.page == 3)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Almost there</Header>
          <form id="registerPage3" onSubmit={handleSubmit(onSubmitPage3)}>
            <SectionContainer margin={'5vh'}>
              <SectionHeader>Occupation</SectionHeader>
              <InputContainer>
                <InputText
                  {...register('jobTitle1', { required: true })}
                  placeholder="Job Title 1"
                  width={'100%'}></InputText>
              </InputContainer>
              <InputContainer>
                <InputText
                  {...register('jobTitle2')}
                  placeholder="Job Title 2 (Optional)"
                  width={'100%'}></InputText>
              </InputContainer>
            </SectionContainer>
            <SectionContainer margin={'5vh'}>
              <SectionHeader>
                Please upload your resume (Optional)
              </SectionHeader>
              <ResumeContainer>
                <ResumeButton onClick={handleUploadClick}>
                  {resume ? `${resume.name}` : 'Click here to upload'}
                </ResumeButton>
              </ResumeContainer>
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
            </SectionContainer>
            <RegisterFlow
              currentPage={user.page}
              form={'registerPage3'}
              handleLeftArrow={handleLeftArrow}
              handleRightArrow={handleRightArrow}
            />
          </form>
        </RightContainer>
      </Container>
    );
  else if (user.page == 4)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Review Information</Header>
          <form id="registerPage4" onSubmit={handleSubmit(onSubmitPage4)}>
            <SectionContainer margin={'5vh'}>
              <SectionHeader>Basic Information</SectionHeader>
              <InputFlex>
                <InputText
                  {...register('firstName', { required: true })}
                  placeholder="First name"
                  width={'45%'}></InputText>
                <InputText
                  {...register('lastName', { required: true })}
                  placeholder="Last name"
                  width={'45%'}></InputText>
              </InputFlex>
            </SectionContainer>

            <SectionContainer margin={'5vh'}>
              <SectionHeader>Contact</SectionHeader>
              <InputContainer>
                <InputText
                  {...register('phone', { required: true })}
                  placeholder="Phone number"
                  onChange={e => handlePhone(e)}
                  value={phoneValue}
                  width={'100%'}></InputText>
              </InputContainer>
              <InputContainer>
                <InputText
                  {...register('email', { required: true })}
                  placeholder="Email Address"
                  width={'100%'}></InputText>
              </InputContainer>
              <InputContainer>
                <InputText
                  {...register('password', { required: true })}
                  placeholder="Password"
                  width={'45%'}
                  type={'password'}></InputText>
              </InputContainer>
            </SectionContainer>

            <SectionContainer>
              <SectionHeader>Address</SectionHeader>

              <InputContainer>
                <InputText
                  {...register('streetAddress', { required: true })}
                  placeholder="Street address"
                  width={'100%'}></InputText>
              </InputContainer>

              <InputFlex>
                <InputText
                  {...register('city', { required: true })}
                  placeholder="City"
                  width={'45%'}></InputText>
                <InputText
                  {...register('state', { required: true })}
                  placeholder="State"
                  width={'45%'}></InputText>
              </InputFlex>

              <InputContainer>
                <InputText
                  {...register('zip', { required: true })}
                  placeholder="Zip code"
                  width={'45%'}></InputText>
              </InputContainer>
            </SectionContainer>

            {errors.firstName && <span>First name is required</span>}
            {errors.lastName && <span>Last name is required</span>}
            {errors.phone && <span>Phone number is required</span>}
            {errors.email && <span>Email address is required</span>}
            {errors.password && <span>Password is required</span>}
            {errors.streetAddress && <span>Street address is required</span>}
            {errors.city && <span>City is required</span>}
            {errors.state && <span>State is required</span>}
            {errors.zip && <span>Zip code is required</span>}
            <p>More text here...</p>
            <input type="submit" onClick={() => pressSubmit()} />
            <RegisterFlow
              currentPage={user.page}
              form={'registerPage4'}
              handleLeftArrow={handleLeftArrow}
              handleRightArrow={handleRightArrow}
            />
          </form>
        </RightContainer>
      </Container>
    );
  else if (user.page == 5)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Thank you!</Header>
          <p>Your registration for Volunteer is complete!</p>
          <p>Press the button below to log in to your account</p>
          <Image
            src="/user-circle.png"
            alt="User profile stock image"
            width="226"
            height="226"
          />
          <button>
            <Link href="/">Let&apos;s Go</Link>
          </button>
        </RightContainer>
      </Container>
    );
};

export default RegisterPage;
