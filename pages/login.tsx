import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { getSession, GetSessionParams, signIn } from 'next-auth/react';
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
} from '@/styles/login.styles';
import LeftDisplay from '@/components/Register/LeftDisplay';
import MobileLogin from '@/components/mobile/MobileLogin/MobileLogin';
import Link from 'next/link';
import { Media, MediaContextProvider } from '@/lib/media';
import styled from 'styled-components';
import Image from 'next/image';

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Eye = styled.i`
  position: absolute;
  top: 13%;
  right: 4%;
`;

const ForgotPassword = styled.div`
  margin: -10px 10px 0 auto;
  font-size: 15px;
  line-height: 18px;
  color: #6d6d6d;
`;

interface Props {
  hover?: boolean;
}

const MobileContainer = styled.div`
  height: 100vh;
  padding: 6% 24%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30.26px;
`;

const MobileTextContainer = styled.div`
  margin: auto;
`;

const MobileText = styled.p<Props>`
  text-align: center;
  &:last-child {
    font-size: 16px;
    line-height: 19.36px;
  }
  &:hover {
    cursor: ${props => (props.hover ? `pointer` : `auto`)};
  }
`;

const MobileLoginButton = styled.button`
  background: #6d6d6d;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1rem;
  color: white;
  width: 296px;
  height: 53px;
  &:hover {
    cursor: pointer;
  }
`;

const LoginPage = () => {
  // state for going to mobile login page
  const [onMobileLogin, setOnMobileLogin] = useState(false);

  // state for showing psasword
  const [passwordShown, setPasswordShown] = useState(false);

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
    <MediaContextProvider disableDynamicMediaQueries>
      <Media lessThan="sm">
        {onMobileLogin ? (
          <MobileLogin />
        ) : (
          <MobileContainer>
            <Image
              src={'/bookemkids.png'}
              width="285"
              height="387"
              alt="BookEm Background"
            />

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
                  placeholder="Email or Username"
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
              </LoginForm>
              <SubmitButton form="loginForm" type="submit" value="Log in" />
            </ContentContainer>

            <Footer>
              <LittleText>New here? Come join us!</LittleText>
              <Link href={'/register'}>
                <CreateButton>Create Account</CreateButton>
              </Link>
            </Footer>
          </RightContainer>
        </Container>
      </Media>
    </MediaContextProvider>
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
