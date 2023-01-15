import { prettyDOM } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'
import Image from 'next/image';
import testImg from './pretty.jpeg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    height: 100vh;
    background: gray;
    padding-top: 60px;
    padding-bottom: 60px;
    gap: 4vh;
`;

const ImgContainer = styled.div`
    position: relative;
    width: 75%;
    height: 25vw;
    background: white;
    margin-left: auto;
    margin-right: auto;
`;

const Info = styled.div`
    width: 75%;
    height: 7vw;
    background: white;
    margin-left: auto;
    margin-right: auto;
    background: white;
    font-size: 10px;
    padding: 5px;
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
`;

const HeaderFont = styled.p`
    background: green;
    font-size: 20px;
    margin: 4px;
`;

const InfoFont = styled.p`
    background: red;
    font-size: 15px;
    margin: 4px;
`;

const LeftDisplay = () => {
  return (
    <Container>
        <ImgContainer >
            <Image
                src={"/pretty.png"}
                layout="fill"
                alt="oops">
            </Image>
        </ImgContainer>
        <Info>
            <HeaderFont>
                Info 1
            </HeaderFont>
            <InfoFont>
              information
            </InfoFont>
        </Info>
        <Info>
            <HeaderFont>
                Info 1
            </HeaderFont>
            <InfoFont>
              information
            </InfoFont>
        </Info>
        <Info>
            <HeaderFont>
                Info 1
            </HeaderFont>
            <InfoFont>
              information
            </InfoFont>
        </Info>
    </Container>
  )
};

export default LeftDisplay;