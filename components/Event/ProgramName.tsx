import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React from 'react';
import {
  ProgramNameBox,
  NameAndSpot,
  SignupButton,
} from '@/styles/components/Event/programName.styles';

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
    console.log(message);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Contain the Program name and sign up button
 * @param programName
 */
const ProgramName = ({ program }: { program: QueriedVolunteerProgramData }) => {
  return (
    <ProgramNameBox>
      <NameAndSpot>
        <b>{program.name}</b> (Program category) <br />
        9/10 spots filled
      </NameAndSpot>
      <SignupButton onClick={() => signUpEvent(program)}>Sign up</SignupButton>
    </ProgramNameBox>
  );
};

export default ProgramName;
