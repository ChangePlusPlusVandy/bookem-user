import styled from 'styled-components';

export const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 24vw;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  padding: 40px;
  overflow-y: scroll;
  position: relative;
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

export const Flex = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
`;

export const FlexChild = styled.div`
  flex: 1;
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

export const LogButton = styled.button`
  width: 222px;
  height: 74px;
  background: #6d6d6d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
`;

export const PastActivityButton = styled.button`
  width: 222px;
  height: 74px;
  background: #d6d6d6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
`;

export const VolunteerButtonsContainer = styled.div`
  margin-top: 80px;
`;
