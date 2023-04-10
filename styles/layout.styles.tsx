import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const MainContent = styled.div`
  @media (min-width: 768px) {
    width: calc(100vw - 120px);
  }
  @media (max-width: 767px) {
    width: calc(100vw);
  }
  overflow-y: auto;
`;
