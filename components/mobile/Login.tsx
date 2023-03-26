import React from 'react';
import styled from 'styled-components';
import {
  ContentContainer,
  Input,
  LoginForm,
  LoginHeader,
  SubmitButton,
} from '@/styles/login.styles';
import { FieldValues, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

const MobileContainer = styled(ContentContainer)`
  height: 100vh;
  padding: 20% 7% 6% 7%;
  display: flex;
  justify-content: space-between;
`;

const MobileInput = styled(Input)`
  border-radius: 10px;
`;

const MobileSubmitButton = styled(SubmitButton)`
  background: #6d6d6d;
  border-radius: 10px;
  font-size: 16px;
  line-height: 19.36px;
  color: white;
  width: 296px;
  height: 53px;
  margin-bottom: 71.5px;
  &:hover {
    background: #6d6d6d;
    cursor: pointer;
  }
`;

const Login = () => {
  // React hook form.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle login and redirect.
  const handleLogin = async (data: FieldValues) => {
    const status = await signIn('credentials', {
      redirect: true,
      email: data.email,
      password: data.password,
    });

    if (!status) {
      window.location.href = '/';
    }
  };
  return (
    <MobileContainer>
      <div>
        <LoginHeader>Logging you in</LoginHeader>
        <LoginForm
          id="loginForm"
          onSubmit={handleSubmit(data => handleLogin(data))}>
          <MobileInput
            {...register('email', { required: true })}
            placeholder="Email or Username"></MobileInput>
          <MobileInput
            {...register('password', { required: true })}
            type="password"
            placeholder="Password"></MobileInput>
          {errors.email && <span>Email is required</span>}
          {errors.password && <span>Password is required</span>}
        </LoginForm>
      </div>
      <MobileSubmitButton form="loginForm" type="submit" value="Log in" />
    </MobileContainer>
  );
};

export default Login;
