import React, { useState } from 'react';
import { Media } from '@/lib/media';
import Image from 'next/image';
import UpcomingEvents from '@/components/Home/UpcomingEvents';
import PastActivity from '@/components/Home/PastActivity';
import { Popover } from 'antd';
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
import { formatDate } from '@/utils/utils';
import { QueriedUserData } from 'bookem-shared/src/types/database';

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
const MainDashboard = ({ userData }: { userData: QueriedUserData | null }) => {
  // state for showing mobile past activities
  const [onMobilePastActivity, setOnMobilePastActivity] = useState(false);

  const content = (
    <div>
      <p>This is the main dashboard for book&apos;em user</p>
    </div>
  );

  return (
    <>
      {onMobilePastActivity && (
        <>
          {/* Display PastActivity when click on arrow button */}
          <PastActivity userData={userData} />
        </>
      )}
      {!onMobilePastActivity && (
        <DashboardLayout>
          <Container>
            {/* Mobile Greeting and InfoIcon*/}
            <Media lessThan="sm">
              <Greeting>Hello, {userData?.name}</Greeting>

              <Popover content={content} title="Info">
                <InfoIcon>
                  <Image
                    src="/home/info.png"
                    alt="Info icon"
                    width="19"
                    height="19"
                  />
                </InfoIcon>
              </Popover>
            </Media>

            {/* Desktop Greeting and InfoIcon */}
            <Media greaterThanOrEqual="sm">
              <Greeting>
                Hello {userData?.name}, thanks for checking in!
              </Greeting>
              <Popover content={content} title="Info">
                <InfoIcon>
                  <Image
                    src="/home/info.png"
                    alt="Info icon"
                    width="35"
                    height="35"
                  />
                </InfoIcon>
              </Popover>
            </Media>

            <div>
              {/* Mobile Accomplishments Header */}
              <Media lessThan="sm">
                <MobileHeader>Great work! Keep it up.</MobileHeader>
              </Media>

              {/* Desktop Accomplishments Header */}
              <Media greaterThanOrEqual="sm">
                <Header>Your accomplishments at a glance:</Header>
              </Media>

              <StatsFlex>
                <FlexChild>
                  <StatsNumber>{userData?.events.length}</StatsNumber>
                  <StatsDescription>Events volunteered</StatsDescription>
                </FlexChild>

                <FlexChild>
                  <StatsNumber>
                    {formatDate(new Date(userData?.createdAt as Date))}
                  </StatsNumber>
                  <StatsDescription>Date joined</StatsDescription>
                </FlexChild>
              </StatsFlex>
            </div>

            <div>
              <Header>Your upcoming events</Header>
              {/* TODO: add a filter icon on the right */}

              <UpcomingEvents />
            </div>

            {/* Mobile PastActivity is accessed at bottom of main dashboard */}
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

            {/* Desktop PastActivity is not located at bottom of main dashboard */}
            <Media greaterThanOrEqual="sm">
              {/* Desktop PastActivity is not located here */}
            </Media>
          </Container>

          {/* Mobile PastActivity is hidden */}
          <Media lessThan="sm">{/**PastActivity is not shown here */}</Media>

          {/* Desktop PastActivity is shown on the right side of main dashboard*/}
          <Media greaterThanOrEqual="sm">
            <PastActivity userData={userData} />
          </Media>
        </DashboardLayout>
      )}
    </>
  );
};

export default MainDashboard;
