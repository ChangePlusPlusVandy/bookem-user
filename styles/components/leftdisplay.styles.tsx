import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background: #dbdbdb;
  padding: 50px 40px;
  overflow-y: auto;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 85%;
  height: 60vw;
  min-height: 200px;
  min-width: 120px;
  margin: 0 auto;
`;

export const HeaderFont = styled.p`
  font-size: 25px;
  margin: 4px;
  width: 85%;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
`;

export const InfoFont = styled.p`
  font-size: 15px;
  width: 85%;
  margin: 0 auto;
`;
