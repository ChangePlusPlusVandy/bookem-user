import React from 'react';
import styled from 'styled-components';

const ProgramNameBox = styled.div`
  margin-left: 82px;
  height: auto;
`;

const NameAndSpot = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-size: 30px;
  line-height: 50px;
`;

const SignupButton = styled.button`
  width: 135px;
  padding: 10px 10px 10px 10px;
  background: #5a5a5a;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
`;

/**
 * Contain the Program name and sign up button
 * @param programName
 */
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
