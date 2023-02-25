import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React from 'react';
import Header from './Header';
import BookIcon from './BookIcon';
import ProgramName from './ProgramName';
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
const Event = ({ event }: { event: QueriedVolunteerProgramData }) => {
  return (
    <EventBox>
      <Header />

      {/* Book Icon and Program name */}
      <MiddleBox>
        <BookIcon />
        <ProgramName program={event} />
      </MiddleBox>

      {/* Time and Place of the program */}
      <TimeAndPlace programDate={event.programDate} />

      {/* Program Description and Contact Info */}
      <BottomBox>
        <About description={event.description} />
        <Contact />
      </BottomBox>
    </EventBox>
  );
};

export default Event;
