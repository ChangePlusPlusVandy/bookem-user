import React from 'react';
import Image from 'next/image';
import UpcomingEvents from '@/components/Home/UpcomingEvents';
import PastActivity from '@/components/Home/PastActivity';
import {
  Container,
  DashboardLayout,
  Greeting,
  InfoIcon,
  StatsDescription,
  StatsFlex,
  FlexChild,
  Header,
  StatsNumber,
} from '@/styles/dashboard.styles';

/**
 * format main dashboard on home page
 * @param userData object that contains pertinent user information
 * userData: {
 *   name: string;
 *   hoursVolunteered: number;
 *   booksShared: number;
 *   dollarsDonated: number;
 * }
 */
const MainDashboard = ({ userData }: any) => {
  return (
    <DashboardLayout>
      <Container>
        <Greeting>Hello {userData.name}, how&apos;s your day?</Greeting>

        <InfoIcon>
          <Image src="/info.png" alt="Info icon" width="44" height="44" />
        </InfoIcon>

        <Header>Your accomplishments at a glance:</Header>
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

        <Header>Your events</Header>
        {/* TODO: add a filter icon on the right */}

        <UpcomingEvents />
      </Container>

      <PastActivity />
    </DashboardLayout>
  );
};

export default MainDashboard;
