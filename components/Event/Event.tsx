import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import BookIcon from './BookIcon';
import ProgramName from './ProgramName';
import TimeAndPlace from './TimeAndPlace';

const EventBox = styled.div`
  background-color: pink;
  width: 100%;
  height: 100vh;
  padding: 82px 80px 80px 66.5px;
`;
const MiddleBox = styled.div`
  display: flex;
  margin-top: 62px;
  background-color: #e4ebf7;
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
      </EventBox>
    </>
  );
};

export default Event;
