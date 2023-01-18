import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface RatioProp {
  ratio: number;
}

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

const Container = styled.div<RatioProp>`
  background-color: orange;
  width: ${props => props.ratio * 328}px;
  height: ${props => props.ratio * 328}px;
  border-radius: 10px;
  padding: ${props => props.ratio * 17}px;
`;

const EventImage = styled.div<RatioProp>`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.ratio * 17}px;
`;

const Name = styled.div<RatioProp>`
  background-color: pink;
  margin-top: ${props => props.ratio * 29}px;
  height: ${props => props.ratio * 40.45}px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.ratio * 18}px;
  line-height: ${props => props.ratio * 22}px;
`;

const AddressContainer = styled.div<RatioProp>`
  height: fit-content;
  margin-top: ${props => props.ratio * 13}px;
  background-color: lightblue;
  font-family: 'Inter';
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
  background-color: lightgreen;
`;

const ClockIcon = styled.div`
  float: left;
  margin-right: 8px;
`;

const InfoFlex = styled.div`
  height: fit-content;
  background-color: yellow;
  display: flex;
  justify-content: space-between;
`;

const InfoFlexChild = styled.div<RatioProp>`
  flex: 1;
  background-color: violet;
  flex: 0 1 auto;
  text-align: center;
  vertical-align: middle;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.ratio * 18}px;
  line-height: ${props => props.ratio * 22}px;
`;

// TODO: CREATE USERDATA OBJECT

const EventCard: React.FC<{ eventData: any; size: string }> = ({
  eventData,
  size,
}) => (
  <Container ratio={toRatio(size)}>
    <EventImage ratio={toRatio(size)}>
      <Image
        src="/eventImage.png"
        alt="Event image icon"
        width={`${Math.round(toRatio(size) * 138)}`}
        height={`${Math.round(toRatio(size) * 138)}`}
      />
    </EventImage>
    <Name ratio={toRatio(size)}>{eventData.name}</Name>

    <AddressContainer ratio={toRatio(size)}>
      <AddressIcon>
        <Image
          src="/map.png"
          alt="Map icon"
          width={`${Math.round(toRatio(size) * 21)}`}
          height={`${Math.round(toRatio(size) * 23.99)}`}
        />
      </AddressIcon>
      {eventData.address}
    </AddressContainer>

    <InfoContainer ratio={toRatio(size)}>
      <ClockIcon>
        <Image
          src="/clock.png"
          alt="Clock icon"
          width={`${Math.round(toRatio(size) * 21.27)}`}
          height={`${Math.round(toRatio(size) * 22.14)}`}
        />
      </ClockIcon>

      <InfoFlex>
        <InfoFlexChild ratio={toRatio(size)}>{eventData.date}</InfoFlexChild>
        <InfoFlexChild ratio={toRatio(size)}>{eventData.time}</InfoFlexChild>
        <InfoFlexChild ratio={toRatio(size)}>
          {eventData.numSpots} spots
        </InfoFlexChild>
      </InfoFlex>
    </InfoContainer>
  </Container>
);

export default EventCard;
