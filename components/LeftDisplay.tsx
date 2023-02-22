import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import {
  Container,
  ImgContainer,
  HeaderFont,
  InfoFont,
} from '@/styles/leftdisplay.styles';

const LeftDisplay = () => {
  return (
    <Container>
      <ImgContainer>
        <Image
          src={'/bookemkids.png'}
          fill
          style={{ objectFit: 'cover' }}
          alt="BookEm Background"></Image>
      </ImgContainer>

      <HeaderFont>Volunteer</HeaderFont>
      <InfoFont>
        Browser for events and activities happening in your community and log
        volunteer hours and keep track of progress!
      </InfoFont>

      <HeaderFont>Donate</HeaderFont>
      <InfoFont>
        Donate books to us and we will distribute them to those in need in your
        community!
      </InfoFont>

      <HeaderFont>Request</HeaderFont>
      <InfoFont>
        Request books on behalf of your school or organization and we will
        arrange an event to distribute them!
      </InfoFont>
    </Container>
  );
};

export default LeftDisplay;
