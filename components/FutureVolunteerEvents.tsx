import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import EventCard from './EventCard';
import {
  Container,
  ImagesWrapper,
  Input,
  NavHeader,
  NavLeft,
  NavRight,
  SearchBar,
} from '@/styles/components/futureEvents.styles';

type EventType = {
  source: string;
  name: string;
  location: string;
  date: string;
  time: string;
  availability: string;
  id: number;
};

const feedsource: EventType[] = [
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11 spots',
    id: 0,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11 spots',
    id: 1,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11 spots',
    id: 2,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11 spots',
    id: 3,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11 spots',
    id: 4,
  },
];

const FutureVolunteerEvents = () => {
  const [query, setQuery] = useState('');

  return (
    <Container>
      <NavHeader>
        <NavLeft>Future volunteer Events</NavLeft>
        <NavRight>
          <Image
            src="/filter-icon.png"
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
              return event;
            }
          })
          .map(item => (
            <EventCard eventData={item} size="medium" key={item.id} />
          ))}
      </ImagesWrapper>
    </Container>
  );
};

export default FutureVolunteerEvents;
