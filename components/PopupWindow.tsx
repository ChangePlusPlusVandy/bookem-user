import React from 'react';
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
  background: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 100%;
  padding: 0px;
  border: none;
  height: 30px;
  width: 30px;
  background-color: white;
  &:hover {
    color: gray;
  }
  color: #dbdbdb;
  font-size: 30px;
`;
export const PopupWindow = (
  { children }: { children: React.ReactNode },
  hidePopup: () => void
) => {
  return (
    <Background>
      <Container>
        <CloseButton>&#215;</CloseButton>
        {children}
      </Container>
    </Background>
  );
};

export default PopupWindow;
