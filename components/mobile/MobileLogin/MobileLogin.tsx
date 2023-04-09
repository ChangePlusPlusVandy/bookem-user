import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import {
  Eye,
  ForgotPassword,
  LoginForm,
  LoginHeader,
  MobileInput,
  MobileLoginContainer,
  MobileSubmitButton,
  PasswordWrapper,
} from '@/styles/login.styles';

const Login = () => {
  // React hook form.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // state for showing password
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
    <MobileLoginContainer>
      <div>
        <LoginHeader>Logging you in</LoginHeader>

        <LoginForm
          id="loginForm"
          onSubmit={handleSubmit(data => handleLogin(data))}>
          <MobileInput
            {...register('email', { required: true })}
            placeholder="Email or username"
          />

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
    </MobileLoginContainer>
  );
};

export default Login;
