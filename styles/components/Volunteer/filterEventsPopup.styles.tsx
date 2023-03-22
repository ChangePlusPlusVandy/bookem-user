import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 500%;
  z-index: 5;
  display: flex;
  overflow: hidden;
`;

export const Container = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 180px;
  background: gray;
  border-radius: 10px;
  z-index: 10;
  right: 0px;
  top: 40px;
  display: flex;
  padding: 30px;
  gap: 10px;
`;

export const FilterText = styled.button`
  width: 100px;
  border: none;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;
