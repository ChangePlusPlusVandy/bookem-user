import React, { Suspense } from 'react';
import styled from 'styled-components';
const PastActivityEvent = React.lazy(() => import('./PastActivityEvent'));

// vertical list of sample past events (another component)

const Container = styled.div`
  background-color: #d9d9d9;
  width: 15em;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
`;

const Header = styled.p`
  font-family: 'Inter';
  font-size: 25px;
  margin-top: 50px;
  text-align: center;
  font-weight: 400;
`;

const PastActivity = () => {
  return (
    <Container>
      <Header>Past activity</Header>
      <ul>
        <Suspense fallback={<Header>Please Wait...</Header>}>
          <PastActivityEvent></PastActivityEvent>
          <PastActivityEvent></PastActivityEvent>
          <PastActivityEvent></PastActivityEvent>
          <PastActivityEvent></PastActivityEvent>
          <PastActivityEvent></PastActivityEvent>
          <PastActivityEvent></PastActivityEvent>
        </Suspense>
      </ul>
    </Container>
  );
};

export default PastActivity;
