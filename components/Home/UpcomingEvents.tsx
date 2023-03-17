import React from 'react';
import styled from 'styled-components';
import EventCard from '@/components/shared/EventCard';

/**
 * Dummy data for event cards
 */
export const dummyEventData = {
  source: '/eventCard/event-image.png',
  name: 'Distribute books (BNFK)',
  location: '3593 Cedar Rd. Nashville',
  date: new Date('2005-12-17T13:24:00'),
  time: '9:30 AM',
  availability: 11,
  id: 0,
};

/**
 * Container for all event cards
 */
const Container = styled.div`
  background: #d9d9d9;
  padding: 35px;
  border-radius: 10px;
  white-space: nowrap;
  overflow-x: auto;
`;

/**
 * Container for each event card
 */
const Events = styled.div`
  display: inline-block;
`;

/**
 * format horizontal upcoming event scroll bar on home page
 */
const UpcomingEvents = () => {
  return (
    <Container>
      {[...Array(10)].map((_, i) => (
        // TODO: iterate through real data instead of dummy data
        <Events key={i}>
          <EventCard eventData={dummyEventData} size={'large'} key={i} />
        </Events>
      ))}
    </Container>
  );
};

export default UpcomingEvents;
