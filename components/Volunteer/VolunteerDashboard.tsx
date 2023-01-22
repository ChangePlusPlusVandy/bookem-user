import React from 'react';
import {
  Container,
  Greeting,
  GreetingContainer,
  StatsContainer,
  Flex,
  FlexChild,
  StatsNumber,
  StatsDescription,
  LogButton,
  PastActivityButton,
  VolunteerButtonsContainer,
} from '@/styles/dashboard.styles';

const VolunteerDashboard = ({ userData }: any) => {
  return (
    <Container>
      <GreetingContainer>
        <Greeting>Volunteer</Greeting>
      </GreetingContainer>

      <VolunteerButtonsContainer>
        <Flex>
          <FlexChild>
            <LogButton>Log hours</LogButton>
          </FlexChild>
          <Flex>
            <FlexChild>
              <PastActivityButton>See past activity</PastActivityButton>
            </FlexChild>
          </Flex>
        </Flex>
      </VolunteerButtonsContainer>

      <StatsContainer>
        <Flex>
          <FlexChild>
            <StatsNumber>{userData.hoursVolunteered}</StatsNumber>
            <StatsDescription>Hours volunteered</StatsDescription>
          </FlexChild>

          <FlexChild>
            <StatsNumber>{userData.booksDistributed}</StatsNumber>
            <StatsDescription>Books distributed</StatsDescription>
          </FlexChild>

          <FlexChild>
            <StatsNumber>{userData.eventsAssisted}</StatsNumber>
            <StatsDescription>Events assisted</StatsDescription>
          </FlexChild>
        </Flex>
      </StatsContainer>
    </Container>
  );
};

//-------
// import FutureVolunteerEvents from '@/components/Volunteer/FutureVolunteerEvents';

// const VolunteerDashboard = ({ userData }: any) => {
//   return (
//     <Container>
//       <GreetingContainer>
//         <Greeting>Volunteer</Greeting>
//       </GreetingContainer>

//       {/* <FutureVolunteerEvents /> */}
//     </Container>
//   );
// };

export default VolunteerDashboard;
