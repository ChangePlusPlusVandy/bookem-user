import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { UserData } from 'bookem-shared/src/types/database';
import LeftDisplay from '@/components/LeftDisplay';

interface Props {
  width?: string;
  margin?: string;
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

const ButtonContainer = styled.div`
  padding: 1vh;
`;

const NextButton = styled.input``;

// adapted from https://tomduffytech.com/how-to-format-phone-number-in-react/
const formatPhoneNumber = (value: string) => {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber: string = value.replace(/[^\d]/g, '');

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength: number = phoneNumber.length;

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early
  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

const RegisterPage = () => {
  // phone number handling
  const [phoneValue, setPhoneValue] = useState('');
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  // form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // make data fit the UserData schema type
    const userData: UserData = {
      name: data.firstName + ' ' + data.lastName,
      email: data.email,
      password: 'somethingrandomidkwhattodohere',
      phone: data.phone,
      address:
        data.streetAddress +
        ', ' +
        data.city +
        ', ' +
        data.state +
        ' ' +
        data.zip,
      sourceHeardFrom: 'somethingrandomidkwhattodohere',
      ethnicity: 'somethingrandomidkwhattodohere',
      gender: 'somethingrandomidkwhattodohere',
    };

    // send api request to create User
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

  // registration page select
  const page = 1;
  if (page == 1)
    return (
      <Container>
        <LeftDisplay />
        <RightContainer>
          <Header>Tell us about yourself!</Header>
          <Form id="registerPage1" onSubmit={handleSubmit(onSubmit)}>
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
            <ButtonContainer>
              <NextButton form="registerPage1" type="submit" value="Submit" />
            </ButtonContainer>

            {errors.firstName && <span>First name is required</span>}
            {errors.lastName && <span>Last name is required</span>}
            {errors.phone && <span>Phone number is required</span>}
            {errors.email && <span>Email address is required</span>}
            {errors.streetAddress && <span>Street address is required</span>}
            {errors.city && <span>City is required</span>}
            {errors.state && <span>State is required</span>}
            {errors.zip && <span>Zip code is required</span>}
          </Form>
        </RightContainer>
      </Container>
    );
};

export default RegisterPage;
