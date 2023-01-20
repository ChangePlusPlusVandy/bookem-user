import React from 'react';
import FutureVolunteerEvents from '@/components/Volunteer/FutureVolunteerEvents';
import {
  Container,
  Greeting,
  GreetingContainer,
} from '@/styles/dashboard.styles';

const VolunteerDashboard = ({ userData }: any) => {
  return (
    <Container>
      <GreetingContainer>
        <Greeting>Volunteer</Greeting>
      </GreetingContainer>

      <FutureVolunteerEvents />
    </Container>
  );
};

export default VolunteerDashboard;
