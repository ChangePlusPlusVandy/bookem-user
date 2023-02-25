import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React, { useState } from 'react';
import styled from 'styled-components';

const ProgramNameBox = styled.div`
  margin-left: 82px;
  height: auto;
`;

const NameAndSpot = styled.div`
  font-size: 30px;
  line-height: 50px;
`;

const SignupButton = styled.button`
  width: 135px;
  margin-top: 30px;
  padding: 12px;
  background: #5a5a5a;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 30px;
`;

const signUpEvent = async (program: QueriedVolunteerProgramData) => {
  console.log(program);

  try {
    const response = await fetch('/api/event/' + program._id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response);
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
