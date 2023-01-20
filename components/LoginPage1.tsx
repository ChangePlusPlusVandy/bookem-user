import React from 'react'
import styled from 'styled-components';
import LeftDisplay from './LeftDisplay';

import { FieldValues, useForm } from 'react-hook-form';
import { getSession, GetSessionParams, signIn } from 'next-auth/react';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow:hidden;
`;

const RightContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 100vh;
    background: white;
    padding-top: 20vh;
    gap: 4vh;
    padding-left: 15vh;
    padding-right: 15vh;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Button = styled.button`
    font-size: 17px;
    background: #dbdbdb;
    border: none;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 35px;
    padding-right: 35px;
    border-radius: 14px;
    &:hover {
      background-color: green;
    }
    width: 275px;
    margin-left: auto;
    margin-right: auto;
`

const Footer = styled.div`
    position: absolute;
    justify-content: top;
    align-items: center;
    display: flex;
    flex-direction: column;
    left: 0px;
    bottom: 0px;
    width: 50vw;
    height: 17vh;
    background: gray;
`
const ExternalPrompt = styled.p`
  padding-top: 8px;
  color: gray;
  font-family:arial;
  font-size: 13px;
  margin-left: auto;
  margin-right: auto;
`
const ContentContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
`;
const LoginHeader = styled.div`
    margin-right: auto;
    font-size: 30px;
    font-weight: bold;
    font-family: arial;
    margin-bottom: 30px;
`;

const IconContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: 20px;
    padding-bottom: 30px;
`;

const Input = styled.input`
    border: 1px solid;
    height: 35px;
    border-radius: 18px;
    padding: 10px;
`;

const SubmitButton = styled.input`
`;

const IconButton = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background-color: #dbdbdb;
    border: 0px;
    &:hover {
      background-color: green;
    }
`;

const LittleText = styled.p`
    padding-top: 8px;
    padding-bottom: 8px;
    color: white;
    font-family:arial;
    font-size: 13px;
`;

export default function LoginPage1() {

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
    <Container>
        <LeftDisplay></LeftDisplay>
        <RightContainer>
          <ContentContainer>
            <LoginHeader>Logging you in</LoginHeader>
            <LoginForm 
              id = "loginForm" onSubmit={handleSubmit(data => handleLogin(data))}> 
              <Input placeholder='Email or Username'></Input>
              <Input placeholder='Password'></Input>
            </LoginForm>
            <ExternalPrompt>
              ----------------- Or log in with -----------------
            </ExternalPrompt>
            <IconContainer>
              <IconButton></IconButton>
              <IconButton></IconButton>
              <IconButton></IconButton>
              <IconButton></IconButton>
            </IconContainer>
            <Button>
                  Log in
            </Button>
          </ContentContainer>
    
          <Footer>
            <LittleText>New here? Come join us!</LittleText>
            <Button>
                Create Account
            </Button>
          </Footer>
        </RightContainer>
    </Container>
  )
}
