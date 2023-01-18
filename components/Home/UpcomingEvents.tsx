import React from 'react';
import EventCard from '../EventCard';

const eventData = {
  name: 'Distribute books (BNFK)',
  address: '3593 Cedar Rd. Nashville',
  date: '11/25',
  time: '9:30 AM',
  numSpots: 11,
};

const UpcomingEvents = () => {
  return (
    <div>
      Upcoming Events
      <EventCard eventData={eventData} size={'large'} />
    </div>
  );
};

export default UpcomingEvents;
