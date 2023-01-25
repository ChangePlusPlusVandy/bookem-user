import React from 'react';
import styled from 'styled-components';

const ProgramNameBox = styled.div`
  margin-left: 82px;
  height: 220px;
`;

const NameAndSpot = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-size: 30px;
  line-height: 50px;
`;

const SignupButton = styled.button``;
const ProgramName = ({ programName }: { programName: string }) => {
  return (
    <>
      <ProgramNameBox>
        <NameAndSpot>
          <b>{programName}</b> (Program category) <br />
          9/10 spots filled
        </NameAndSpot>
        <SignupButton>Sign up</SignupButton>
      </ProgramNameBox>
    </>
  );
};

export default ProgramName;
