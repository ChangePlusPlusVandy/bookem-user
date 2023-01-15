import React from 'react';
import styled from 'styled-components';
import PastActivity from './PastActivity';
import Image from 'next/image';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: pink;
  padding: 40px;
`;

const GreetingContainer = styled.div`
  color: lightblue;
  height: fit-content;
  background-color: lightblue;
`;

const Greeting = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: black;
`;

const InfoIcon = styled.div`
  position: absolute;
  top: 82px;
  right: 50px;
`;

const StatsContainer = styled.div`
  height: fit-content;
  margin-top: 49px;
  background-color: lightgreen;
`;

const StatsHeader = styled.p`
  margin-bottom: 29px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
`;

const StatsFlex = styled.div`
  height: fit-content;
  background-color: lightgreen;
  display: flex;
  justify-content: space-evenly;
`;

const StatsFlexChild = styled.div`
  flex: 1;
  background-color: yellow;
  margin: 10px;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
`;

const StatsNumber = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
`;

const StatsDescription = styled.p`
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
`;

const PastActivityContainer = styled.div`
  margin-top: 40px;
`;

const MainDashboard = ({ userData }: any) => {
  return (
    <Container>
      <GreetingContainer>
        <Greeting>Hello {userData.name}, how&apos;s your day?</Greeting>
      </GreetingContainer>

      <InfoIcon>
        <Image src="/info.png" alt="Info icon" width="44" height="44" />
      </InfoIcon>

      <StatsContainer>
        <StatsHeader>Your accomplishments at a glance:</StatsHeader>
        <StatsFlex>
          <StatsFlexChild>
            <StatsNumber>{userData.hoursVolunteered}</StatsNumber>
            <StatsDescription>Hours volunteered</StatsDescription>
          </StatsFlexChild>

          <StatsFlexChild>
            <StatsNumber>{userData.booksShared}</StatsNumber>
            <StatsDescription>Books shared (requested?)</StatsDescription>
          </StatsFlexChild>

          <StatsFlexChild>
            <StatsNumber>{userData.dollarsDonated}</StatsNumber>
            <StatsDescription>Dollars donated</StatsDescription>
          </StatsFlexChild>
        </StatsFlex>
      </StatsContainer>

      <PastActivityContainer>
        <PastActivity />
      </PastActivityContainer>
    </Container>
  );
};

export default MainDashboard;
