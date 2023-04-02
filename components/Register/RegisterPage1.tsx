import React, { ChangeEvent, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import RegisterFlow from '@/components/shared/RegisterFlow';
import {
  RightContainer,
  Form,
  Header,
  SectionContainer,
  SectionHeader,
  InputFlex,
  InputText,
  InputContainer,
} from '@/styles/register.styles';
import { RegisterFormFunctions } from '@/utils/types';

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

/**
 * auto-format inputted birthday
 * @param value inputted birthday
 * @returns birthday in the form of MM-DD-YYYY
 */
const formatBirthday = (value: string) => {
  if (!value) return value;

  const birthday: string = value.replace(/[^\d]/g, '');

  const birthdayLength: number = birthday.length;

  if (birthdayLength < 3) return birthday;

  if (birthdayLength < 5) {
    return `${birthday.slice(0, 2)}-${birthday.slice(2)}`;
  }

  return `${birthday.slice(0, 2)}-${birthday.slice(2, 4)}-${birthday.slice(
    4,
    8
  )}`;
};

/**
 * validate inputted birthday in the format
 * adapted from https://bobbyhadz.com/blog/javascript-check-if-date-is-valid#validate-a-date-formatted-as-ddmmyyyy-in-javascript
 * @param dateStr inputted birthday MM-DD-YYYY
 * @returns true if input is a valid birthday
 */
const dateIsValid = (dateStr: string) => {
  const regex = /^\d{2}\-\d{2}\-\d{4}$/;
  // console.log('hi');

  if (dateStr.match(regex) === null) {
    return false;
  }

  // 👇️ only changed the order of destructuring assignment
  const [month, day, year] = dateStr.split('-');

  // 👇️ format Date string as `yyyy-mm-dd`
  const isoFormattedStr = `${year}-${month}-${day}`;

  const date = new Date(isoFormattedStr);

  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    console.log(timestamp);
    return false;
  }

  console.log(date.toISOString().startsWith(isoFormattedStr));

  return date.toISOString().startsWith(isoFormattedStr);
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
  formPhoneData,
  formBirthdayData,
}: {
  formFunctions: RegisterFormFunctions;
  formPhoneData: string;
  formBirthdayData: string;
}) => {
  // react hook form
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = handleForm;

  // state for phone number
  const [phoneValue, setPhoneValue] = useState(formPhoneData);

  // state for birthday
  const [birthdayValue, setBirthdayValue] = useState(formBirthdayData);

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

  return (
    <RightContainer>
      <Header>Tell us about yourself!</Header>

      <Form
        id="registerPage1"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <SectionContainer>
          <SectionHeader>Basic Information</SectionHeader>

          <InputFlex>
            <InputText
              {...register('firstName', { required: true })}
              onKeyDown={handleEnter}
              placeholder="First name"
              width="45%"
            />
            <InputText
              {...register('lastName', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Last name"
              width="45%"
            />
          </InputFlex>

          <InputContainer>
            <InputText
              {...register('birthday', {
                required: true,
                validate: { dateIsValid },
              })}
              onKeyDown={handleEnter}
              placeholder="Date of birth (MM-DD-YYYY)"
              onChange={e => handleBirthday(e)}
              value={birthdayValue}
              width="100%"
            />
          </InputContainer>

          {errors.firstName && printError('First name is required')}
          {errors.lastName && printError('Last name is required')}
          {errors.birthday && printError('Date of birth is invalid')}
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Contact</SectionHeader>

          <InputContainer>
            <InputText
              {...register('phone', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Phone number"
              onChange={e => handlePhone(e)}
              value={phoneValue}
              width="100%"
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('email', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Email Address"
              width="100%"
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('password', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Password"
              width="45%"
              type="password"
            />
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
              onKeyDown={handleEnter}
              placeholder="Street address"
              width="100%"
            />
          </InputContainer>

          <InputFlex>
            <InputText
              {...register('city', { required: true })}
              onKeyDown={handleEnter}
              placeholder="City"
              width="45%"
            />
            <InputText
              {...register('state', { required: true })}
              onKeyDown={handleEnter}
              placeholder="State"
              width="45%"
            />
          </InputFlex>

          <InputContainer>
            <InputText
              {...register('zip', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Zip code"
              width="45%"
            />
          </InputContainer>

          {errors.streetAddress && printError('Street address is required')}
          {errors.city && printError('City is required')}
          {errors.state && printError('State is required')}
          {errors.zip && printError('Zip code is required')}
        </SectionContainer>
      </Form>

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
