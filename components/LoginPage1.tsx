import React from 'react'
import styled from 'styled-components';
import LeftDisplay from './LeftDisplay';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const RightContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 100vh;
    background: white;
    padding: 60px;
    gap: 4vh;
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
      background-color: white;
    }
`

const Footer = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
    left: 0px;
    bottom: 0px;
    width: 50vw;
    height: 20vh;
    background: gray;
`



export default function LoginPage1() {
  return (
    <Container>
        <LeftDisplay></LeftDisplay>
        <RightContainer>
          <Footer>
            <Button>
                Create Account
            </Button>
          </Footer>
        </RightContainer>
    </Container>
  )
}
