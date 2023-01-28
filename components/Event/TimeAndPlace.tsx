import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const TimeAndPlaceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-top: 20px;
  // background-color: #faffdb;
`;

/**
 * Contains the Icon + text
 */
const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(Image)``;

const IconText = styled.span`
  margin-left: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 22px;
`;

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

  /**
   * List of icon params
   */
  const iconParamList: IconParams[] = [
    {
      src: '/event/calendar.png',
      text: programDate.toLocaleString('default', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      }),
    },
    {
      src: '/event/clock.png',
      text: programDate.getHours() + ':' + programDate.getMinutes(),
    },
    {
      src: '/event/map-pin.png',
      text: '',
    },
  ];
  return (
    <>
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
    </>
  );
};

export default TimeAndPlace;
