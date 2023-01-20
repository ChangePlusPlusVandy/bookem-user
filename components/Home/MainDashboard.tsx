import React from 'react';
import styled from 'styled-components';
import UpcomingEvents from './UpcomingEvents';
import Image from 'next/image';
import {
  Container,
  Greeting,
  GreetingContainer,
  InfoIcon,
  StatsContainer,
  StatsDescription,
  StatsFlex,
  StatsFlexChild,
  StatsHeader,
  StatsNumber,
  UpcomingEventsContainer,
} from '@/styles/dashboard.styles';

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

      <UpcomingEventsContainer>
        <UpcomingEvents />
      </UpcomingEventsContainer>
    </Container>
  );
};

export default MainDashboard;
