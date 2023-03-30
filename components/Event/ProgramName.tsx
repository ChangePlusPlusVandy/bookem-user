import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React, { useEffect, useState } from 'react';
import {
  ProgramNameBox,
  NameAndSpot,
  SignupButton,
  Status,
  StatusBox,
} from '@/styles/components/Event/programName.styles';
import { useSession } from 'next-auth/react';
import { Media } from '@/lib/media';
import Image from 'next/image';

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
  const signUpEvent = async () => {
    try {
      // If the program is not open, users need to submit an application
      if (!program.isOpen) {
        // TODO: redirect to program application page
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
        // Update sign up state
        setSignedUp(!signedUp);
      }
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

  /**
   * Calculate the length of the program volunteers
   * If program.volunteers is undefined, return 0
   */
  const getProgramLength = () => {
    if (program.volunteers && program.volunteers.length)
      return program.volunteers.length;
    else return 0;
  };

  return (
    <ProgramNameBox>
      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        <NameAndSpot>
          <b>{program.name}</b> ({program.category}) <br />
          {getProgramLength()}/{program.maxSpot} spots filled
        </NameAndSpot>
        <SignupButton onClick={signUpEvent}>
          <span>{signedUp ? 'Signed up' : 'Sign up'}</span>
        </SignupButton>
      </Media>

      {/* Mobile */}
      <Media lessThan="sm">
        <NameAndSpot>
          <b>{program.name}</b> <span>({program.category}) </span>
          <br />
          {/* {getProgramLength()}/{program.maxSpot} spots filled */}
          <StatusBox>
            <Image src="/event/dot.png" alt="" width={10} height={10} />
            <Status>ongoing</Status>
          </StatusBox>
        </NameAndSpot>
        {/* <SignupButton onClick={signUpEvent}>
          <span>{signedUp ? 'Signed up' : 'Sign up'}</span>
        </SignupButton> */}
      </Media>
    </ProgramNameBox>
  );
};

export default ProgramName;
