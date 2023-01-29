import React, { useState } from 'react';
import { PopupWindow } from '../PopupWindow';
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
  PastActivityButton,
  VolunteerButtonsContainer,
  VolunteerButtonsFlex,
  VolunteerStatsContainer,
} from '@/styles/volunteerDashboard.styles';
import LeftDisplay from '../LeftDisplay';

const VolunteerDashboard = ({ userData }: any) => {
  const [showPopup, setShowPopup] = useState(false);

  function handleShowPopup() {
    setShowPopup(true);
  }

  function hidePopup() {
    setShowPopup(false);
  }

  return (
    <>
      <DashboardContainer>
        {showPopup ? (
          <PopupWindow hidePopup={hidePopup}>
            {/* insert popup content instead of LeftDisplay */}
            <LeftDisplay></LeftDisplay>
          </PopupWindow>
        ) : null}
        <GreetingContainer>
          <Greeting>Volunteer</Greeting>
        </GreetingContainer>

        <VolunteerButtonsContainer>
          <VolunteerButtonsFlex>
            <FlexChild>
              <LogButton onClick={handleShowPopup}>Log hours</LogButton>
            </FlexChild>
            <FlexChild>
              <PastActivityButton>See past activity</PastActivityButton>
            </FlexChild>
          </VolunteerButtonsFlex>
        </VolunteerButtonsContainer>

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
