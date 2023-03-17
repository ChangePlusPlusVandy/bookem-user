import React from 'react';
import Image from 'next/image';
import {
  EventImage,
  Name,
  AddressContainer,
  AddressIcon,
  InfoContainer,
  Description,
  ClockIcon,
  Address,
  CalendarIcon,
  CheckmarkIcon,
  Container,
} from '@/styles/components/longEventCard.styles';

/**
 * Helper function to format the time into a readable AM/PM format.
 *
 * Takes in an unformatted time and returns a formatted one.
 */
const formatAMPM = (date: { getHours: () => any; getMinutes: () => any }) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

// this component takes in and displays all of an event's data
const LongEventCard = ({
  eventData,
}: {
  // TODO: change type of eventData
  eventData: any;
}) => {
  // create a date object with JavaScript's Date constructor
  const date = new Date(eventData.programDate);

  return (
    <Container>
      <EventImage>
        <Image
          src="/eventCard/event-image.png"
          alt="Event image icon"
          width={`${Math.round((300 / 328) * 53)}`}
          height={`${Math.round((300 / 328) * 53)}`}
        />
      </EventImage>
      <Name>{eventData.name}</Name>

      <AddressContainer>
        <AddressIcon>
          <Image
            src="/eventCard/map.png"
            alt="Map icon"
            width={`${Math.round((300 / 328) * 21)}`}
            height={`${Math.round((300 / 328) * 23.99)}`}
          />
        </AddressIcon>
        <Address>{eventData.school}</Address>
      </AddressContainer>

      <InfoContainer>
        <CalendarIcon>
          <Image
            src="/event/calendar.png"
            alt="Calendar icon"
            width={`${Math.round((300 / 328) * 21)}`}
            height={`${Math.round((300 / 328) * 23.99)}`}
          />
          {/* calls a JavaScript method to format the date into a readable format */}
          <Description>{date.toDateString()}</Description>
        </CalendarIcon>

        <ClockIcon>
          <Image
            src="/event/clock.png"
            alt="Clock icon"
            width={`${Math.round((300 / 328) * 21.27)}`}
            height={`${Math.round((300 / 328) * 22.14)}`}
          />
          <Description>{formatAMPM(date)}</Description>
        </ClockIcon>

        <CheckmarkIcon>
          <Image
            src="/eventCard/checkmark.png"
            alt="Checkmark icon"
            width={`${Math.round((300 / 328) * 21)}`}
            height={`${Math.round((300 / 328) * 23.99)}`}
          />
          <Description>
            {/* TODO: add data for number of books distributed*/}X books
            distributed
          </Description>
        </CheckmarkIcon>
      </InfoContainer>
    </Container>
  );
};

export default LongEventCard;
