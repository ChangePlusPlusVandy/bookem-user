import React, { Suspense, useState, useEffect } from 'react';
import mongoose from 'mongoose';
import { useRouter } from 'next/router';
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

// vertical list of sample PastEvents
const PastActivity = ({ userData }: any) => {
  // state for hiding/showing mobile Past Activities
  const [onMobileHide, setOnMobileHide] = useState(false);
  const [events, setEvents] = useState<QueriedVolunteerEventData[]>();
  const [error, setError] = useState<Error>();
  const router = useRouter();

  useEffect(() => {
    // Assuming your API endpoint for past activities is '/api/pastActivities'
    fetch('/api/events/past')
      .then(response => response.json())
      .then(data => {
        setEvents(data); // Set the activities in state
      })
      .catch(error => {
        console.error('Error fetching past activities:', error);
      });
  }, []);

  const showMoreHandler = () => {
    // Navigate to the volunteerHistory page
    router.push('/volunteerHistory'); // Replace with your actual path to the volunteerHistory page
  };

  return (
    <>
      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        <Container>
          <Header>Past activity</Header>

          <Events>
            {/* if PastEvents aren't loading in yet, component will display "Please Wait..." */}
            {/* display the retrieved past*/}
            <Suspense fallback={<Header>Please Wait...</Header>}>
              {/* TODO: integrate with backend */}
              <Container>
                {events &&
                  events.map(event => (
                    // Iterate through events to and pass data to EventCard
                    <EventCard
                      key={event._id.toString()}
                      eventData={event}
                      size={'large'}
                      href={'/event/' + event._id}
                    />
                  ))}
              </Container>
            </Suspense>
          </Events>
          <button onClick={showMoreHandler}>Show More</button>
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
                <Container>
                  {events &&
                    events.map(event => (
                      // Iterate through events to and pass data to EventCard
                      <EventCard
                        key={event._id.toString()}
                        eventData={event}
                        size={'large'}
                        href={'/event/' + event._id}
                      />
                    ))}
                </Container>
              </Suspense>
            </Events>
          </Container>
        )}
      </Media>
    </>
  );
};

export default PastActivity;
