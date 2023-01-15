import React from 'react'
import styled from 'styled-components';
import LeftDisplay from './LeftDisplay';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 55vw;
    height: 100vh;
    background: brown;
    padding: 60px;
    gap: 4vh;
`;



export default function LoginPage1() {
  return (
    <Container>
        <LeftDisplay></LeftDisplay>
        <RightContainer></RightContainer>
    </Container>
  )
}
