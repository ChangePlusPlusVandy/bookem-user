import React, { useState } from 'react';
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
  MobilePastActivityContainer,
  MobileHeader,
} from '@/styles/dashboard.styles';
import { Media } from '@/lib/media';
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
  // state for showing mobile past activities
  const [onMobilePastActivity, setOnMobilePastActivity] = useState(false);

  return (
    <>
      {onMobilePastActivity ? (
        <PastActivity userData={userData} />
      ) : (
        <DashboardLayout>
          <Container>
            <Media lessThan="sm">
              <Greeting>Hello, {userData.name}</Greeting>

              <InfoIcon>
                <Image
                  src="/home/info.png"
                  alt="Info icon"
                  width="19"
                  height="19"
                />
              </InfoIcon>
            </Media>
            <Media greaterThanOrEqual="sm">
              <Greeting>
                Hello {userData.name}, thanks for checking in!
              </Greeting>

              <InfoIcon>
                <Image
                  src="/home/info.png"
                  alt="Info icon"
                  width="44"
                  height="44"
                />
              </InfoIcon>
            </Media>

            <div>
              <Media lessThan="sm">
                <MobileHeader>Great work! Keep it up.</MobileHeader>
              </Media>
              <Media greaterThanOrEqual="sm">
                <Header>Your accomplishments at a glance:</Header>
              </Media>

              <StatsFlex>
                <FlexChild>
                  <StatsNumber>{userData.hoursVolunteered}</StatsNumber>
                  <StatsDescription>hours volunteered</StatsDescription>
                </FlexChild>

                <FlexChild>
                  <StatsNumber>{userData.booksShared}</StatsNumber>
                  <StatsDescription>books shared</StatsDescription>
                </FlexChild>

                <FlexChild>
                  <StatsNumber>{userData.dollarsDonated}</StatsNumber>
                  <StatsDescription>dollars donated</StatsDescription>
                </FlexChild>
              </StatsFlex>
            </div>

            <div>
              <Header>Your upcoming events</Header>
              {/* TODO: add a filter icon on the right */}

              <UpcomingEvents />
            </div>

            <Media lessThan="sm">
              <MobilePastActivityContainer>
                <Header>See past activity</Header>
                <Image
                  src="/home/arrow-right.png"
                  alt="Right arrow"
                  width="32"
                  height="32"
                  onClick={() => setOnMobilePastActivity(true)}
                />
              </MobilePastActivityContainer>
            </Media>
            <Media greaterThanOrEqual="sm">
              {/**PastActivity is not hidden */}
            </Media>
          </Container>

          <Media lessThan="sm">{/**PastActivity is not shown here */}</Media>
          <Media greaterThanOrEqual="sm">
            <PastActivity />
          </Media>
        </DashboardLayout>
      )}
    </>
  );
};

export default MainDashboard;
