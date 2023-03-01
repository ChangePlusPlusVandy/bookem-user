import styled from 'styled-components';

export const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 24vw;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px 40px;
  overflow-y: scroll;
  position: relative;
  font-style: normal;
  font-weight: 400;
`;

export const Greeting = styled.p`
  font-size: 40px;
  line-height: 48px;
`;

export const InfoIcon = styled.div`
  position: absolute;
  top: 82px;
  right: 50px;

  &:hover {
    cursor: pointer;
  }
`;

export const Header = styled.p`
  margin-bottom: 29px;
  font-size: 25px;
  line-height: 30px;
`;

export const StatsFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FlexChild = styled.div`
  flex: 0 1 auto;
  margin: 10px;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
`;

export const StatsNumber = styled.p`
  margin: 0;
  font-size: 40px;
  line-height: 48px;
`;

export const StatsDescription = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;
