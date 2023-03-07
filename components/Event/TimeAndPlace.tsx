import { convertToDate, getTime } from '@/utils/utils';
import React, { useEffect, useState } from 'react';
import {
  TimeAndPlaceBox,
  Icon,
  IconBox,
  IconText,
} from '@/styles/components/Event/timeAndPlace.styles';

/**
 * Parameter of each icon + text box
 * @src src for the icon image
 * @text text associated with that icon
 */
interface IconParams {
  src: string;
  text: string;
}

/**
 * Contain Program's date and location
 * @param programDate
 */
const TimeAndPlace = ({
  programDate,
  location,
}: {
  programDate: Date;
  location: string;
}) => {
  /**
   * List of icon params
   */
  const iconParamList: IconParams[] = [
    {
      src: '/event/calendar.png',
      text: convertToDate(programDate.toString()),
    },
    {
      src: '/event/clock.png',
      text: getTime(programDate.toString()),
    },
    {
      src: '/event/map-pin.png',
      text: location,
    },
  ];

  return (
    <TimeAndPlaceBox>
      {/* Iterate through iconParamList to produce a list of icon + text */}
      {iconParamList.map(iconParam => {
        return (
          <IconBox key={iconParam.src}>
            <Icon src={iconParam.src} alt="" width={50} height={50} />
            <IconText>{iconParam.text}</IconText>
          </IconBox>
        );
      })}
    </TimeAndPlaceBox>
  );
};

export default TimeAndPlace;
