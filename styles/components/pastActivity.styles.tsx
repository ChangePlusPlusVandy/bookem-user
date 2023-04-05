import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  background-color: #d9d9d9;
  width: 24vw;
  height: 100vh;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
  }

  @media (max-width: 767px) {
    background: white;
    width: 100vw;
    padding: 30px;
    z-index: 1;
  }
`;

export const Header = styled.p`
  font-size: 25px;
  margin-top: 50px;
  text-align: center;
`;

export const HeaderBox = styled.div`
  display: flex;
  height: 48px;

  @media (max-width: 767px) {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
`;

export const HeaderText = styled.span`
  margin-left: 38px;
  font-size: 40px;
`;

export const Line = styled(Image)`
  width: 100%;
`;

export const Events = styled.ul`
  overflow-y: auto;
`;
