import LongEventCard from '@/components/LongEventCard';
import React from 'react';
import styled from 'styled-components';
import { dummyEventData } from '@/components/Home/UpcomingEvents';
import Image from 'next/image';
import Link from 'next/link';

const Header = styled.h2`
  font-family: 'Inter';
  font-size: 25px;
  margin-top: 50px;
  font-weight: 400;
`;

const Description = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-left: 35px;
`;

const IconLink = styled(Link)`
  margin-top: 35px;
  margin-right: 10px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;

const MainContainer = styled.div`
  height: 639px;
  width: 1150px;
  margin-top: 50px;
  margin: auto;
  background-color: #d9d9d9;
  border-radius: 10px;
  overflow-y: auto;
  padding: 10px;
  overflow-x: hidden;
`;

const VolunteerHistoryPage = () => {
  return (
    <>
      <HeaderContainer>
        <IconLink href="/volunteer">
          <Image src="/back-arrow.png" alt="Go Back" width="40" height="40" />
        </IconLink>
        <Header>Volunteer History</Header>
      </HeaderContainer>
      <Description>Click on event to see specific details</Description>
      <MainContainer>
        {/* TODO: replace dummy data with actual data from backend */}
        <LongEventCard eventData={dummyEventData} size="medium"></LongEventCard>
        <LongEventCard eventData={dummyEventData} size="medium"></LongEventCard>
        <LongEventCard eventData={dummyEventData} size="medium"></LongEventCard>
        <LongEventCard eventData={dummyEventData} size="medium"></LongEventCard>
        <LongEventCard eventData={dummyEventData} size="medium"></LongEventCard>
        <LongEventCard eventData={dummyEventData} size="medium"></LongEventCard>
        <LongEventCard eventData={dummyEventData} size="medium"></LongEventCard>
        <LongEventCard eventData={dummyEventData} size="medium"></LongEventCard>
      </MainContainer>
    </>
  );
};

export default VolunteerHistoryPage;
