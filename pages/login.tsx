import React from 'react';
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
import Link from 'next/link';
import { Media, MediaContextProvider } from '@/lib/media';

const LoginPage = () => {
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
        {/* TODO:  */}
        Hello Mobile!
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
