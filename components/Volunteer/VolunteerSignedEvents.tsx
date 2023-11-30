import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventCard from '@/components/shared/EventCard';
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import { fetchData } from '@/utils/utils';
import LongEventCard from '../shared/LongEventCard';
import { MainContainer } from '@/styles/volunteerHistory.styles';

/**
 * Container for all event cards
 */
const Container = styled.div`
  background: ${props => props.theme.colors.BOOKEM_LIGHT_GRAY};
  padding: 0px;
  border-radius: 10px;
  white-space: nowrap;
  overflow-x: auto;
  display: flex;

  @media (max-width: 767px) {
    padding: 0px;
  }
`;

/**
 * format horizontal upcoming event scroll bar on home page
 */
const VolunteerSignedEvents = ({
  selectedEvent,
  setSelectedEvent,
}: {
  selectedEvent: QueriedVolunteerEventData | undefined;
  setSelectedEvent: React.Dispatch<
    React.SetStateAction<QueriedVolunteerEventData | undefined>
  >;
}) => {
  const [events, setEvents] = useState<QueriedVolunteerEventData[]>();
  const [error, setError] = useState<Error>();

  const handleEventClick = (event: QueriedVolunteerEventData) => {
    // Update the selected event when an event is clicked
    setSelectedEvent(event);
  };

  // Fetch upcoming events when rendered
  useEffect(() => {
    fetchData('/api/events/user')
      .then(data => setEvents(data))
      .catch(err => setError(err));
  }, []);
  return (
    <>
      {/* TODO: render 404 page */}
      {error && <>404 Event not found!</>}
      {!events && !error && <div>Loading...</div>}
      {events && (
        <MainContainer>
          {/* Loop through each VolunteerEvent specific to that user */}
          {events.map(event => (
            <LongEventCard
              eventData={event}
              key={event._id.toString()}
              isSelected={selectedEvent === event}
              onClick={() => handleEventClick(event)}
            />
          ))}
        </MainContainer>
      )}
    </>
  );
};

export default VolunteerSignedEvents;
