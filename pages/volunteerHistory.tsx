import LongEventCard from '@/components/LongEventCard';
import React from 'react';
import styled from 'styled-components';
import { dummyEventData } from '../components/Home/UpcomingEvents';
import Image from 'next/image';
import Link from 'next/link';

const Header = styled.h2`
  font-family: 'Inter';
  font-size: 25px;
  margin-top: 50px;
  margin-left: 100px;
  font-weight: 400;
`;

const Icon = styled(Image)`
  position: absolute;
  margin-left: 20px;
  margin-top: 45px;
`;

const IconLink = styled(Link)``;

const MainContainer = styled.div`
  height: 639px;
  width: 1218px;
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
      <IconLink href="/volunteer">
        <Icon src="/back-arrow.png" alt="Go Back" width="40" height="40" />
      </IconLink>
      <Header>Volunteer History</Header>
      <MainContainer>
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
