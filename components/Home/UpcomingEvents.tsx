import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventCard from '@/components/EventCard';
import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import mongoose from 'mongoose';
import { fetchData } from '@/utils/utils';

/**
 * Dummy data for event cards
 */
export const dummyEventData: QueriedVolunteerProgramData = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Distribute books (BNFK)',
  description: 'blablabla',
  schools: [],
  programDate: new Date('2005-12-17T13:24:00'),
  category: 'RFR',
  isOpen: true,
  volunteers: [],
  maxSpot: 11,
  location: '3593 Cedar Rd. Nashville',
  phone: '123-456-7890',
  email: 'test_user@bookem.com',
  createdAt: new Date(),
  updatedAt: new Date(),
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
  const [events, setEvents] = useState<QueriedVolunteerProgramData[]>();
  const [error, setError] = useState<Error>();
  // Fetch upcoming events when rendered
  useEffect(() => {
    fetchData('/api/events/upcoming')
      .then(data => setEvents(data))
      .catch(err => setError(err));
  }, []);
  return (
    <>
      {/* TODO: render 404 page */}
      {error && <>404 Event not found!</>}
      {!events && !error && <div>Loading...</div>}
      {events && (
        <Container>
          {events.map(event => (
            // Iterate through events to and pass data to EventCard
            <Events key={event._id.toString()}>
              <EventCard eventData={event} size={'large'} />
            </Events>
          ))}
        </Container>
      )}
    </>
  );
};

export default UpcomingEvents;
