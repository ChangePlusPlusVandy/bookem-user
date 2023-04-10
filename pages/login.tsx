import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { getSession, GetSessionParams, signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import LeftDisplay from '@/components/Register/LeftDisplay';
import MobileLogin from '@/components/mobile/MobileLogin/MobileLogin';
import {
  CreateButton,
  Container,
  ContentContainer,
  Footer,
  Input,
  LittleText,
  LoginForm,
  LoginHeader,
  RightContainer,
  SubmitButton,
  PasswordWrapper,
  Eye,
  ForgotPassword,
  MobileContainer,
  MobileImageContainer,
  MobileTextContainer,
  MobileText,
  MobileLoginButton,
} from '@/styles/login.styles';
import {
  BOOKEM_THEME,
  SIDEBAR_ICON_HEIGHT,
  SIDEBAR_ICON_PARAMS,
  SIDEBAR_ICON_WIDTH,
} from '@/utils/constants';
import { Media, MediaContextProvider } from '@/lib/media';

const LoginPage = () => {
  // state for going to mobile login page
  const [onMobileLogin, setOnMobileLogin] = useState(false);

  // state for showing password
  const [passwordShown, setPasswordShown] = useState(false);

  // error message for incorrect login
  const [errorMessage, setErrorMessage] = useState<string>('');

  // React hook form.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle login and redirect.
  const handleLogin = async (data: FieldValues) => {
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.status === 401) {
      // If login is unsuccessful, display error message.
      setErrorMessage('Ooops! Incorrect email or password');
    } else if (res?.status === 200) {
      // If login is successful, redirect to home page.
      window.location.href = '/';
    }
  };

  return (
    <>
      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        <Container>
          <LeftDisplay />

          <RightContainer>
            <ContentContainer>
              <LoginHeader>Logging you in</LoginHeader>

              <LoginForm
                id="loginForm"
                onSubmit={handleSubmit(data => handleLogin(data))}>
                <Input
                  {...register('email', { required: true })}
                  placeholder="Email or username"
                />

                <PasswordWrapper>
                  <Input
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
                {errorMessage && <span>{errorMessage}</span>}
              </LoginForm>

              <SubmitButton form="loginForm" type="submit" value="Log in" />
            </ContentContainer>

            <Footer>
              <LittleText>New here? Come join us!</LittleText>

              <Link href={'/register'}>
                <CreateButton>Sign up</CreateButton>
              </Link>
            </Footer>
          </RightContainer>
        </Container>
      </Media>

      {/* Mobile */}
      <Media lessThan="sm">
        {onMobileLogin ? (
          <MobileLogin />
        ) : (
          <MobileContainer>
            <MobileImageContainer>
              <Image src={'/bookemkids.png'} alt="BookEm Background" fill />
            </MobileImageContainer>

            <MobileTextContainer>
              <MobileText>
                Welcome to the Book&apos;em Volunteer Portal
              </MobileText>

              <MobileText>
                Share the joy of reading and book ownership.
              </MobileText>
            </MobileTextContainer>

            <MobileLoginButton onClick={() => setOnMobileLogin(true)}>
              Log in
            </MobileLoginButton>

            <Link href={'/register'}>
              <MobileText hover>Or sign up</MobileText>
            </Link>
          </MobileContainer>
        )}
      </Media>
    </>
  );
};

export default LoginPage;

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context);

  // If the user is already logged in, redirect to the home page.
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  // If the user is not logged in, show the login page.
  return {
    props: {
      session,
    },
  };
}
