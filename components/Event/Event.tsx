import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import React from 'react';
import Header from './Header';
import BookIcon from './BookIcon';
import EventName from './EventName';
import TimeAndPlace from './TimeAndPlace';
import About from './About';
import Contact from './Contact';
import {
  EventBox,
  MiddleBox,
  BottomBox,
} from '@/styles/components/Event/event.styles';

/**
 * Event Detail
 * @param event Data about the event
 */
const Event = ({ event }: { event: QueriedVolunteerEventData }) => {
  return (
    <EventBox>
      <Header />

      {/* Book Icon and Event name */}
      <MiddleBox>
        <BookIcon />
        <EventName event={event} />
      </MiddleBox>

      {/* Time and Place of the event */}
      <TimeAndPlace eventDate={event.startDate} location={event.location} />

      {/* Event Description and Contact Info */}
      <BottomBox>
        <About description={event.description} />
        <Contact phone={event.phone} email={event.email} />
      </BottomBox>
    </EventBox>
  );
};

export default Event;
