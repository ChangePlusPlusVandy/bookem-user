import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React, { useEffect, useState } from 'react';
import {
  ProgramNameBox,
  NameAndSpot,
  Status,
  StatusBox,
} from '@/styles/components/Event/programName.styles';
import { useSession } from 'next-auth/react';
import { Media } from '@/lib/media';
import Image from 'next/image';
import { SignupButton } from '@/styles/components/Event/event.styles';

/**
 * Calculate the length of the program volunteers
 * If program.volunteers is undefined, return 0
 */
export const getProgramLength = (program: QueriedVolunteerProgramData) => {
  if (program.volunteers && program.volunteers.length)
    return program.volunteers.length;
  else return 0;
};

/**
 * Contain the program name and sign up button
 * @param signedUp
 * @param setSignedUp
 * @param program
 * @param signUpEvent
 */
const ProgramName = ({
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
  const { data: session } = useSession();

  useEffect(() => {
    // Initialize signedUp according to whether the current program
    // contains the user or not
    if (session?.user) {
      setSignedUp(program.volunteers.includes(session.user._id));
    }
  }, [program.volunteers, session?.user, setSignedUp]);

  return (
    <ProgramNameBox>
      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        <NameAndSpot>
          <b>{program.name}</b> ({program.category}) <br />
          {getProgramLength(program)}/{program.maxSpot} spots filled
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
            {/* TODO: display this dynamically after database schema is updated */}
            <Status>{'ongoing'}</Status>
          </StatusBox>
        </NameAndSpot>
      </Media>
    </ProgramNameBox>
  );
};
export default ProgramName;
