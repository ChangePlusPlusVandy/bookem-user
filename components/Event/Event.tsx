import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import BookIcon from './BookIcon';
import ProgramName from './ProgramName';
import TimeAndPlace from './TimeAndPlace';
import About from './About';
import Contact from './Contact';

const EventBox = styled.div`
  background-color: pink;
  width: 100%;
  padding: 82px 80px 80px 66.5px;
`;
const MiddleBox = styled.div`
  display: flex;
  margin-top: 62px;
  background-color: #e4ebf7;
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

const Event = ({ event }: { event: QueriedVolunteerProgramData }) => {
  return (
    <>
      <EventBox>
        <Header />
        <MiddleBox>
          <BookIcon />
          <ProgramName programName={event.name} />
        </MiddleBox>
        <TimeAndPlace programDate={event.programDate} />
        <BottomBox>
          <About description={event.description} />
          <Contact />
        </BottomBox>
      </EventBox>
    </>
  );
};

export default Event;
