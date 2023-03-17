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
import { Header } from '@/styles/dashboard.styles';
import FilterEventsPopup from './FilterEventsPopup';
import { EventType } from '@/utils/types';

// TODO: get this from database
const feedsource: EventType[] = [
  {
    source: '/eventCard/event-image.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: new Date('2005-12-17T13:24:00'),
    time: '9:30 AM',
    availability: 11,
    id: 0,
  },
  {
    source: '/eventCard/event-image.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: new Date('2022-12-17T03:24:00'),
    time: '9:30 AM',
    availability: 2,
    id: 1,
  },
  {
    source: '/eventCard/event-image.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: new Date('2023-12-17T03:24:00'),
    time: '9:30 AM',
    availability: 8,
    id: 2,
  },
  {
    source: '/eventCard/event-image.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: new Date('2021-12-17T03:24:00'),
    time: '9:30 AM',
    availability: 5,
    id: 3,
  },
  {
    source: '/eventCard/event-image.png',
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

  // Sorts events based on decreasing availability
  const sortDescendingSpots = () => {
    const copy = [...feed];
    copy.sort((b, a) => a.availability - b.availability);
    setFeed(copy);
  };

  // Sorts events based on increasing availability
  const sortAscendingSpots = () => {
    const copy = [...feed];
    copy.sort((a, b) => a.availability - b.availability);
    setFeed(copy);
  };

  // Sorts events in order of most to least recent
  const sortMostRecent = () => {
    const copy = [...feed];
    copy.sort((a, b) => a.date.valueOf() - b.date.valueOf());
    setFeed(copy);
  };

  // Sorts events in order of least to most recent
  const sortLeastRecent = () => {
    const copy = [...feed];
    copy.sort((b, a) => a.date.valueOf() - b.date.valueOf());
    setFeed(copy);
  };

  return (
    <Container>
      <NavHeader>
        <NavLeft>
          <Header>Future volunteer events</Header>
        </NavLeft>
        {/* Container for filter icon that sorts events accordingly */}
        <NavRight>
          {isPopupOn ? (
            <FilterEventsPopup
              sortDescendingSpots={sortDescendingSpots}
              sortAscendingSpots={sortAscendingSpots}
              sortMostRecent={sortMostRecent}
              sortLeastRecent={sortLeastRecent}
              hidePopup={hidePopup}></FilterEventsPopup>
          ) : null}

          {/* Button for filtering events */}
          <FilterButton onClick={showPopup}>
            <Image
              src="/volunteer/filter-icon.png"
              alt="Filter icon"
              width="25"
              height="25"
            />
          </FilterButton>
        </NavRight>
      </NavHeader>

      {/* Container for search bar that searches for events based on query input */}
      <SearchBar>
        <Input
          type="text"
          placeholder="Search events"
          onChange={event => setQuery(event.target.value)}
        />
      </SearchBar>

      {/* Container for events that show up based on query input */}
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
