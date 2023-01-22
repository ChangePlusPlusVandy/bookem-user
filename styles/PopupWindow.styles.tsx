import React from 'react'
import styled from 'styled-components';

const Background = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: black;
    display: flex;
    background:rgba(0,0,0,0.3);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 80%;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    background: white;
    z-index: 10;
`;

export const PopupWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <Background>
        <Container>
            {children}
        </Container>
    </Background>
  )
}
