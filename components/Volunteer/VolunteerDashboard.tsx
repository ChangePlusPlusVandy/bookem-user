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
  HistoryButton,
  ButtonIcon,
  VolunteerButtonsContainer,
  VolunteerStatsContainer,
} from '@/styles/volunteerDashboard.styles';
import LogHoursPopupWindowForm from '@/components/Forms/LogHoursPopupWindowForm';

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
          <LogButton onClick={() => setShowPopup(true)}>
            <ButtonIcon>
              <Image
                src="/pencil.png"
                alt="Pencil icon"
                width="50"
                height="50"
              />
            </ButtonIcon>
            Log Hours
          </LogButton>
          {/** Button for "See History" */}
          <HistoryButton href="/volunteerHistory">
            <ButtonIcon>
              <Image
                src="/history-clock.png"
                alt="Clock with arrow icon"
                width="50"
                height="50"
              />
            </ButtonIcon>
            See History
          </HistoryButton>
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
