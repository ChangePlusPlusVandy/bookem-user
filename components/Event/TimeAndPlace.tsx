import { convertToDate, getTime } from '@/utils/utils';
import React from 'react';
import Image from 'next/image';
import {
  TimeAndPlaceBox,
  IconBox,
  IconText,
} from '@/styles/components/Event/timeAndPlace.styles';
import { VolunteerProgramLocation } from 'bookem-shared/src/types/database';
import { convertLocationToString } from 'bookem-shared/src/utils/utils';

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
    <>
      <Media greaterThanOrEqual="sm">
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
            <IconText>{location.street}</IconText>
          </IconBox>
        </TimeAndPlaceBox>
      </Media>
      <Media lessThan="sm">
        <TimeAndPlaceBox>
          {/* Calendar */}
          <IconBox>
            <Image src={'/event/calendar.png'} alt="" width={40} height={40} />
            <IconText>{convertToDate(programDate.toString())}</IconText>
          </IconBox>

          {/* Clock */}
          <IconBox>
            <Image src={'/event/clock.png'} alt="" width={40} height={40} />
            <IconText>{getTime(programDate.toString())}</IconText>
          </IconBox>
        </TimeAndPlaceBox>
        {/* Location */}
        <IconBox>
          <Image src={'/event/map-pin.png'} alt="" width={40} height={40} />
          <IconText>{location.street}</IconText>
        </IconBox>
      </Media>
    </>
  );
};

export default TimeAndPlace;
