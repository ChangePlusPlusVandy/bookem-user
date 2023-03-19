import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventCard from '@/components/EventCard';
import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import mongoose from 'mongoose';

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
  useEffect(() => {
    fetch('/api/events/upcoming')
      .then(res => {
        if (!res.ok) {
          throw new Error(
            'An error has occurred while fetching: ' + res.statusText
          );
        }
        return res.json();
      })
      .then(data => setEvents(data))
      .catch(err => setError(err));
  }, []);
  return (
    <>
      {error && <>404 Event not found!</>}
      {!events && !error && <div>Loading...</div>}
      {events && (
        <Container>
          {events.map(event => (
            // TODO: iterate through real data instead of dummy data
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
