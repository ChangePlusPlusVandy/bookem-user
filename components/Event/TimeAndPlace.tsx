import { convertToDate, getTime } from '@/utils/utils';
import React from 'react';
import Image from 'next/image';
import {
  TimeAndPlaceBox,
  IconBox,
  IconText,
} from '@/styles/components/Event/timeAndPlace.styles';
import { VolunteerEventLocation } from 'bookem-shared/src/types/database';
import { convertLocationToString } from 'bookem-shared/src/utils/utils';
import { Media } from '@/lib/media';

/**
 * Contain Event's date and location
 * @param eventDate
 */
const TimeAndPlace = ({
  eventDate,
  location,
}: {
  eventDate: Date;
  location: VolunteerEventLocation;
}) => {
  return (
    <>
      <Media greaterThanOrEqual="sm">
        <TimeAndPlaceBox>
          {/* Calendar */}
          <IconBox>
            <Image src={'/event/calendar.svg'} alt="" width={50} height={50} />
            <IconText>{convertToDate(eventDate.toString())}</IconText>
          </IconBox>

          {/* Clock */}
          <IconBox>
            <Image src={'/event/clock.svg'} alt="" width={50} height={50} />
            <IconText>{getTime(eventDate.toString())}</IconText>
          </IconBox>

          {/* Location */}
          <IconBox>
            <Image src={'/event/map-pin.svg'} alt="" width={50} height={50} />
            <IconText>{location.street}</IconText>
          </IconBox>
        </TimeAndPlaceBox>
      </Media>
      <Media lessThan="sm">
        <TimeAndPlaceBox>
          {/* Calendar */}
          <IconBox>
            <Image src={'/event/calendar.svg'} alt="" width={40} height={40} />
            <IconText>{convertToDate(eventDate.toString())}</IconText>
          </IconBox>

          {/* Clock */}
          <IconBox>
            <Image src={'/event/clock.svg'} alt="" width={40} height={40} />
            <IconText>{getTime(eventDate.toString())}</IconText>
          </IconBox>
        </TimeAndPlaceBox>
        {/* Location */}
        <IconBox>
          <Image src={'/event/map-pin.svg'} alt="" width={40} height={40} />
          <IconText>{convertLocationToString(location)}</IconText>
        </IconBox>
      </Media>
    </>
  );
};

export default TimeAndPlace;
