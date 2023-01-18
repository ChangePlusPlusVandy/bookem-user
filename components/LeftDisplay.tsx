import { prettyDOM } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'
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
    min-height: 120px;
    min-width: 200px;
    height: 25vw;
    background: white;
    margin-left: auto;
    margin-right: auto;
`;

const Info = styled.div`
    width: 75%;
    height: 9vw;
    min-width: 200px;
    background: white;
    margin-left: auto;
    margin-right: auto;
    background: white;
    font-size: 10px;
    overflow:hidden;
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
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
        <ImgContainer >
            <Image
                src={"/pretty.png"}
                layout="fill"
                objectFit='cover'
                alt="oops">
            </Image>
        </ImgContainer>
        <Info>
            <HeaderFont>
                Info 1
            </HeaderFont>
            <InfoFont>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit sapien, fermentum a mauris sit amet, tincidunt dapibus justo. Proin elementum magna vitae mollis vestibulum.
            </InfoFont>
        </Info>
        <Info>
            <HeaderFont>
                Info 2
            </HeaderFont>
            <InfoFont>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit sapien, fermentum a mauris sit amet, tincidunt dapibus justo. Proin elementum magna vitae mollis vestibulum.
            </InfoFont>
        </Info>
        <Info>
            <HeaderFont>
                Info 3
            </HeaderFont>
            <InfoFont>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit sapien, fermentum a mauris sit amet, tincidunt dapibus justo. Proin elementum magna vitae mollis vestibulum.
            </InfoFont>
        </Info>
    </Container>
  )
};

export default LeftDisplay;