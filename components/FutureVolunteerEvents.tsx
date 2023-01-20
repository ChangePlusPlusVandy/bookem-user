import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

type EventType = {
  source: string;
  name: string;
  location: string;
  date: string;
  time: string;
  availability: string;
  id: number;
};

const Container = styled.div`
  background-color: pink;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  width: 100%;
  height: 800px;
`;

const NavHeader = styled.div`
  width: 100%;
  padding: 26px 60px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

const NavLeft = styled.div`
  width: 50%;
`;

const NavRight = styled.div`
  width: 50%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`;

const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 15px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 15px;
  color: black;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  background: #d9d9d9;
  width: 92%;
  margin: auto;

  background-image: url(searchIcon.png);
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 5px;

  &:active,
  &:focus {
    text-align: left;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  flex-basis: 50%;
  flex-basis: calc(20.333%);
  margin: 40px;
  cursor: pointer;
  align-items: center;
`;

const ImgIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;

  svg {
    margin-right: 10px;
  }
`;

const ImgMeta = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
  background-color: yellow;
  padding: 80px;
  padding-top: 20px;
  border-radius: 7px;
  border: 1px solid #6b6b6b;
`;

function Events({ event }: { event: EventType }) {
  return (
    <ImgContainer>
      <Img src={event.source} />
      <ImgMeta>
        <ImgIcons>
          <Image
            src="/locationIcon.png"
            alt="Location icon"
            width="25"
            height="25"
          />
          {event.location}
        </ImgIcons>
        <ImgIcons>{event.time}</ImgIcons>
      </ImgMeta>
    </ImgContainer>
  );
}

const feedsource: EventType[] = [
  {
    source: '/eventIcon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11 spots',
    id: 0,
  },
  {
    source: '/eventIcon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11 spots',
    id: 1,
  },
  {
    source: '/eventIcon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11 spots',
    id: 2,
  },
  {
    source: '/eventIcon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11 spots',
    id: 3,
  },
  {
    source: '/eventIcon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11 spots',
    id: 4,
  },
];

const ImagesWrapper = styled.div`
  background-color: orange;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 60%;
  justify-content: center;
  margin: auto;
`;

const FutureVolunteerEvents = () => {
  const [query, setQuery] = useState('');

  return (
    <Container>
      <NavHeader>
        <NavLeft>Future volunteer Events</NavLeft>
        <NavRight>
          <Image
            src="/filterIcon.png"
            alt="Filter icon"
            width="25"
            height="25"
          />
        </NavRight>
      </NavHeader>

      <SearchBar>
        <Input
          type="text"
          placeholder="Search events"
          onChange={event => setQuery(event.target.value)}
        />
      </SearchBar>

      <ImagesWrapper>
        {feedsource
          .filter(event => {
            if (query === '') {
              //if query is empty
              return event;
            } else if (event.name.toLowerCase().includes(query.toLowerCase())) {
              //returns filtered array
              window.alert(event.name);
              return event;
            }
          })
          .map(item => (
            <Events event={item} key={item.id} />
          ))}
      </ImagesWrapper>
    </Container>
  );
};

export default FutureVolunteerEvents;
