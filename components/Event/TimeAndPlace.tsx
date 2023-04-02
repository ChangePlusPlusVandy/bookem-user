import { convertToDate, getTime } from '@/utils/utils';
import React from 'react';
import Image from 'next/image';
import {
  TimeAndPlaceBox,
  IconBox,
  IconText,
} from '@/styles/components/Event/timeAndPlace.styles';
import { VolunteerProgramLocation } from 'bookem-shared/src/types/database';

/**
 * Helper function to convert location to string
 * @param location The location of the program
 * @returns The location in string format
 */
const convertLocationToString = (location: VolunteerProgramLocation) => {
  return `${location.street} ${location.city}, ${location.state} ${location.zip}`;
};

/**
 * Contain Program's date and location
 * @param programDate
 */
const TimeAndPlace = ({
  programDate,
  location,
}: {
  programDate: Date;
  location: VolunteerProgramLocation;
}) => {
  return (
    <TimeAndPlaceBox>
      {/* Calendar */}
      <IconBox>
        <Image src={'/event/calendar.png'} alt="" width={50} height={50} />
        <IconText>{convertToDate(programDate.toString())}</IconText>
      </IconBox>

      {/* Clock */}
      <IconBox>
        <Image src={'/event/clock.png'} alt="" width={50} height={50} />
        <IconText>{getTime(programDate.toString())}</IconText>
      </IconBox>

      {/* Location */}
      <IconBox>
        <Image src={'/event/map-pin.png'} alt="" width={50} height={50} />
        <IconText>{convertLocationToString(location)}</IconText>
      </IconBox>
    </TimeAndPlaceBox>
  );
};

export default TimeAndPlace;
