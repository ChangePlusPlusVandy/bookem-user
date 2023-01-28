import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import BookIcon from './BookIcon';
import ProgramName from './ProgramName';
import TimeAndPlace from './TimeAndPlace';
import About from './About';
import Contact from './Contact';

/**
 * Contain everything
 */
const EventBox = styled.div`
  // background-color: pink;
  width: 100%;
  padding: 82px 80px 80px 66.5px;
`;

/**
 * Contains the book icon and the program name info
 */
const MiddleBox = styled.div`
  display: flex;
  margin-top: 62px;
  // background-color: #e4ebf7;
`;

/**
 * Contain About and Contact info
 */
const BottomBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 51px;
`;

/**
 * Event Detail
 * @param event Data about the event
 */
const Event = ({ event }: { event: QueriedVolunteerProgramData }) => {
  return (
    <>
      <EventBox>
        <Header />

        {/* Book Icon and Program name */}
        <MiddleBox>
          <BookIcon />
          <ProgramName programName={event.name} />
        </MiddleBox>

        {/* Time and Place of the program */}
        <TimeAndPlace programDate={event.programDate} />

        {/* Program Description and Contact Info */}
        <BottomBox>
          <About description={event.description} />
          <Contact />
        </BottomBox>
      </EventBox>
    </>
  );
};

export default Event;
