import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const RightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background: white;
  padding-top: 20vh;
  gap: 4vh;
  padding-left: 15vh;
  padding-right: 15vh;
  overflow-y: auto;
`;
