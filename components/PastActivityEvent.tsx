import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// a single past event

const EventContainter = styled.div`
  background-color: white;
  height: 8em;
  width: 13em;
  margin-top: 20px;
  margin-left: -34px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const EventImage = styled.div`
  margin: auto;
  margin-top: 15px;
`;

const EventText = styled.p`
  margin: auto;
  margin-bottom: 10px;
`;

const PastActivityEvent = () => {
  return (
    <EventContainter>
      <EventImage>
        <Image
          src="/filler-icon.png"
          alt="Event picture"
          width="60"
          height="60"
        />
      </EventImage>
      <EventText>Event Name</EventText>
      <EventText>Event Description</EventText>
    </EventContainter>
  );
};

export default PastActivityEvent;
