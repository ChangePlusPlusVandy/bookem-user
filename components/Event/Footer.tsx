import {
  MaxSpot,
  SignupBox,
  SignupButton,
} from '@/styles/components/Event/event.styles';
import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React from 'react';

const Footer = ({ event }: { event: QueriedVolunteerProgramData }) => {
  return (
    <>
      <SignupBox>
        <MaxSpot>9/10 spot</MaxSpot>
        <SignupButton>Sign Up</SignupButton>
      </SignupBox>
    </>
  );
};

export default Footer;
