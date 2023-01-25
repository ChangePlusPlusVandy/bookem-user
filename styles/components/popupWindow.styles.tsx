import styled from 'styled-components';

export const Background = styled.div`
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

export const Container = styled.div`
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

export const CloseButton = styled.button`
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
