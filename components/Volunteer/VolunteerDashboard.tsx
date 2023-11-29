import React, { useState } from 'react';
import Image from 'next/image';
import FutureVolunteerEvents from '@/components/Volunteer/FutureVolunteerEvents';
import {
  Greeting,
  StatsFlex,
  FlexChild,
  StatsNumber,
  StatsDescription,
} from '@/styles/dashboard.styles';
import {
  DashboardContainer,
  VolunteerButton,
  ButtonIcon,
  VolunteerButtonsContainer,
  VolunteerStatsContainer,
  ButtonText,
} from '@/styles/volunteerDashboard.styles';
import LogHoursPopupWindowForm from '@/components/Forms/LogHoursPopupWindowForm';
import { Media } from '@/lib/media';
import { BOOKEM_THEME } from '@/utils/constants';
import { QueriedUserData } from 'bookem-shared/src/types/database';
import { formatDate } from '@/utils/utils';

const VolunteerDashboard = ({
  userData,
}: {
  userData: QueriedUserData | null;
}) => {
  // set pop up window to false
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <DashboardContainer>
        {/* based on whether or not hideppopup is true, displays popup */}
        {showPopup && <LogHoursPopupWindowForm setShowPopup={setShowPopup} />}

        <Greeting>Volunteer</Greeting>

        {/** Button for "Log Hours" and opens popup if clicked */}
        <VolunteerButtonsContainer>
          <VolunteerButton
            backgroundcolor={BOOKEM_THEME.colors.BOOKEM_RED}
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
            <ButtonText textcolor="white">Log hours</ButtonText>
          </VolunteerButton>
          {/** Button for "See History" */}
          <VolunteerButton
            backgroundcolor={BOOKEM_THEME.colors.BOOKEM_LIGHT_GRAY}
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
          </VolunteerButton>
        </VolunteerButtonsContainer>

        {/** Volunteer stats */}
        <VolunteerStatsContainer>
          <StatsFlex>
            <FlexChild>
              <StatsNumber>{userData?.events.length}</StatsNumber>
              <StatsDescription>Events signed up</StatsDescription>
            </FlexChild>

            <FlexChild>
              <StatsNumber>
                {formatDate(new Date(userData?.createdAt as Date))}
              </StatsNumber>
              <StatsDescription>Date joined</StatsDescription>
            </FlexChild>
          </StatsFlex>
        </VolunteerStatsContainer>
      </DashboardContainer>
      <FutureVolunteerEvents />
    </>
  );
};

export default VolunteerDashboard;
