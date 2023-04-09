import { Media } from '@/lib/media';
import {
  Container,
  Header,
} from '@/styles/components/Volunteer/allFutureVolunteerEvents.styles';
import {
  Input,
  SearchBar,
} from '@/styles/components/Volunteer/futureVolunteerEvents.styles';
import React from 'react';

const AllFutureEvents = () => {
  return (
    <>
      <Media lessThan="sm">
        <Container>
          <Header>Explore Volunteer Opportunities </Header>

          <SearchBar>
            <Input
              type="text"
              placeholder="Search events"
              onChange={event => setQuery(event.target.value)}
            />
          </SearchBar>
        </Container>
      </Media>
    </>
  );
};

export default AllFutureEvents;
