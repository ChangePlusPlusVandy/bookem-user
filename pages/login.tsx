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
import MobileLogin from '@/components/mobile/Login';
import Link from 'next/link';
import { Media, MediaContextProvider } from '@/lib/media';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  fontSize?: number;
  lineHeight?: number;
  hover?: boolean;
}

const MobileContainer = styled.div`
  height: 100vh;
  padding: 6% 13%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
`;

const MobileText = styled.p<Props>`
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.lineHeight}px;
  text-align: center;
  &:hover {
    cursor: ${props => (props.hover ? `pointer` : `auto`)};
  }
`;

const MobileSignUpButton = styled.button`
  background: #6d6d6d;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  line-height: 19px;
  color: white;
  width: 296px;
  height: 53px;
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const LoginPage = () => {
  // state for going to mobile login page
  const [onMobileLogin, setOnMobileLogin] = useState(false);

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
        {onMobileLogin === false && (
          <MobileContainer>
            <Image
              src={'/bookemkids.png'}
              width="285"
              height="387"
              alt="BookEm Background"
            />

            <div>
              <MobileText fontSize={25} lineHeight={30.26}>
                Welcome to Book'em
              </MobileText>

              <MobileText fontSize={16} lineHeight={19.36}>
                Share the joy of reading and book ownership.
              </MobileText>
            </div>

            <div>
              <Link href={'/register'}>
                <MobileSignUpButton>Sign up</MobileSignUpButton>
              </Link>

              <MobileText
                fontSize={16}
                lineHeight={19.36}
                hover
                onClick={() => setOnMobileLogin(true)}>
                Or log in
              </MobileText>
            </div>
          </MobileContainer>
        )}

        {onMobileLogin === true && <MobileLogin />}
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
                  placeholder="Email or Username"></Input>
                <Input
                  {...register('password', { required: true })}
                  type="password"
                  placeholder="Password"></Input>
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
