import React, { useState } from 'react';
import { PopupWindow } from '@/components/PopupWindow';
import FutureVolunteerEvents from '@/components/Volunteer/FutureVolunteerEvents';
import Image from 'next/image';
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
  ButtonIcon as ButtonIcon,
  VolunteerButtonsContainer,
  VolunteerStatsContainer,
} from '@/styles/volunteerDashboard.styles';
import WindowFlow from '@/components/WindowFlow';

const VolunteerDashboard = ({ userData }: any) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <DashboardContainer>
        {showPopup && (
          <PopupWindow hidePopup={() => setShowPopup(false)}>
            <WindowFlow pages={['Event', 'Program', 'Numbers', 'Comments']}>
              {/* TODO: add children for Log Hours */}
              Add forms below
            </WindowFlow>
          </PopupWindow>
        )}
        <GreetingContainer>
          <Greeting>Volunteer</Greeting>
        </GreetingContainer>

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
          <HistoryButton>
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
