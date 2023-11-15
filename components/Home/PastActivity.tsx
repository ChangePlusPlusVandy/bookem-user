import React, { Suspense, useState } from 'react';
import mongoose from 'mongoose';
import { Media } from '@/lib/media';
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import Image from 'next/image';
const EventCard = React.lazy(() => import('@/components/shared/EventCard')); // implement lazy loading
import MainDashboard from '@/components/Home/MainDashboard';
import {
  Container,
  HeaderText,
  Header,
  HeaderBox,
  Line,
  Events,
} from '@/styles/components/pastActivity.styles';

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
  program: new mongoose.Types.ObjectId(),
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
      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        <Container>
          <Header>Past activity</Header>

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
      </Media>

      {/* Mobile */}
      <Media lessThan="sm">
        {onMobileHide ? (
          <>
            {/* Display MainDashboard when click on x button */}
            <MainDashboard userData={userData} />
          </>
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
