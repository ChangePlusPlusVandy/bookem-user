import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React, { useState } from 'react';
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
  AboutButton,
} from '@/styles/components/Event/event.styles';
import { Media } from '@/lib/media';

/**
 * Event Detail
 * @param event Data about the event
 */
const Event = ({ event }: { event: QueriedVolunteerProgramData }) => {
  const [showAbout, setShowAbout] = useState<boolean>(true);
  return (
    <EventBox>
      <Header />

      {/* Book Icon and Program name */}
      <MiddleBox>
        <BookIcon />
        <ProgramName program={event} />
      </MiddleBox>

      {/* Time and Place of the program */}
      <TimeAndPlace programDate={event.programDate} location={event.location} />

      {/* Program Description and Contact Info */}
      <Media greaterThanOrEqual="sm">
        <BottomBox>
          <About description={event.description} />
          <Contact phone={event.phone} email={event.email} />
        </BottomBox>
      </Media>
      <Media lessThan="sm">
        <BottomBox>
          <AboutButton>About</AboutButton>
          <About description={event.description} />
          <Contact phone={event.phone} email={event.email} />
        </BottomBox>
      </Media>
    </EventBox>
  );
};

export default Event;
