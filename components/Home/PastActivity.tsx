import React, { Suspense } from 'react';
const EventCard = React.lazy(() => import('@/components/shared/EventCard')); // implement lazy loading
import { Container, Header } from '@/styles/components/pastActivity.styles';
import mongoose from 'mongoose';
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';

/**
 * Dummy data for event cards
 */
const dummyEventData: QueriedVolunteerEventData = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Distribute books (BNFK)',
  description: 'blablabla',
  startDate: new Date('2005-12-17T13:24:00'),
  endDate: new Date('2005-12-17T13:24:00'),
  maxSpot: 11,
  location: {
    street: '3593 Cedar Rd',
    city: 'Nashville',
  },
  phone: '123-456-7890',
  email: 'test_user@bookem.com',
  program: {
    _id: new mongoose.Types.ObjectId(),
    tagName: 'BNFK',
  },
  requireApplication: true,
  volunteers: [],
  tags: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

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
