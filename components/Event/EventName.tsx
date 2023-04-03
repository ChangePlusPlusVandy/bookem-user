import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import React, { useEffect, useState } from 'react';
import {
  EventNameBox,
  NameAndSpot,
  SignupButton,
} from '@/styles/components/Event/eventName.styles';
import { useSession } from 'next-auth/react';

/**
 * Contain the Event name and sign up button
 * @param event
 */
const EventName = ({ event }: { event: QueriedVolunteerEventData }) => {
  const [signedUp, setSignedUp] = useState(false);
  const { data: session } = useSession();

  /**
   * Sign up/Unsign up the current user to the event
   * @param event
   */
  const signUpEvent = async () => {
    try {
      // If the event is not open, users need to submit an application
      if (!event.requireApplication) {
        // TODO: redirect to event application page
        alert('Go to event application!');
        return;
      }

      const response = await fetch('/api/event/' + event._id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Success
      if (response.status === 200) {
        const message = await response.json();
        console.log(message);
        // Update sign up state
        setSignedUp(!signedUp);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Initialize signedUp according to whether the current event
    // contains the user or not
    if (session?.user) {
      setSignedUp(event.volunteers.includes(session.user._id));
    }
  }, [event.volunteers, session?.user]);

  /**
   * Calculate the length of the event volunteers
   * If event.volunteers is undefined, return 0
   */
  const getEventLength = () => {
    if (event.volunteers && event.volunteers.length)
      return event.volunteers.length;
    else return 0;
  };

  return (
    <EventNameBox>
      <NameAndSpot>
        {/* TODO: get the name of the tags rather the mongodb id. do this after tag management is complete */}
        <b>{event.name}</b>
        {event.tags.length > 0 && <p>({event.program.tagName})</p>}
        <br />
        {getEventLength()}/{event.maxSpot} spots filled
      </NameAndSpot>
      <SignupButton onClick={signUpEvent}>
        <span>{signedUp ? 'Signed up' : 'Sign up'}</span>
      </SignupButton>
    </EventNameBox>
  );
};

export default EventName;
