import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import React, { useEffect } from 'react';
import {
  EventNameBox,
  NameAndSpot,
  Status,
  StatusBox,
} from '@/styles/components/Event/eventName.styles';
import { useSession } from 'next-auth/react';
import { SignupButton } from '@/styles/components/Event/event.styles';
import { Media } from '@/lib/media';
import Image from 'next/image';

/**
 * Calculate the length of the event volunteers
 * If event.volunteers is undefined, return 0
 */
export const getEventLength = (event: QueriedVolunteerEventData) => {
  if (event.volunteers && event.volunteers.length)
    return event.volunteers.length;
  else return 0;
};

/**
 * Contain the Event name and sign up button
 * @param event
 */
const EventName = ({
  signedUp,
  setSignedUp,
  event,
  signUpEvent,
}: {
  signedUp: boolean;
  setSignedUp: (signedUp: boolean) => void;
  event: QueriedVolunteerEventData;
  signUpEvent: () => void;
}) => {
  const { data: session } = useSession();

  useEffect(() => {
    // Initialize signedUp according to whether the current event
    // contains the user or not
    if (session?.user) {
      setSignedUp(
        event.volunteers.some(volunteer => volunteer._id === session.user._id)
      );
    }
  }, [event.volunteers, session?.user, setSignedUp]);

  return (
    <EventNameBox>
      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        <NameAndSpot>
          <b>{event.name}</b>
          {event.tags.length > 0 && <p>({event.program.tagName})</p>}
          <br />
          {getEventLength(event)}/{event.maxSpot} spots filled
        </NameAndSpot>
        <SignupButton onClick={signUpEvent}>
          <span>{signedUp ? 'Signed up' : 'Sign up'}</span>
        </SignupButton>
      </Media>

      {/* Mobile */}
      <Media lessThan="sm">
        <NameAndSpot>
          <b>{event.name}</b> <span>({event.program?.tagName}) </span>
          <br />
          <StatusBox>
            <Image src="/event/dot.svg" alt="" width={10} height={10} />
            {/* TODO: display this dynamically after database schema is updated */}
            <Status>{'ongoing'}</Status>
          </StatusBox>
        </NameAndSpot>
      </Media>
    </EventNameBox>
  );
};

export default EventName;
