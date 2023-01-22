import React from 'react';
import { PopupWindow } from '../PopupWindow';
import FutureVolunteerEvents from '@/components/Volunteer/FutureVolunteerEvents';
import {
  Container,
  Greeting,
  GreetingContainer,
} from '@/styles/dashboard.styles';
import LeftDisplay from '../LeftDisplay';
import { useState } from 'react';

const VolunteerDashboard = ({ userData }: any) => {
  const [showPopup, setShowPopup] = useState(false);

  function handleShowPopup() {
    setShowPopup(true);
  }

  function hidePopup() {
    setShowPopup(false);
  }
  return (
    <Container>
      <button onClick={handleShowPopup}>Open popup</button>

      {showPopup ? (
        <PopupWindow>
          {/* insert popup content here */}
          <LeftDisplay></LeftDisplay>
        </PopupWindow>
      ) : null}

      <GreetingContainer>
        <Greeting>Volunteer</Greeting>
      </GreetingContainer>

      <FutureVolunteerEvents />
    </Container>
  );
};

export default VolunteerDashboard;
