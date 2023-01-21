import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background: #dbdbdb;
  padding: 60px calc(50vw - 40%);
  gap: 2vh;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 85%;
  height: 55vw;
  min-height: 200px;
  min-width: 120px;
  margin-left: auto;
  margin-right: auto;
`;

const HeaderFont = styled.p`
  font-size: 25px;
  margin: 4px;
  font-weight: bold;
`;

const InfoFont = styled.p`
  font-size: 15px;
  margin: 4px;
`;

const LeftDisplay = () => {
  return (
    <Container>
      <ImgContainer>
        <Image src={'/pretty.png'} fill alt="BookEm Background"></Image>
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
