import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import EventCard from '@/components/shared/EventCard';
import {
  Container,
  FilterButton,
  ImagesWrapper,
  Input,
  NavHeader,
  NavLeft,
  NavRight,
  SearchBar,
} from '@/styles/components/Volunteer/futureVolunteerEvents.styles';
import { Header } from '@/styles/dashboard.styles';
import FilterEventsPopup from '@/components/Volunteer/FilterEventsPopup';
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import { fetchData } from '@/utils/utils';

const FutureVolunteerEvents = () => {
  const [query, setQuery] = useState('');
  const [isPopupOn, setIsPopupOn] = useState(false);

  const [events, setEvents] = useState<QueriedVolunteerEventData[]>();
  const [error, setError] = useState<Error>();
  // Fetch upcoming events when rendered
  useEffect(() => {
    fetchData('/api/event/upcoming')
      .then(data => setEvents(data))
      .catch(err => setError(err));
  }, []);

  const showPopup = () => setIsPopupOn(true);
  const hidePopup = () => setIsPopupOn(false);

  // Sorts events based on decreasing availability
  const sortDescendingSpots = () => {
    if (!events) return;
    const copy = [...events];
    copy.sort((b, a) => a.maxSpot - b.maxSpot);
    setEvents(copy);
  };

  // Sorts events based on increasing availability
  const sortAscendingSpots = () => {
    if (!events) return;
    const copy = [...events];
    copy.sort((a, b) => a.maxSpot - b.maxSpot);
    setEvents(copy);
  };

  // Sorts events in order of most to least recent
  const sortMostRecent = () => {
    if (!events) return;
    const copy = [...events];
    copy.sort((a, b) => a.startDate.valueOf() - b.startDate.valueOf());
    setEvents(copy);
  };

  // Sorts events in order of least to most recent
  const sortLeastRecent = () => {
    if (!events) return;
    const copy = [...events];
    copy.sort((b, a) => a.startDate.valueOf() - b.startDate.valueOf());
    setEvents(copy);
  };

  return (
    <>
      {/* TODO: render 404 page */}
      {error && <>404 Event not found!</>}
      {!events && !error && <div>Loading...</div>}
      {events && (
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
                  hidePopup={hidePopup}
                />
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
            {events
              .filter(event =>
                event.name.toLowerCase().includes(query.toLowerCase())
              )
              .map(event => (
                <EventCard
                  key={event._id.toString()}
                  eventData={event}
                  size="medium"
                  href={'/event/' + event._id}
                />
              ))}
          </ImagesWrapper>
        </Container>
      )}
    </>
  );
};

export default FutureVolunteerEvents;
