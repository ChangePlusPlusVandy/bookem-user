import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ContentContainer,
  Eye,
  ForgotPassword,
  Input,
  LoginForm,
  LoginHeader,
  PasswordWrapper,
  SubmitButton,
} from '@/styles/login.styles';
import { FieldValues, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

interface Props {
  hover?: boolean;
}

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
  line-height: 19px;
  color: white;
  width: 296px;
  height: 53px;
  margin-bottom: 71px;
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

  // state for showing psasword
  const [passwordShown, setPasswordShown] = useState(false);

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
            placeholder="Email or username"></MobileInput>

          <PasswordWrapper>
            <MobileInput
              {...register('password', { required: true })}
              type={passwordShown ? 'text' : 'password'}
              placeholder="Password"
            />

            <Eye onClick={() => setPasswordShown(!passwordShown)}>
              {passwordShown ? (
                <Image
                  src={'/login/eye.png'}
                  width="25"
                  height="25"
                  alt="Eye"
                />
              ) : (
                <Image
                  src={'/login/eye-slash.png'}
                  width="25"
                  height="25"
                  alt="Eye with slash"
                />
              )}
            </Eye>
          </PasswordWrapper>

          <ForgotPassword>Forgot password?</ForgotPassword>

          {errors.email && <span>Email is required</span>}
          {errors.password && <span>Password is required</span>}
        </LoginForm>
      </div>
      <MobileSubmitButton form="loginForm" type="submit" value="Log in" />
    </MobileContainer>
  );
};

export default Login;
