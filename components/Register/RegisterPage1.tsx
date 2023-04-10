import React, { ChangeEvent, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { RegisterFormData, RegisterFormFunctions } from '@/utils/types';
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
import { dateIsValid, formatBirthday, formatPhoneNumber } from '@/utils/utils';

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
    formState: { errors },
  } = handleForm;

  // state for phone number
  const [phoneValue, setPhoneValue] = useState(formData.phone);

  // state for birthday
  const [birthdayValue, setBirthdayValue] = useState(formData.birthday);

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
