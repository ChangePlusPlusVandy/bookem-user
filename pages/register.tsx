import React from 'react';
import { Container, RightContainer } from '@/styles/register.styles';
import LeftDisplay from '@/components/LeftDisplay';

const RegisterPage = () => {
  return (
    <Container>
      <LeftDisplay></LeftDisplay>
      <RightContainer>Register Flow Goes Here</RightContainer>
    </Container>
  );
};

export default RegisterPage;
