import { QueriedVolunteerProgramData } from 'bookem-shared/src/types/database';
import React, { useState } from 'react';
import Header from './Header';
import BookIcon from './BookIcon';
import ProgramName from './ProgramName';
import TimeAndPlace from './TimeAndPlace';
import About from './About';
import Contact from './Contact';
import {
  EventBox,
  MiddleBox,
  BottomBox,
  ButtonBox,
  AboutContactButton,
} from '@/styles/components/Event/event.styles';
import { Media } from '@/lib/media';
import Footer from './Footer';

/**
 * Event Detail
 * @param event Data about the event
 */
const Event = ({ event }: { event: QueriedVolunteerProgramData }) => {
  /**
   * True: display About
   * False: display Contact
   */
  const [showAbout, setShowAbout] = useState<boolean>(true);
  const handleShowAbout = () => !showAbout && setShowAbout(!showAbout);
  const handleShowContact = () => showAbout && setShowAbout(!showAbout);

  /**
   * Keep track of whether this event is signed up or not
   */
  const [signedUp, setSignedUp] = useState(false);
  /**
   * Sign up/Unsign up the current user to the event
   * @param event
   */
  const signUpEvent = async () => {
    try {
      // If the event is not open, users need to submit an application
      if (!event.isOpen) {
        // TODO: redirect to event application page
        alert('Go to program application!');
        return;
      }

      // Send POST request to sign up
      const response = await fetch('/api/event/' + event._id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Success
      if (response.status === 200) {
        const message = await response.json();
        console.log(message);
        // Update sign up state
        setSignedUp(!signedUp);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EventBox>
      <Header />

      {/* Book Icon and Program name */}
      <MiddleBox>
        <BookIcon />

        {/* Pass states to child to manage */}
        <ProgramName
          signedUp={signedUp}
          setSignedUp={setSignedUp}
          program={event}
          signUpEvent={signUpEvent}
        />
      </MiddleBox>

      {/* Time and Place of the program */}
      <TimeAndPlace programDate={event.programDate} location={event.location} />

      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        {/* Program Description and Contact Info */}
        <BottomBox>
          <About description={event.description} />
          <Contact phone={event.phone} email={event.email} />
        </BottomBox>
      </Media>

      {/* Mobile */}
      <Media lessThan="sm">
        <BottomBox>
          {/* Customize background color and text color according to showAbout state */}
          <ButtonBox>
            {/* About Button */}
            <AboutContactButton
              backgroundcolor={showAbout ? '#6b6b6b' : '#D9D9D9'}
              textcolor={showAbout ? 'white' : 'black'}
              onClick={handleShowAbout}>
              About
            </AboutContactButton>
            {/* Contact Button */}
            <AboutContactButton
              backgroundcolor={showAbout ? '#D9D9D9' : '#6b6b6b'}
              textcolor={showAbout ? 'black' : 'white'}
              onClick={handleShowContact}>
              Contact
            </AboutContactButton>
          </ButtonBox>

          {/* Display About and Contact according to showAbout state */}
          {showAbout && <About description={event.description} />}
          {!showAbout && <Contact phone={event.phone} email={event.email} />}
        </BottomBox>

        <Footer
          signedUp={signedUp}
          setSignedUp={setSignedUp}
          program={event}
          signUpEvent={signUpEvent}
        />
      </Media>
    </EventBox>
  );
};

export default Event;
