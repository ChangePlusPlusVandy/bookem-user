import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface RatioProp {
  ratio: number;
}

type EventType = {
  source: string;
  name: string;
  location: string;
  date: Date;
  time: string;
  availability: number;
  id: number;
};

const Container = styled.div<RatioProp>`
  background-color: white;
  max-width: 300px;
  height: ${props => props.ratio * 350}px;
  border-radius: 10px;
  padding: ${props => props.ratio * 17}px;
  margin: ${props => props.ratio * 17}px;
  border: 1px solid black;
`;

const EventImage = styled.div<RatioProp>`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.ratio * 17}px;
`;

const Name = styled.div<RatioProp>`
  background-color: white;
  margin-top: ${props => props.ratio * 29}px;
  height: ${props => props.ratio * 40.45}px;
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.ratio * 18}px;
  line-height: ${props => props.ratio * 22}px;
`;

const AddressContainer = styled.div<RatioProp>`
  height: fit-content;
  margin-top: ${props => props.ratio * 13}px;
  background-color: white;
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.ratio * 18}px;
  line-height: ${props => props.ratio * 22}px;
`;

const AddressIcon = styled.div`
  float: left;
  margin-right: 8px;
`;

const InfoContainer = styled.div<RatioProp>`
  height: fit-content;
  margin-top: ${props => props.ratio * 13}px;
  background-color: white;
`;

const ClockIcon = styled.div`
  float: left;
  margin-right: 8px;
`;

const InfoFlex = styled.div`
  height: fit-content;
  background-color: white;
  display: flex;
  gap: 5px;
  justify-content: space-between;
`;

const InfoFlexChild = styled.div<RatioProp>`
  background-color: white;
  flex: 0 1 auto;
  text-align: center;
  vertical-align: middle;
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.ratio * 18}px;
  line-height: ${props => props.ratio * 22}px;
`;

const sizeMap = new Map<string, number>([
  ['large', 328 / 328],
  ['medium', 300 / 328],
  ['small', 250 / 328],
]);

const toRatio = (size: string): number => {
  let ratio = sizeMap.get(size);
  if (ratio !== undefined) return ratio;
  else return 1;
};

function convertToDate(date: Date) {
  return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
}

function getTime(date: Date) {
  var ampm: String = 'AM';
  var hours: Number;

  if (date.getHours() == 0) {
    hours = 12;
  } else {
    if (date.getHours() > 12) {
      ampm = 'PM';
      hours = date.getHours() - 12;
    } else {
      hours = date.getHours();
    }
  }

  return hours + ':' + date.getMinutes().toString() + ' ' + ampm;
}

const EventCard = ({
  eventData,
  size,
}: {
  // TODO: change type of eventData
  eventData: EventType;
  size: 'large' | 'medium' | 'small';
}) => {
  const eventDate = new Date(eventData.date);
  const ratio = toRatio(size);
  return (
    <Container ratio={ratio}>
      <EventImage ratio={ratio}>
        <Image
          src="/event-image.png"
          alt="Event image icon"
          width={`${Math.round(ratio * 138)}`}
          height={`${Math.round(ratio * 138)}`}
        />
      </EventImage>
      <Name ratio={ratio}>{eventData.name}</Name>

      <AddressContainer ratio={ratio}>
        <AddressIcon>
          <Image
            src="/map.png"
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
            src="/dateicon.png"
            alt="Clock icon"
            width={`${Math.round(ratio * 21.27)}`}
            height={`${Math.round(ratio * 22.14)}`}
          />
        </ClockIcon>

        <InfoFlex>
          <InfoFlexChild ratio={ratio}>
            {convertToDate(eventDate) + ' ' + getTime(eventDate)}
          </InfoFlexChild>
          {/* <InfoFlexChild ratio={ratio}>{eventData.time}</InfoFlexChild> */}
          <InfoFlexChild ratio={ratio}>
            {eventData.availability} spots
          </InfoFlexChild>
        </InfoFlex>
      </InfoContainer>
    </Container>
  );
};

export default EventCard;
