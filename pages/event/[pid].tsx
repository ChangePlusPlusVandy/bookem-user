import { BookIcon } from '@/components/Event/BookIcon';
import React from 'react';
import styled from 'styled-components';

const EventBox = styled.div`
  background-color: pink;
  width: 100%;
  height: 100vh;
  padding: 82px 80px 80px 66.5px;
`;

const EventDetail = () => {
  return (
    <>
      <EventBox>
        <BookIcon />
      </EventBox>
    </>
  );
};

export default EventDetail;
