import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import EventCard from '@/components/EventCard';
import {
  Container,
  ImagesWrapper,
  Input,
  NavHeader,
  NavLeft,
  NavRight,
  SearchBar,
} from '@/styles/components/futureEvents.styles';
import { StatsHeader } from '@/styles/dashboard.styles';
import FilterEventsPopup from './FilterEventsPopup';
import styled from 'styled-components';

const FilterButton = styled.button`
  border-radius: 100%;
  border: none;
  height: 40px;
  width: 40px;
`;

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
    availability: '11',
    id: 0,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '10',
    id: 1,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '8',
    id: 2,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '11',
    id: 3,
  },
  {
    source: '/event-icon.png',
    name: 'Distribute books (BNFK)',
    location: '3593 Cedar Rd. Nashville',
    date: '11/25',
    time: '9:30 AM',
    availability: '4',
    id: 4,
  },
];

const ButtonContainer = styled.div`
  display: flex;
`;

const FutureVolunteerEvents = () => {
  const [query, setQuery] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  const [buttonRight, setButtonRight] = useState(0);
  const [buttonTop, setButtonTop] = useState(0);
  function handleShowPopup() {
    setShowPopup(true);
  }

  function hidePopup() {
    setShowPopup(false);
  }

  return (
    <Container>
      <NavHeader>
        <NavLeft>
          <StatsHeader>Future volunteer events</StatsHeader>
        </NavLeft>
        <NavRight>
          {showPopup ? (
            <FilterEventsPopup hidePopup={hidePopup}></FilterEventsPopup>
          ) : null}
          <FilterButton onClick={handleShowPopup}>
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
