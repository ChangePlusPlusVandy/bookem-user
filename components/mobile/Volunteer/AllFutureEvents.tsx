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
        </Container>
      </Media>
    </>
  );
};

export default AllFutureEvents;
