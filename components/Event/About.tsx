import React from 'react';
import styled from 'styled-components';

const AboutBox = styled.div`
  width: 700px;
  // background-color: #dcfae3;
`;

const AboutHeader = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
`;
const AboutContent = styled.div`
  margin-top: 33px;
`;

/**
 * Contains the program description
 * @param description Description of the current event
 */
const About = ({ description }: { description: string }) => {
  return (
    <>
      <AboutBox>
        <AboutHeader>About</AboutHeader>
        <AboutContent>{description}</AboutContent>
      </AboutBox>
    </>
  );
};

export default About;
