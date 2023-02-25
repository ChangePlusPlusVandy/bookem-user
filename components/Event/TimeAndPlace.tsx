import { convertToDate, getTime } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
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
const TimeAndPlace = ({ programDate }: { programDate: Date }) => {
  const iconWidth = 50;
  const iconHeight = 50;

  programDate = new Date(programDate.toLocaleString());

  /**
   * List of icon params
   */
  const iconParamList: IconParams[] = [
    {
      src: '/event/calendar.png',
      text: convertToDate(programDate),
    },
    {
      src: '/event/clock.png',
      text: getTime(programDate),
    },
    {
      src: '/event/map-pin.png',
      text: '3593 Cedar Rd. Nashville',
    },
  ];

  return (
    <TimeAndPlaceBox>
      {/* Iterate through iconParamList to produce a list of icon + text */}
      {iconParamList.map(iconParam => {
        return (
          <IconBox key={iconParam.src}>
            <Icon
              src={iconParam.src}
              alt=""
              width={iconWidth}
              height={iconHeight}></Icon>
            <IconText>{iconParam.text}</IconText>
          </IconBox>
        );
      })}
    </TimeAndPlaceBox>
  );
};

export default TimeAndPlace;
