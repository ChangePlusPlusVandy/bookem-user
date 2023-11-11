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
  const [pastEvents, setPastEvents] = useState<QueriedVolunteerEventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPastEvents = async () => {
      try {
        const response = await fetch('/api/path-to-past-events-api'); // Update with the correct API endpoint
        const data = await response.json();
        setPastEvents(data);
      } catch (error) {
        console.error('Error fetching past events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPastEvents();
  }, []);

  // state for hiding/showing mobile Past Activities
  const [onMobileHide, setOnMobileHide] = useState(false);

  return (
    <>
      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        <Container>
          <Header>Past activity</Header>

          <Events>
            <Suspense fallback={<Header>Please Wait...</Header>}>
              {!loading &&
                pastEvents.map(eventData => (
                  <EventCard
                    key={eventData._id}
                    eventData={eventData}
                    size="small"
                  />
                ))}
            </Suspense>
          </Events>
        </Container>
      </Media>

      {/* Mobile */}
      {/* ... The mobile part remains the same, just replace the EventCard components similarly ... */}
    </>
  );
};

export default PastActivity;
