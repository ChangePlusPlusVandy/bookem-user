import React from 'react';
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
  StatsFlex,
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
          <StatsFlex>
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
          </StatsFlex>
        </StatsContainer>

        <StatsContainer>
          <StatsHeader>Your events</StatsHeader>
          {/* TODO: add a filter icon on the right */}
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
