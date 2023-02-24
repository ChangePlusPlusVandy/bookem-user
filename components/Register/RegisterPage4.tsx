import React, { ChangeEvent, KeyboardEventHandler, useState } from 'react';
import {
  SubmitHandler,
  FieldValues,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import RegisterFlow from '../RegisterFlow';
import {
  RightContainer,
  Header,
  SectionContainer,
  SectionHeader,
  InputFlex,
  InputText,
  InputContainer,
  ReviewInfoText,
  ButtonContainer,
  Button,
} from '@/styles/register.styles';

/**
 * auto-format inputted phone number
 * adapted from https://tomduffytech.com/how-to-format-phone-number-in-react/
 * @param value inputted phone number
 * @returns phone number in the form of (xxx) xxx-xxxx
 */
const formatPhoneNumber = (value: string) => {
  // if no input, return
  if (!value) return value;

  // phone number only has numbers
  const phoneNumber: string = value.replace(/[^\d]/g, '');

  // length of phone number
  const phoneNumberLength: number = phoneNumber.length;

  // auto-format based on length of numbers inputted
  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

const RegisterPage4 = ({
  props: {
    handleForm,
    onSubmit,
    handleEnter,
    printError,
    handleLeftArrow,
    handleRightArrow,
  },
  formPhoneData,
}: {
  props: {
    handleForm: UseFormReturn<FieldValues, any>;
    onSubmit: SubmitHandler<FieldValues>;
    handleEnter: KeyboardEventHandler<HTMLInputElement>;
    printError: Function;
    handleLeftArrow: Function;
    handleRightArrow: Function;
  };
  formPhoneData: string;
}) => {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = handleForm;

  /* phone number format handling */

  // state for phone number
  const [phoneValue, setPhoneValue] = useState(formPhoneData);

  // updates phone number with correct format
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  return (
    <RightContainer>
      <Header margin="0vh">Review Information</Header>
      <form id="registerPage4" onSubmit={handleSubmit(onSubmit)}>
        <SectionContainer margin="3vh">
          <SectionHeader>Basic Information</SectionHeader>
          <InputFlex>
            <InputText
              {...register('firstName', { required: true })}
              onKeyDown={handleEnter}
              placeholder="First name"
              width="45%"></InputText>
            <InputText
              {...register('lastName', { required: true })}
              onKeyDown={handleEnter}
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
              onKeyDown={handleEnter}
              placeholder="Phone number"
              onChange={e => handlePhone(e)}
              value={phoneValue}
              width="100%"></InputText>
          </InputContainer>
          <InputContainer>
            <InputText
              {...register('email', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Email Address"
              width="100%"></InputText>
          </InputContainer>
          <InputContainer>
            <InputText
              {...register('password', { required: true })}
              onKeyDown={handleEnter}
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
              onKeyDown={handleEnter}
              placeholder="Street address"
              width="100%"></InputText>
          </InputContainer>

          <InputFlex>
            <InputText
              {...register('city', { required: true })}
              onKeyDown={handleEnter}
              placeholder="City"
              width="45%"></InputText>
            <InputText
              {...register('state', { required: true })}
              onKeyDown={handleEnter}
              placeholder="State"
              width="45%"></InputText>
          </InputFlex>

          <InputContainer>
            <InputText
              {...register('zip', { required: true })}
              onKeyDown={handleEnter}
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
          <Button>Submit</Button>
        </ButtonContainer>

        <RegisterFlow
          currentPage={4}
          form="registerPage4"
          handleLeftArrow={handleLeftArrow}
          handleRightArrow={handleRightArrow}
        />
      </form>
    </RightContainer>
  );
};

export default RegisterPage4;
