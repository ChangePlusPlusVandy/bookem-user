import React from 'react';
import Image from 'next/image';
import {
  Container,
  ImgContainer,
  HeaderFont,
} from '@/styles/components/leftDisplay.styles';

const LeftDisplay = () => {
  return (
    <Container>
      <ImgContainer>
        <Image
          src="/login/login.png"
          fill
          style={{ objectFit: 'contain' }}
          alt="BookEm Background"></Image>
      </ImgContainer>
      <HeaderFont>Welcome to the</HeaderFont>{' '}
      <HeaderFont>Book&apos;em Volunteer Portal</HeaderFont>
    </Container>
  );
};

export default LeftDisplay;
