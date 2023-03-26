import React from 'react';
import Image from 'next/image';
import { convertToDate, getTime } from '@/utils/utils';
import Link from 'next/link';
import {
  AddressContainer,
  AddressIcon,
  ClockIcon,
  Container,
  EventImage,
  InfoContainer,
  InfoFlex,
  InfoFlexChild,
  Name,
} from '@/styles/components/eventCard.styles';
import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';

// EventCard specific implementation of sizeMap
const sizeMap = new Map<string, number>([
  ['large', 328 / 328],
  ['medium', 300 / 328],
  ['small', 250 / 328],
]);

// helper method for converting size to its corresponding ratio
const toRatio = (size: 'large' | 'medium' | 'small'): number => {
  let ratio = sizeMap.get(size);
  if (ratio !== undefined) return ratio;
  else return 1;
};

const EventCard = ({
  eventData,
  size,
  href,
}: {
  // Volunteer program data
  eventData: QueriedVolunteerProgramData;
  // specify the size of the EventCard
  size: 'large' | 'medium' | 'small';
  // the link to redirect to when the EventCard is clicked
  href?: string | undefined;
}) => {
  // get ratio based on size to be used in computing distances
  const ratio = toRatio(size);

  return (
    <Container ratio={ratio}>
      <Link href={href || ''}>
        <EventImage ratio={ratio}>
          <Image
            src="/eventCard/event-image.png"
            alt="Event image icon"
            width={`${Math.round(ratio * 138)}`}
            height={`${Math.round(ratio * 138)}`}
          />
        </EventImage>
        <Name ratio={ratio}>{eventData.name}</Name>

        <AddressContainer ratio={ratio}>
          <AddressIcon>
            <Image
              src="/eventCard/map.png"
              alt="Map icon"
              width={`${Math.round(ratio * 21)}`}
              height={`${Math.round(ratio * 23.99)}`}
            />
          </AddressIcon>
          {eventData.location}
        </AddressContainer>

        <InfoContainer ratio={ratio}>
          <ClockIcon>
            <Image
              src="/eventCard/date-icon.png"
              alt="Clock icon"
              width={`${Math.round(ratio * 21.27)}`}
              height={`${Math.round(ratio * 22.14)}`}
            />
          </ClockIcon>

          <InfoFlex>
            <InfoFlexChild ratio={ratio}>
              {convertToDate(eventData.programDate.toString()) +
                ' ' +
                getTime(eventData.programDate.toString())}
            </InfoFlexChild>
            {/* <InfoFlexChild ratio={ratio}>{eventData.time}</InfoFlexChild> */}
            <InfoFlexChild ratio={ratio}>
              {eventData.maxSpot} spots
            </InfoFlexChild>
          </InfoFlex>
        </InfoContainer>
      </Link>
    </Container>
  );
};

export default EventCard;
