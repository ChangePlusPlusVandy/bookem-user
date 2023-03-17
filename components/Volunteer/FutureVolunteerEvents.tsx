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
import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import mongoose from 'mongoose';

// TODO: get this from database
const feedsource: QueriedVolunteerProgramData[] = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Distribute books (BNFK)',
    description: 'blablabla',
    schools: [],
    programDate: new Date('2005-12-17T13:24:00'),
    category: 'RFR',
    isOpen: true,
    volunteers: [],
    maxSpot: 11,
    location: '3593 Cedar Rd. Nashville',
    phone: '123-456-7890',
    email: 'test_user@bookem.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Distribute books (BNFK)',
    description: 'blablabla',
    schools: [],
    programDate: new Date('2005-12-17T13:24:00'),
    category: 'RFR',
    isOpen: true,
    volunteers: [],
    maxSpot: 11,
    location: '3593 Cedar Rd. Nashville',
    phone: '123-456-7890',
    email: 'test_user@bookem.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Distribute books (BNFK)',
    description: 'blablabla',
    schools: [],
    programDate: new Date('2005-12-17T13:24:00'),
    category: 'RFR',
    isOpen: true,
    volunteers: [],
    maxSpot: 11,
    location: '3593 Cedar Rd. Nashville',
    phone: '123-456-7890',
    email: 'test_user@bookem.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Distribute books (BNFK)',
    description: 'blablabla',
    schools: [],
    programDate: new Date('2005-12-17T13:24:00'),
    category: 'RFR',
    isOpen: true,
    volunteers: [],
    maxSpot: 11,
    location: '3593 Cedar Rd. Nashville',
    phone: '123-456-7890',
    email: 'test_user@bookem.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Distribute books (BNFK)',
    description: 'blablabla',
    schools: [],
    programDate: new Date('2005-12-17T13:24:00'),
    category: 'RFR',
    isOpen: true,
    volunteers: [],
    maxSpot: 11,
    location: '3593 Cedar Rd. Nashville',
    phone: '123-456-7890',
    email: 'test_user@bookem.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// '/eventCard/event-image.png'

const FutureVolunteerEvents = () => {
  const [query, setQuery] = useState('');
  const [isPopupOn, setIsPopupOn] = useState(false);
  const [feed, setFeed] = useState(feedsource);

  const showPopup = () => setIsPopupOn(true);
  const hidePopup = () => setIsPopupOn(false);

  // Sorts events based on decreasing availability
  const sortDescendingSpots = () => {
    const copy = [...feed];
    copy.sort((b, a) => a.maxSpot - b.maxSpot);
    setFeed(copy);
  };

  // Sorts events based on increasing availability
  const sortAscendingSpots = () => {
    const copy = [...feed];
    copy.sort((a, b) => a.maxSpot - b.maxSpot);
    setFeed(copy);
  };

  // Sorts events in order of most to least recent
  const sortMostRecent = () => {
    const copy = [...feed];
    copy.sort((a, b) => a.programDate.valueOf() - b.programDate.valueOf());
    setFeed(copy);
  };

  // Sorts events in order of least to most recent
  const sortLeastRecent = () => {
    const copy = [...feed];
    copy.sort((b, a) => a.programDate.valueOf() - b.programDate.valueOf());
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
            <EventCard
              eventData={item}
              size="medium"
              key={item._id.toString()}
            />
          ))}
      </ImagesWrapper>
    </Container>
  );
};

export default FutureVolunteerEvents;
