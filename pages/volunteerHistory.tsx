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
  margin-left: 100px;
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

const Icon = styled(Image)`
  position: absolute;
  margin-left: 30px;
  margin-top: 45px;
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
      <Link href="/volunteer">
        <Icon src="/back-arrow.png" alt="Go Back" width="40" height="40" />
      </Link>
      <Header>Volunteer History</Header>
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
