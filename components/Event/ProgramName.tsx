import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React, { useEffect, useState } from 'react';
import {
  ProgramNameBox,
  NameAndSpot,
  SignupButton,
} from '@/styles/components/Event/programName.styles';
import { useSession } from 'next-auth/react';

/**
 * Contain the Program name and sign up button
 * @param program
 */
const ProgramName = ({ program }: { program: QueriedVolunteerProgramData }) => {
  const [signedUp, setSignedUp] = useState(false);
  const { data: session } = useSession();

  /**
   * Sign up/Unsign up the current user to the event
   * @param program
   */
  const signUpEvent = async (program: QueriedVolunteerProgramData) => {
    try {
      // Send post request to backend
      if (!program.isOpen) {
        alert('Go to program application!');
        return;
      }
      const response = await fetch('/api/event/' + program._id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Success
      if (response.status === 200) {
        const message = await response.json();
        console.log(message);
      }

      // Update sign up state
      setSignedUp(!signedUp);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Initialize signedUp according to whether the current program
    // contains the user or not
    if (session?.user) {
      setSignedUp(program.volunteers.includes(session.user._id));
    }
  }, [program.volunteers, session?.user]);

  return (
    <ProgramNameBox>
      <NameAndSpot>
        <b>{program.name}</b> ({program.category}) <br />
        {program.volunteers.length}/{program.maxSpot} spots filled
      </NameAndSpot>
      <SignupButton onClick={() => signUpEvent(program)}>
        <span>{signedUp ? 'Signed up' : 'Sign up'}</span>
      </SignupButton>
    </ProgramNameBox>
  );
};

export default ProgramName;
