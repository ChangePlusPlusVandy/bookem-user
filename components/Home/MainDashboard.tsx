import React from 'react';
import styled from 'styled-components';
import UpcomingEvents from './UpcomingEvents';
import Image from 'next/image';
import {
  Container,
  DashboardLayout,
  Greeting,
  GreetingContainer,
  InfoIcon,
  StatsContainer,
  StatsDescription,
  Flex,
  FlexChild,
  StatsHeader,
  StatsNumber,
  UpcomingEventsContainer,
} from '@/styles/dashboard.styles';
import PastActivity from '@/components/Home/PastActivity';

const MainDashboard = ({ userData }: any) => {
  return (
    <DashboardLayout>
      <Container>
        <GreetingContainer>
          <Greeting>Hello {userData.name}, how&apos;s your day?</Greeting>
        </GreetingContainer>

        <InfoIcon>
          <Image src="/info.png" alt="Info icon" width="44" height="44" />
        </InfoIcon>

        <StatsContainer>
          <StatsHeader>Your accomplishments at a glance:</StatsHeader>
          <Flex>
            <FlexChild>
              <StatsNumber>{userData.hoursVolunteered}</StatsNumber>
              <StatsDescription>Hours volunteered</StatsDescription>
            </FlexChild>

            <FlexChild>
              <StatsNumber>{userData.booksShared}</StatsNumber>
              <StatsDescription>Books shared (requested?)</StatsDescription>
            </FlexChild>

            <FlexChild>
              <StatsNumber>{userData.dollarsDonated}</StatsNumber>
              <StatsDescription>Dollars donated</StatsDescription>
            </FlexChild>
          </Flex>
        </StatsContainer>

        <UpcomingEventsContainer>
          <UpcomingEvents />
        </UpcomingEventsContainer>
      </Container>

      <PastActivity />
    </DashboardLayout>
  );
};

export default MainDashboard;
