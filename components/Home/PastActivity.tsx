import React, { Suspense } from 'react';
import { dummyEventData } from '@/components/Home/UpcomingEvents';
const EventCard = React.lazy(() => import('@/components/EventCard')); // implement lazy loading
import { Container, Header } from '@/styles/components/pastActivity.styles';

// vertical list of sample PastEvents
const PastActivity = () => {
  return (
    <Container>
      <Header>Past activity</Header>
      <ul>
        {/* if PastEvents aren't loading in yet, component will display "Please Wait..." */}
        <Suspense fallback={<Header>Please Wait...</Header>}>
          {/* TODO: integrate with backend */}
          <EventCard eventData={dummyEventData} size="small" />
          <EventCard eventData={dummyEventData} size="small" />
          <EventCard eventData={dummyEventData} size="small" />
          <EventCard eventData={dummyEventData} size="small" />
          <EventCard eventData={dummyEventData} size="small" />
          <EventCard eventData={dummyEventData} size="small" />
        </Suspense>
      </ul>
    </Container>
  );
};

export default PastActivity;
