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
  ButtonIcon,
  VolunteerButtonsContainer,
  VolunteerButtonsFlex,
  VolunteerStatsContainer,
} from '@/styles/volunteerDashboard.styles';
import LeftDisplay from '@/components/LeftDisplay';

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
              <LogButton>
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
            </FlexChild>
            <FlexChild>
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
