import React, { useState } from 'react';
import Image from 'next/image';
import FutureVolunteerEvents from '@/components/Volunteer/FutureVolunteerEvents';
import {
  Greeting,
  GreetingContainer,
  StatsFlex,
  FlexChild,
  StatsNumber,
  StatsDescription,
} from '@/styles/dashboard.styles';
import {
  DashboardContainer,
  LogButton,
  ButtonIcon,
  VolunteerButtonsContainer,
  VolunteerStatsContainer,
  ButtonText,
} from '@/styles/volunteerDashboard.styles';
import LogHoursPopupWindowForm from '@/components/Forms/LogHoursPopupWindowForm';
import { Media } from '@/lib/media';

const VolunteerDashboard = ({ userData }: any) => {
  // set pop up window to false
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <DashboardContainer>
        {/* based on whether or not hideppopup is true, displays popup */}
        {showPopup && <LogHoursPopupWindowForm setShowPopup={setShowPopup} />}
        <GreetingContainer>
          <Greeting>Volunteer</Greeting>
        </GreetingContainer>

        {/** Button for "Log Hours" and opens popup if clicked */}
        <VolunteerButtonsContainer>
          <LogButton
            backgroundcolor="#6d6d6d"
            onClick={() => setShowPopup(true)}>
            <ButtonIcon>
              <Media greaterThanOrEqual="sm">
                <Image
                  src="/volunteer/pencil.png"
                  alt="Pencil icon"
                  width="50"
                  height="50"
                />
              </Media>
              <Media lessThan="sm">
                <Image
                  src="/volunteer/pencil-mobile.svg"
                  alt="Pencil icon"
                  width="35"
                  height="35"
                />
              </Media>
            </ButtonIcon>
            <ButtonText textcolor="white"> Log Hours</ButtonText>
          </LogButton>
          {/** Button for "See History" */}
          <LogButton
            backgroundcolor="#e3e3e3;"
            onClick={() => (window.location.href = '/volunteerHistory')}>
            <ButtonIcon>
              <Media greaterThanOrEqual="sm">
                <Image
                  src="/volunteer/history-clock.png"
                  alt="Clock with arrow icon"
                  width="50"
                  height="50"
                />
              </Media>
              <Media lessThan="sm">
                <Image
                  src="/volunteer/history-clock-mobile.svg"
                  alt="Clock with arrow icon"
                  width="35"
                  height="35"
                />
              </Media>
            </ButtonIcon>
            <ButtonText textcolor="black"> See History</ButtonText>
          </LogButton>
        </VolunteerButtonsContainer>

        {/** Volunteer stats */}
        <VolunteerStatsContainer>
          <StatsFlex>
            <FlexChild>
              <StatsNumber>{userData.hoursVolunteered}</StatsNumber>
              <StatsDescription>Hours volunteered</StatsDescription>
            </FlexChild>

            <FlexChild>
              <StatsNumber>{userData.booksDistributed}</StatsNumber>
              <StatsDescription>Books distributed</StatsDescription>
            </FlexChild>

            <FlexChild>
              <StatsNumber>{userData.eventsAssisted}</StatsNumber>
              <StatsDescription>Events assisted</StatsDescription>
            </FlexChild>
          </StatsFlex>
        </VolunteerStatsContainer>
      </DashboardContainer>
      <FutureVolunteerEvents />
    </>
  );
};

export default VolunteerDashboard;
