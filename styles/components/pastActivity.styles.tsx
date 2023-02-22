import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d9d9d9;
  width: 24vw;
  height: 100vh;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;

  ul {
    padding: 0;
  }
`;

export const Header = styled.p`
  font-size: 25px;
  margin-top: 50px;
  text-align: center;
  font-weight: 400;
`;
