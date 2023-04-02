import React from 'react';
import {
  AboutBox,
  AboutContent,
  AboutHeader,
} from '@/styles/components/Event/about.styles';
import { Media } from '@/lib/media';

/**
 * Contains the program description
 * @param description Description of the current event
 */
const About = ({ description }: { description: string }) => {
  return (
    <>
      <Media greaterThanOrEqual="sm">
        <AboutBox>
          <AboutHeader>About</AboutHeader>
          <AboutContent>{description}</AboutContent>
        </AboutBox>
      </Media>

      <Media lessThan="sm">
        <AboutContent>{description}</AboutContent>
      </Media>
    </>
  );
};

export default About;
