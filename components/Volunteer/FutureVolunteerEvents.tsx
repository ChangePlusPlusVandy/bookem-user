import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import EventCard from '@/components/EventCard';
import {
  Container,
  FilterButton,
  ImagesWrapper,
  Input,
  NavHeader,
  NavLeft,
  NavRight,
  SearchBar,
} from '@/styles/components/futureEvents.styles';
import { StatsHeader } from '@/styles/dashboard.styles';
import FilterEventsPopup from './FilterEventsPopup';
import { EventType } from '@/types/types';

// TODO: get this from database
const feedsource: EventType[] = [
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: new Date('2005-12-17T13:24:00'),
    time: '9:30 AM',
    availability: 11,
    id: 0,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: new Date('2022-12-17T03:24:00'),
    time: '9:30 AM',
    availability: 2,
    id: 1,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: new Date('2023-12-17T03:24:00'),
    time: '9:30 AM',
    availability: 8,
    id: 2,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: new Date('2021-12-17T03:24:00'),
    time: '9:30 AM',
    availability: 5,
    id: 3,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: new Date('2020-12-17T03:24:00'),
    time: '9:30 AM',
    availability: 8,
    id: 4,
  },
];

const FutureVolunteerEvents = () => {
  const [query, setQuery] = useState('');

  const [isPopupOn, setIsPopupOn] = useState(false);

  const [feed, setFeed] = useState(feedsource);

  const showPopup = () => setIsPopupOn(true);
  const hidePopup = () => setIsPopupOn(false);

  const sortDescendingSpots = () => {
    const copy = [...feed];
    copy.sort((b, a) => a.availability - b.availability);
    setFeed(copy);
  };

  const sortAscendingSpots = () => {
    const copy = [...feed];
    copy.sort((a, b) => a.availability - b.availability);
    setFeed(copy);
  };

  const sortMostRecent = () => {
    const copy = [...feed];
    copy.sort((a, b) => a.date.valueOf() - b.date.valueOf());
    setFeed(copy);
  };

  const sortLeastRecent = () => {
    const copy = [...feed];
    copy.sort((b, a) => a.date.valueOf() - b.date.valueOf());
    setFeed(copy);
  };

  return (
    <Container>
      <NavHeader>
        <NavLeft>
          <StatsHeader>Future volunteer events</StatsHeader>
        </NavLeft>
        <NavRight>
          {isPopupOn ? (
            <FilterEventsPopup
              sortDescendingSpots={sortDescendingSpots}
              sortAscendingSpots={sortAscendingSpots}
              sortMostRecent={sortMostRecent}
              sortLeastRecent={sortLeastRecent}
              hidePopup={hidePopup}></FilterEventsPopup>
          ) : null}
          <FilterButton onClick={showPopup}>
            <Image
              src="/filter-icon.png"
              alt="Filter icon"
              width="25"
              height="25"
            />
          </FilterButton>
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
        {feed
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
