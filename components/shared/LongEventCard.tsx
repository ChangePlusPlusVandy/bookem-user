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
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import { convertLocationToString } from 'bookem-shared/src/utils/utils';
import { formatAMPM } from '@/utils/utils';

// this component takes in and displays all of an event's data
const LongEventCard = ({
  eventData,
}: {
  eventData: QueriedVolunteerEventData;
}) => {
  // create a date object with JavaScript's Date constructor
  const date = new Date(eventData.startDate);

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
        <Address>{convertLocationToString(eventData.location)}</Address>
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
