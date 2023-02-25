import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React, { useEffect, useState } from 'react';
import {
  ProgramNameBox,
  NameAndSpot,
  SignupButton,
} from '@/styles/components/Event/programName.styles';
import { getSession, useSession } from 'next-auth/react';

/**
 * Contain the Program name and sign up button
 * @param program
 */
const ProgramName = ({ program }: { program: QueriedVolunteerProgramData }) => {
  const [signedUp, setSignedUp] = useState(false);
  const { data: session } = useSession();

  const signUpEvent = async (program: QueriedVolunteerProgramData) => {
    console.log(program);

    try {
      const response = await fetch('/api/event/' + program._id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const message = await response.json();
      setSignedUp(!signedUp);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (session?.user) {
      setSignedUp(program.users.includes(session.user._id));
    }
  }, [program.users, session?.user]);

  return (
    <ProgramNameBox>
      <NameAndSpot>
        <b>{program.name}</b> ({program.category}) <br />
        9/10 spots filled
      </NameAndSpot>
      <SignupButton onClick={() => signUpEvent(program)}>
        <span>{signedUp ? 'Signed up' : 'Sign up'}</span>
      </SignupButton>
    </ProgramNameBox>
  );
};

export default ProgramName;
