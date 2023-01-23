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
  background: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 85%;
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

type Props = {
  hidePopup: () => void;
  children: JSX.Element;
};

export const PopupWindow = ({ hidePopup, children }: Props) => {
  return (
    <Background>
      <Container>
        <CloseButton onClick={hidePopup}>&#215;</CloseButton>
        {children}
      </Container>
    </Background>
  );
};

export default PopupWindow;
