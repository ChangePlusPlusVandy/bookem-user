import React from 'react';
import {PopupWindow} from '../../styles/PopupWindow.styles';
import FutureVolunteerEvents from '@/components/Volunteer/FutureVolunteerEvents';
import {
  Container,
  Greeting,
  GreetingContainer,
} from '@/styles/dashboard.styles';
import LeftDisplay from '../LeftDisplay';

const VolunteerDashboard = ({ userData }: any) => {
  return (
    <Container>
      <button>Open popup</button>
      <PopupWindow>
        <LeftDisplay></LeftDisplay>
      </PopupWindow>
      <GreetingContainer>
        <Greeting>Volunteer</Greeting>
      </GreetingContainer>

      <FutureVolunteerEvents />
    </Container>
  );
};

export default VolunteerDashboard;
