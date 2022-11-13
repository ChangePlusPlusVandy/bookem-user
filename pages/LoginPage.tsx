import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data: FieldValues) => {
    const status = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!status) {
      window.location.href = '/';
    }
  };

  return (
    <>
      <div>Logging you in</div>

      <form onSubmit={handleSubmit(data => handleLogin(data))}>
        <input {...register('email', { required: true })} />
        <input {...register('password', { required: true })} type="password" />
        {errors.email && <span>Email is required</span>}
        {errors.password && <span>Password is required</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default LoginPage;
