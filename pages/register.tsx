import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { UserData } from 'bookem-shared/src/types/database';
import LeftDisplay from '@/components/LeftDisplay';
import Image from 'next/image';

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
  margin-bottom: 4vh;
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

const Form = styled.form``;

const InputFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vh;
`;

const InputContainer = styled.div`
  padding: 1vh;
`;

const Input = styled.input<Props>`
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

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 130px;
  margin-left: 130px;
`;

const DotsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  position: absolute;
  transform: translate(0%, 83.3%);
`;

const LeftArrow = styled.div`
  float: left;
`;

const RightArrow = styled.div`
  float: right;
`;

const ProgressContainer = styled.div`
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 5vh;
  position: absolute;
  bottom: 0;
  width: fit-content;
  align-items: center;
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

// registration form progress handling
const formatPageDots = (currentPage: number) => {
  const pages = [1, 2, 3, 4];
  const listDots = pages.map(page => {
    if (page == currentPage)
      return (
        <Image
          src="/black-dot.png"
          alt="Dot for current page"
          width="12"
          height="12"
          key={page}
        />
      );
    return (
      <Image
        src="/white-dot.png"
        alt="Dot for other page"
        width="12"
        height="12"
        key={page}
      />
    );
  });
  return (
    <DotsContainer>
      <DotsFlex>{listDots}</DotsFlex>
    </DotsContainer>
  );
};

// format register progress
const formatProgress = (
  currentPage: number,
  form: string,
  leftArrowHandler: Function,
  rightArrowHandler: Function
) => {
  return (
    <ProgressContainer>
      <LeftArrow>
        {Number(currentPage) != 1 ? (
          <input
            form={form}
            type="image"
            src="/left-arrow.png"
            height="20px"
            width="10px"
            alt="Button for previous page"
            onClick={() => leftArrowHandler()}
          />
        ) : null}
      </LeftArrow>
      {formatPageDots(currentPage)}
      <RightArrow>
        {Number(currentPage) != 4 ? (
          <input
            form={form}
            type="image"
            src="/right-arrow.png"
            height="20px"
            width="10px"
            alt="Button for next page"
            onClick={() => rightArrowHandler()}
          />
        ) : null}
      </RightArrow>
    </ProgressContainer>
  );
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
  const [user, setUser] = useState({
    page: 1,
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  // phone number handling
  const [phoneValue, setPhoneValue] = useState('');
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  // arrow button handling
  let nextPage = user.page;
  const leftArrowHandler = () => {
    nextPage = nextPage - 1;
  };

  const rightArrowHandler = () => {
    nextPage = nextPage + 1;
  };

  // form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitPage1 = (data: any) => {
    user.page = nextPage;
    user.name = data.firstName + ' ' + data.lastName;
    user.email = data.email;
    user.phone = data.phone;
    user.address =
      data.streetAddress +
      ', ' +
      data.city +
      ', ' +
      data.state +
      ' ' +
      data.zip;
    console.log(user);
  };

  const onSubmitPage2 = (data: any) => {
    console.log(data);
    user.page = nextPage;
  };

  const onSubmitPage3 = (data: any) => {
    console.log(data);
    user.page = nextPage;
  };

  const onSubmitPage4 = (data: any) => {
    console.log(data);
    user.page = nextPage;
  };

  const onFinished = () => {
    const userData: UserData = {
      name: user.name,
      email: user.email,
      password: 'somethingrandomidkwhattodohere',
      phone: user.phone,
      address: user.address,
      sourceHeardFrom: 'somethingrandomidkwhattodohere',
      ethnicity: 'somethingrandomidkwhattodohere',
      gender: 'somethingrandomidkwhattodohere',
    };
    createUser(userData);
  };

  if (user.page == 1)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Tell us about yourself!</Header>
          <Form id="registerPage1" onSubmit={handleSubmit(onSubmitPage1)}>
            <SectionContainer margin={'5vh'}>
              <SectionHeader>Basic Information</SectionHeader>
              <InputFlexContainer>
                <Input
                  {...register('firstName', { required: true })}
                  placeholder="First name"
                  width={'45%'}></Input>
                <Input
                  {...register('lastName', { required: true })}
                  placeholder="Last name"
                  width={'45%'}></Input>
              </InputFlexContainer>
            </SectionContainer>

            <SectionContainer margin={'5vh'}>
              <SectionHeader>Contact</SectionHeader>
              <InputContainer>
                <Input
                  {...register('phone', { required: true })}
                  placeholder="Phone number"
                  onChange={e => handlePhone(e)}
                  value={phoneValue}
                  width={'100%'}></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  {...register('email', { required: true })}
                  placeholder="Email Address"
                  width={'100%'}></Input>
              </InputContainer>
            </SectionContainer>

            <SectionContainer>
              <SectionHeader>Address</SectionHeader>

              <InputContainer>
                <Input
                  {...register('streetAddress', { required: true })}
                  placeholder="Street address"
                  width={'100%'}></Input>
              </InputContainer>

              <InputFlexContainer>
                <Input
                  {...register('city', { required: true })}
                  placeholder="City"
                  width={'45%'}></Input>
                <Input
                  {...register('state', { required: true })}
                  placeholder="State"
                  width={'45%'}></Input>
              </InputFlexContainer>

              <InputContainer>
                <Input
                  {...register('zip', { required: true })}
                  placeholder="Zip code"
                  width={'45%'}></Input>
              </InputContainer>
            </SectionContainer>

            {errors.firstName && <span>First name is required</span>}
            {errors.lastName && <span>Last name is required</span>}
            {errors.phone && <span>Phone number is required</span>}
            {errors.email && <span>Email address is required</span>}
            {errors.streetAddress && <span>Street address is required</span>}
            {errors.city && <span>City is required</span>}
            {errors.state && <span>State is required</span>}
            {errors.zip && <span>Zip code is required</span>}

            {formatProgress(
              user.page,
              'registerPage1',
              leftArrowHandler,
              rightArrowHandler
            )}
          </Form>
        </RightContainer>
      </Container>
    );
  else if (user.page == 2)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Next up</Header>
          <Form id="registerPage2" onSubmit={handleSubmit(onSubmitPage2)}>
            {formatProgress(
              user.page,
              'registerPage2',
              leftArrowHandler,
              rightArrowHandler
            )}
          </Form>
        </RightContainer>
      </Container>
    );
  else if (user.page == 3)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Almost there</Header>
          <Form id="registerPage3" onSubmit={handleSubmit(onSubmitPage3)}>
            {formatProgress(
              user.page,
              'registerPage3',
              leftArrowHandler,
              rightArrowHandler
            )}
          </Form>
        </RightContainer>
      </Container>
    );
  else if (user.page == 4)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Review Information</Header>
          <Form id="registerPage4" onSubmit={handleSubmit(onSubmitPage4)}>
            {formatProgress(
              user.page,
              'registerPage4',
              leftArrowHandler,
              rightArrowHandler
            )}
          </Form>
          <button onClick={() => onFinished()}>Let&apos;s Go</button>
        </RightContainer>
      </Container>
    );
};

export default RegisterPage;
