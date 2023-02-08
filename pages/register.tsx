import React from 'react';
import { useForm } from 'react-hook-form';
import { UserData } from 'bookem-shared/src/types/database';

const RegisterPage = () => {
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

  return (
    <>
      <div>Tell us about yourself!</div>
      <form id="registerPage1" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('firstName', { required: true })}
          placeholder="First name"></input>
        <input
          {...register('lastName', { required: true })}
          placeholder="Last name"></input>
        <input
          {...register('phone', { required: true })}
          placeholder="Phone number"></input>
        <input
          {...register('email', { required: true })}
          placeholder="Email Address"></input>
        <input
          {...register('streetAddress', { required: true })}
          placeholder="Street address"></input>
        <input
          {...register('city', { required: true })}
          placeholder="City"></input>
        <input
          {...register('state', { required: true })}
          placeholder="State"></input>
        <input
          {...register('zip', { required: true })}
          placeholder="Zip code"></input>

        {errors.firstName && <span>First name is required</span>}
        {errors.lastName && <span>Last name is required</span>}
        {errors.phone && <span>Phone number is required</span>}
        {errors.email && <span>Email address is required</span>}
        {errors.streetAddress && <span>Street address is required</span>}
        {errors.city && <span>City is required</span>}
        {errors.state && <span>State is required</span>}
        {errors.zip && <span>Zip code is required</span>}

        <input form="registerPage1" type="submit" value="" />
      </form>
    </>
  );
};

export default RegisterPage;
