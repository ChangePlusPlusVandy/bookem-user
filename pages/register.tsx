import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { UserData } from 'bookem-shared/src/types/database';

const Header = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const NextButton = styled.input``;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // make data fit the UserData schema type
    const userData: UserData = {
      name: data.firstName + data.lastName,
      email: data.email,
      password: 'somethingrandomidkwhattodohere',
      phone: data.phone,
      address:
        data.streetAddress + ', ' + data.city + ', ' + data.state + data.zip,
      sourceHeardFrom: 'somethingrandomidkwhattodohere',
      ethnicity: 'somethingrandomidkwhattodohere',
      gender: 'somethingrandomidkwhattodohere',
    };

    // send api request to create User
    try {
      const res = await fetch('http://localhost:3000/api/users/create', {
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
          {/* <Input
            {...register('birthday', { required: true })}
            placeholder="Date of birth (MM-DD-YYY)"></Input> */}
          <Input
            {...register('phone', { required: true })}
            placeholder="Phone number"></Input>
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
          {/* {errors.birthday && <span>Date of birth is required</span>} */}
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
