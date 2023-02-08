import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  background-color: white;
  width: 98.5%;
  height: ${(300 / 328) * 82}px;
  border-radius: 10px;
  padding: ${(300 / 328) * 17}px;
  margin: ${(300 / 328) * 17}px;
  margin-left: ${(300 / 328) * 6}px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`;

const EventImage = styled.div`
  display: flex;
  justify-content: left;
  margin-top: ${300 / 328}px;
  margin-left: ${(300 / 328) * 20}px;
`;

const Name = styled.div`
  background-color: white;
  margin-top: ${(300 / 328) * 16}px;
  margin-left: ${(300 / 328) * 40}px;
  height: ${(300 / 328) * 30}px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: ${(300 / 328) * 18}px;
  line-height: ${(300 / 328) * 22}px;
`;

const AddressContainer = styled.div`
  position: absolute;
  height: fit-content;
  margin-top: ${(300 / 328) * 16}px;
  margin-left: ${(300 / 328) * 300}px;
  background-color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${(300 / 328) * 18}px;
  line-height: ${(300 / 328) * 22}px;
`;

const AddressIcon = styled.div`
  float: left;
  position: absolute;
  margin-left: 50px;
  margin-right: 8px;
`;

const InfoContainer = styled.div`
  position: absolute;
  height: fit-content;
  margin-top: ${(300 / 328) * 16}px;
  margin-left: ${(300 / 328) * 400}px;
  background-color: white;
`;

const ClockIcon = styled.div`
  position: absolute;
  float: left;
  margin-left: 350px;
`;

const CalendarIcon = styled.div`
  float: left;
  margin-left: 150px;
`;

const CheckmarkIcon = styled.div`
  position: absolute;
  float: left;
  margin-left: 520px;
`;

const InfoFlex = styled.div`
  height: fit-content;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const InfoFlexChild = styled.div`
  background-color: white;
  flex: 0 1 auto;
  text-align: center;
  vertical-align: middle;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  margin-left: ${(300 / 328) * 8}px;
  margin-right: ${(300 / 328) * 8}px;
  font-size: ${(300 / 328) * 18}px;
  line-height: ${(300 / 328) * 22}px;
`;

const Time = styled.div`
  position: absolute;
  background-color: white;
  flex: 0 1 auto;
  text-align: center;
  vertical-align: middle;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  margin-left: 380px;
  font-size: ${(300 / 328) * 18}px;
  line-height: ${(300 / 328) * 22}px;
  white-space: nowrap;
`;

const Books = styled.div`
  position: absolute;
  background-color: white;
  flex: 0 1 auto;
  text-align: center;
  vertical-align: middle;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  margin-left: 550px;
  margin-right: ${(300 / 328) * 8}px;
  font-size: ${(300 / 328) * 18}px;
  line-height: ${(300 / 328) * 22}px;
  white-space: nowrap;
`;

function formatAMPM(date: { getHours: () => any; getMinutes: () => any }) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const LongEventCard = ({
  eventData,
}: {
  // TODO: change type of eventData
  eventData: any;
}) => {
  const date = new Date(eventData.programDate);
  return (
    <Container>
      <EventImage>
        <Image
          src="/event-image.png"
          alt="Event image icon"
          width={`${Math.round((300 / 328) * 53)}`}
          height={`${Math.round((300 / 328) * 53)}`}
        />
      </EventImage>
      <Name>{eventData.name}</Name>

      <AddressContainer>
        <AddressIcon>
          <Image
            src="/map.png"
            alt="Map icon"
            width={`${Math.round((300 / 328) * 21)}`}
            height={`${Math.round((300 / 328) * 23.99)}`}
          />
        </AddressIcon>
        {/* TODO: school not showing - probably because its "schools" in Schema but "school" in MongoDB*/}
        {eventData.school}
      </AddressContainer>

      <InfoContainer>
        <InfoFlex>
          <CalendarIcon>
            <Image
              src="/calendar.png"
              alt="Calendar icon"
              width={`${Math.round((300 / 328) * 21)}`}
              height={`${Math.round((300 / 328) * 23.99)}`}
            />
          </CalendarIcon>
          <InfoFlexChild>{date.toDateString()}</InfoFlexChild>
          <ClockIcon>
            <Image
              src="/clock.png"
              alt="Clock icon"
              width={`${Math.round((300 / 328) * 21.27)}`}
              height={`${Math.round((300 / 328) * 22.14)}`}
            />
          </ClockIcon>
          <Time>{formatAMPM(date)}</Time>
          <CheckmarkIcon>
            <Image
              src="/checkmark.png"
              alt="Checkmark icon"
              width={`${Math.round((300 / 328) * 21)}`}
              height={`${Math.round((300 / 328) * 23.99)}`}
            />
          </CheckmarkIcon>
          <Books>
            {/* TODO: add data for number of books distributed*/}X books
            distributed
          </Books>
        </InfoFlex>
      </InfoContainer>
    </Container>
  );
};

export default LongEventCard;
