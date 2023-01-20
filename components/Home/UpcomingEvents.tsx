import React from 'react';
import EventCard from '../EventCard';
import styled from 'styled-components';

const eventData = {
  name: 'Distribute books (BNFK)',
  address: '3593 Cedar Rd. Nashville',
  date: '11/25',
  time: '9:30 AM',
  numSpots: 11,
};

const Container = styled.div`
  height: fit-content;
  width: 100%;
  background: #d9d9d9;
  padding: 35px;
  border-radius: 10px;
  white-space: nowrap;
  overflow-x: auto;
`;

const Events = styled.div`
  display: inline-block;
`;

const UpcomingEvents = () => {
  return (
    <Container>
      {[...Array(10)].map((_, i) => (
        // TODO: iterate through real data instead of dummy data
        <Events>
          <EventCard eventData={eventData} size={'large'} key={i} />
        </Events>
      ))}
    </Container>
  );
};

export default UpcomingEvents;
