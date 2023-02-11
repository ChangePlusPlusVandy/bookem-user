import React from 'react';
import {
  Container,
  RightContainer,
  ContentContainer,
} from '@/styles/login.styles';
import LeftDisplay from '@/components/LeftDisplay';

const RegisterPage = () => {
  return (
    <Container>
      <LeftDisplay></LeftDisplay>
      <RightContainer>
        <ContentContainer>Register Flow go here</ContentContainer>
      </RightContainer>
    </Container>
  );
};

export default RegisterPage;
