import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import EventCard from '@/components/shared/EventCard';
import {
  AllEvents,
  AllEventsContainer,
  Container,
  EventCardContainer,
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
import { Media } from '@/lib/media';
import LongEventCard from '../shared/LongEventCard';
import Link from 'next/link';

const FutureVolunteerEvents = () => {
  // Holds text in input box
  const [query, setQuery] = useState('');

  // Track the state of popup after clicking "filter button"
  const [isPopupOn, setIsPopupOn] = useState(false);
  const showPopup = () => setIsPopupOn(true);
  const hidePopup = () => setIsPopupOn(false);

  const [events, setEvents] = useState<QueriedVolunteerEventData[]>();
  const [featuredEvents, setFeaturedEvents] =
    useState<QueriedVolunteerEventData[]>();
  const [error, setError] = useState<Error>();
  // Fetch upcoming events when rendered
  useEffect(() => {
    fetchData('/api/events/upcoming')
      .then(data => setEvents(data))
      .catch(err => setError(err));
    fetchData('/api/events/featured')
      .then(data => setFeaturedEvents(data))
      .catch(err => setError(err));
  }, []);

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
      {(!events || !featuredEvents) && !error && <div>Loading...</div>}
      {events && featuredEvents && (
        <Container>
          <NavHeader>
            <NavLeft>
              <Media greaterThanOrEqual="sm">
                <Header>Explore volunteer opportunities</Header>
              </Media>
              <Media lessThan="sm">
                <Header>Featured volunteer opportunities</Header>
              </Media>
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
              <Media greaterThanOrEqual="sm">
                <FilterButton onClick={showPopup}>
                  <Image
                    src="/volunteer/filter-icon.png"
                    alt="Filter icon"
                    width="25"
                    height="25"
                  />
                </FilterButton>
              </Media>
            </NavRight>
          </NavHeader>

          {/* Container for search bar that searches for events based on query input */}
          <Media greaterThanOrEqual="sm">
            <SearchBar>
              <Input
                type="text"
                placeholder="Search events"
                onChange={event => setQuery(event.target.value)}
              />
            </SearchBar>

            {/* Container for events that show up based on query input */}
            <ImagesWrapper>
              {events.map(event => (
                <EventCard
                  key={event._id.toString()}
                  eventData={event}
                  size="medium"
                  href={'/event/' + event._id}
                />
              ))}
            </ImagesWrapper>
          </Media>

          <Media lessThan="sm">
            {/* Container for featured events */}
            <ImagesWrapper>
              {featuredEvents.map(event => (
                <EventCard
                  key={event._id.toString()}
                  eventData={event}
                  size="medium"
                  href={'/event/' + event._id}
                />
              ))}
            </ImagesWrapper>
          </Media>

          {/* Mobile: Contains search bar and all events in the bottom */}
          <Media lessThan="sm">
            <AllEventsContainer>
              <AllEvents>All Events</AllEvents>

              {/* Filter Icon */}
              <FilterButton onClick={showPopup}>
                <Image
                  src="/volunteer/filter-icon.png"
                  alt="Filter icon"
                  width="25"
                  height="25"
                />
              </FilterButton>
            </AllEventsContainer>

            {/* Input box */}
            <SearchBar>
              <Input
                type="text"
                placeholder="Search events"
                onChange={event => setQuery(event.target.value)}
              />
            </SearchBar>

            {/* All event cards */}
            <EventCardContainer>
              {events
                .filter(event =>
                  event.name.toLowerCase().includes(query.toLowerCase())
                )
                .map(event => (
                  <Link href={'/event/' + event._id} key={event._id.toString()}>
                    <LongEventCard eventData={event} />
                  </Link>
                ))}
            </EventCardContainer>
          </Media>
        </Container>
      )}
    </>
  );
};

export default FutureVolunteerEvents;
