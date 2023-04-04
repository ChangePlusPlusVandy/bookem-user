import { SignupButton } from '@/styles/components/Event/event.styles';
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { getEventLength } from './EventName';
import { MaxSpot, SignupBox } from '@/styles/components/Event/footer.styles';

/**
 * Contains spots filled and Sign Up button in Mobile
 * @param signedUp
 * @param setSignedUp
 * @param event
 * @param signUpEvent
 */
const Footer = ({
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
  // Get user id in session
  const { data: session } = useSession();

  useEffect(() => {
    // Initialize signedUp according to whether the current event
    // contains the user or not
    if (session?.user) {
      setSignedUp(event.volunteers.includes(session.user._id));
    }
  }, [event.volunteers, session?.user, setSignedUp]);
  return (
    <>
      <SignupBox>
        <MaxSpot>
          {getEventLength(event)}/{event.maxSpot} spots filled
        </MaxSpot>
        <SignupButton onClick={signUpEvent}>
          <span>{signedUp ? 'Signed up' : 'Sign up'}</span>
        </SignupButton>
      </SignupBox>
    </>
  );
};

export default Footer;
