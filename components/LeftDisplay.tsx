import { prettyDOM } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import testImg from './pretty.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background: #dbdbdb;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 80px;
  padding-right: 80px;
  gap: 2vh;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 75%;
  min-height: 200px;
  min-width: 120px;
  height: 55vw;
  margin-left: auto;
  margin-right: auto;
`;

const Info = styled.div`
  width: 75%;
  height: 30%;
  min-width: 200px;
  min-height: 38px;
  margin-left: auto;
  margin-right: auto;
  font-size: 10px;
  overflow: hidden;
  font-family: arial;
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
`;

const HeaderFont = styled.p`
  font-size: 25px;
  margin: 4px;
  font-weight: bold;
  font-family: ;
`;

const InfoFont = styled.p`
  font-size: 15px;
  margin: 4px;
`;

const LeftDisplay = () => {
  return (
    <Container>
      <ImgContainer>
        <Image
          src={'/pretty.png'}
          layout="fill"
          objectFit="cover"
          alt="oops"></Image>
      </ImgContainer>
      <Info>
        <HeaderFont>Info 1</HeaderFont>
        <InfoFont>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          velit sapien, fermentum a mauris sit amet, tincidunt dapibus justo.
          Proin elementum magna vitae mollis vestibulum.
        </InfoFont>
      </Info>
      <Info>
        <HeaderFont>Info 2</HeaderFont>
        <InfoFont>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          velit sapien, fermentum a mauris sit amet, tincidunt dapibus justo.
          Proin elementum magna vitae mollis vestibulum.
        </InfoFont>
      </Info>
      <Info>
        <HeaderFont>Info 3</HeaderFont>
        <InfoFont>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          velit sapien, fermentum a mauris sit amet, tincidunt dapibus justo.
          Proin elementum magna vitae mollis vestibulum.
        </InfoFont>
      </Info>
    </Container>
  );
};

export default LeftDisplay;
