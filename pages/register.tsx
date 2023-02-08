import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { UserData } from 'bookem-shared/src/types/database';

const Header = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

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

const formatBirthday = (value: string) => {
  if (!value) return value;

  const birthday: string = value.replace(/[^\d]/g, '');

  const birthdayLength: number = birthday.length;

  if (birthdayLength == 1) return birthday;

  if (birthdayLength == 2) {
    return `${birthday.slice(0, 2)}-`;
  }

  if (birthdayLength == 3) {
    return `${birthday.slice(0, 2)}-${birthday.slice(2)}`;
  }

  if (birthdayLength == 4) {
    return `${birthday.slice(0, 2)}-${birthday.slice(2)}-`;
  }

  return `${birthday.slice(0, 2)}-${birthday.slice(2, 4)}-${birthday.slice(
    4,
    8
  )}`;
};

const RegisterPage = () => {
  // phone number handling
  const [phoneValue, setPhoneValue] = useState('');
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  // birthday handling
  const [birthdayValue, setBirthdayValue] = useState('');
  const handleBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedBirthday = formatBirthday(e.target.value);
    setBirthdayValue(formattedBirthday);
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
      <>
        <Header>Tell us about yourself!</Header>
        <Form id="registerPage1" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('firstName', { required: true })}
            placeholder="First name"></Input>
          <Input
            {...register('lastName', { required: true })}
            placeholder="Last name"></Input>
          <Input
            {...register('birthday', { required: true })}
            placeholder="Date of birth (MM-DD-YYY)"
            onChange={e => handleBirthday(e)}
            value={birthdayValue}></Input>
          <Input
            {...register('phone', { required: true })}
            placeholder="Phone number"
            onChange={e => handlePhone(e)}
            value={phoneValue}></Input>
          <Input
            {...register('email', { required: true })}
            placeholder="Email Address"></Input>
          <Input
            {...register('streetAddress', { required: true })}
            placeholder="Street address"></Input>
          <Input
            {...register('city', { required: true })}
            placeholder="City"></Input>
          <Input
            {...register('state', { required: true })}
            placeholder="State"></Input>
          <Input
            {...register('zip', { required: true })}
            placeholder="Zip code"></Input>

          {errors.firstName && <span>First name is required</span>}
          {errors.lastName && <span>Last name is required</span>}
          {errors.birthday && <span>Date of birth is required</span>}
          {errors.phone && <span>Phone number is required</span>}
          {errors.email && <span>Email address is required</span>}
          {errors.streetAddress && <span>Street address is required</span>}
          {errors.city && <span>City is required</span>}
          {errors.state && <span>State is required</span>}
          {errors.zip && <span>Zip code is required</span>}

          <NextButton form="registerPage1" type="submit" value="" />
        </Form>
      </>
    );
};

export default RegisterPage;
