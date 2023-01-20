import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 40px;
`;

export const GreetingContainer = styled.div`
  color: lightblue;
  height: fit-content;
  background-color: white;
`;

export const Greeting = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: black;
`;

export const UpcomingEventsContainer = styled.div`
  margin-top: 40px;
`;

export const InfoIcon = styled.div`
  position: absolute;
  top: 82px;
  right: 50px;
`;

export const StatsContainer = styled.div`
  height: fit-content;
  margin-top: 49px;
  background-color: white;
`;

export const StatsHeader = styled.p`
  margin-bottom: 29px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
`;

export const StatsFlex = styled.div`
  height: fit-content;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
`;

export const StatsFlexChild = styled.div`
  flex: 1;
  background-color: white;
  margin: 10px;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
`;

export const StatsNumber = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
`;

export const StatsDescription = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
`;