import LongEventCard from '@/components/shared/LongEventCard';
import React from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { VolunteerProgramData } from 'bookem-shared/src/types/database';
import {
  HeaderContainer,
  Header,
  Description,
  MainContainer,
  IconLink,
} from '@/styles/volunteerHistory.styles';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const VolunteerHistoryPage = () => {
  // get data from the volunteerPrograms API using SWR
  const { data, error, isLoading } = useSWR<VolunteerProgramData[]>(
    '/api/volunteerPrograms/',
    fetcher
  );

  // check for errors, loading, no data
  if (error) return <div>Failed to load volunteer history</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <></>;

  return (
    <>
      <HeaderContainer>
        <IconLink href="/volunteer">
          <Image
            src="/event/arrow-left.png"
            alt="Go Back"
            width="40"
            height="40"
          />
        </IconLink>
        <Header>Volunteer History</Header>
      </HeaderContainer>
      <Description>Click on event to see specific details</Description>
      <MainContainer>
        {/* Loop through each volunteerProgram specific to that user */}
        {data.map(event => (
          // for each event, create a new LongEventCard component and pass in all that event's info
          <LongEventCard
            key={event.name}
            eventData={{
              name: event.name,
              school: event.schools,
              programDate: event.programDate,
            }}
          />
        ))}
      </MainContainer>
    </>
  );
};

export default VolunteerHistoryPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
