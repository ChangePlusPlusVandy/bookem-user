import LongEventCard from '@/components/shared/LongEventCard';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import {
  HeaderContainer,
  Header,
  Description,
  MainContainer,
  IconLink,
} from '@/styles/volunteerHistory.styles';
import { fetchData } from '@/utils/utils';
import Link from 'next/link';

const VolunteerHistoryPage = () => {
  const [events, setEvents] = useState<QueriedVolunteerEventData[]>();
  const [error, setError] = useState<Error>();
  // Fetch volunteer history events when rendered
  useEffect(() => {
    fetchData('/api/events/history')
      .then(data => setEvents(data))
      .catch(err => setError(err));
  }, []);

  // check for errors, loading, no data
  if (error) return <>404 Event not found!</>;
  if (!events && !error) return <div>Loading...</div>;
  if (!events) return <></>;

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
        {/* Loop through each VolunteerEvent specific to that user */}
        {events.map(event => (
          // for each event, create a new LongEventCard component and pass in all that event's info
          <Link key={event._id.toString()} href={'/event/' + event._id}>
            <LongEventCard eventData={event} />
          </Link>
        ))}
      </MainContainer>
    </>
  );
};

export default VolunteerHistoryPage;

// perform automatic redirection to login page if user not logged in.
export { getServerSideProps } from '@/lib/getServerSideProps';
