import LongEventCard from '@/components/LongEventCard';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { VolunteerProgramData } from 'bookem-shared/src/types/database';

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

const fetcher = (url: string) => fetch(url).then(res => res.json());

const VolunteerHistoryPage = () => {
  const { data, error, isLoading } = useSWR<VolunteerProgramData[]>(
    '/api/volunteerPrograms/',
    fetcher
  );

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

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
        {data.map(event => (
          <LongEventCard
            key={event.name}
            eventData={{
              name: event.name,
              school: event.schools,
              programDate: event.programDate,
            }}></LongEventCard>
        ))}
      </MainContainer>
    </>
  );
};

export default VolunteerHistoryPage;
