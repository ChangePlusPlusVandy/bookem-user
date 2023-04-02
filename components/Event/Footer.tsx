import { SignupButton } from '@/styles/components/Event/event.styles';
import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { getProgramLength } from './ProgramName';
import { MaxSpot, SignupBox } from '@/styles/components/Event/footer.styles';

/**
 * Contains spots filled and Sign Up button in Mobile
 * @param signedUp
 * @param setSignedUp
 * @param program
 * @param signUpEvent
 */
const Footer = ({
  signedUp,
  setSignedUp,
  program,
  signUpEvent,
}: {
  signedUp: boolean;
  setSignedUp: (signedUp: boolean) => void;
  program: QueriedVolunteerProgramData;
  signUpEvent: () => void;
}) => {
  // Get user id in session
  const { data: session } = useSession();

  useEffect(() => {
    // Initialize signedUp according to whether the current program
    // contains the user or not
    if (session?.user) {
      setSignedUp(program.volunteers.includes(session.user._id));
    }
  }, [program.volunteers, session?.user, setSignedUp]);
  return (
    <>
      <SignupBox>
        <MaxSpot>
          {getProgramLength(program)}/{program.maxSpot} spots filled
        </MaxSpot>
        <SignupButton onClick={signUpEvent}>
          <span>{signedUp ? 'Signed up' : 'Sign up'}</span>
        </SignupButton>
      </SignupBox>
    </>
  );
};

export default Footer;
