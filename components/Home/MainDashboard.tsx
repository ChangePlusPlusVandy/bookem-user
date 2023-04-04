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
import { Media, MediaContextProvider } from '@/lib/media';
import Link from 'next/link';

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

        <MediaContextProvider disableDynamicMediaQueries>
          {/**TODO: DOUBLE CHECK ALL FORMATTING, etc. */}
          <Media lessThan="sm">
            <Header>See past activity</Header>
            <Link href="/volunteerHistory">
              <button></button>
            </Link>
          </Media>
          <Media greaterThanOrEqual="sm">
            {/**PastActivity is not hidden */}
          </Media>
        </MediaContextProvider>
      </Container>

      <MediaContextProvider disableDynamicMediaQueries>
        <Media lessThan="sm">{/**PastActivity is not shown here */}</Media>
        <Media greaterThanOrEqual="sm">
          <PastActivity />
        </Media>
      </MediaContextProvider>
    </DashboardLayout>
  );
};

export default MainDashboard;
