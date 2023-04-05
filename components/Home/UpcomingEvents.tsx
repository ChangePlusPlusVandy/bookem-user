import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventCard from '@/components/shared/EventCard';
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import { fetchData } from '@/utils/utils';

/**
 * Container for all event cards
 */
const Container = styled.div`
  background: #d9d9d9;
  padding: 35px;
  border-radius: 10px;
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
`;

/**
 * format horizontal upcoming event scroll bar on home page
 */
const UpcomingEvents = () => {
  const [events, setEvents] = useState<QueriedVolunteerEventData[]>();
  const [error, setError] = useState<Error>();
  // Fetch upcoming events when rendered
  useEffect(() => {
    fetchData('/api/event/upcoming')
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
            <EventCard
              key={event._id.toString()}
              eventData={event}
              size={'large'}
              href={'/event/' + event._id}
            />
          ))}
        </Container>
      )}
    </>
  );
};

export default UpcomingEvents;
