import React, { Suspense, useState } from 'react';
const EventCard = React.lazy(() => import('@/components/shared/EventCard')); // implement lazy loading
import {
  Container,
  HeaderText,
  Header,
  HeaderBox,
  Line,
  Events,
} from '@/styles/components/pastActivity.styles';
import mongoose from 'mongoose';
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import { Media } from '@/lib/media';
import Image from 'next/image';
import MainDashboard from './MainDashboard';

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
const PastActivity = ({ userData }: any) => {
  // state for hiding/showing mobile Past Activities
  const [onMobileHide, setOnMobileHide] = useState(false);

  return (
    <>
      <Media greaterThanOrEqual="sm">
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
      </Media>
      <Media lessThan="sm">
        {onMobileHide ? (
          <MainDashboard userData={userData} />
        ) : (
          <Container>
            <HeaderBox>
              <HeaderText>Past activity</HeaderText>
              <Image
                src="/event/error.svg"
                alt=""
                width={32}
                height={32}
                onClick={() => {
                  setOnMobileHide(true);
                }}
              />
            </HeaderBox>
            <Line src="/event/line.png" alt="" width={100} height={1} />
            <Events>
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
            </Events>
          </Container>
        )}
      </Media>
    </>
  );
};

export default PastActivity;
