import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';
import React, { useState } from 'react';
import Header from '@/components/Event/Header';
import BookIcon from '@/components/Event/BookIcon';
import EventName from '@/components/Event/EventName';
import TimeAndPlace from '@/components/Event/TimeAndPlace';
import About from '@/components/Event/About';
import Contact from '@/components/Event/Contact';
import {
  EventBox,
  MiddleBox,
  BottomBox,
  ButtonBox,
  AboutContactButton,
} from '@/styles/components/Event/event.styles';
import { Media } from '@/lib/media';
import Footer from '@/components/Event/Footer';
import { BOOKEM_THEME } from '@/utils/constants';

/**
 * Event Detail
 * @param event Data about the event
 */
const Event = ({ event }: { event: QueriedVolunteerEventData }) => {
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
      // If the event requires application, redirect to application page
      if (!event.requireApplication) {
        // TODO: redirect to event application page
        alert('Go to event application!');
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
    <>
      <EventBox>
        <Header />

        {/* Book Icon and Event name */}
        <MiddleBox>
          <BookIcon />

          {/* Pass states to child to manage */}
          <EventName
            signedUp={signedUp}
            setSignedUp={setSignedUp}
            event={event}
            signUpEvent={signUpEvent}
          />
        </MiddleBox>

        {/* Time and Place of the event */}
        <TimeAndPlace eventDate={event.startDate} location={event.location} />

        {/* Desktop */}
        <Media greaterThanOrEqual="sm">
          {/* Event Description and Contact Info */}
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
                backgroundcolor={
                  showAbout
                    ? BOOKEM_THEME.colors.BOOKEM_BLACK
                    : BOOKEM_THEME.colors.BOOKEM_LIGHT_GRAY
                }
                textcolor={showAbout ? 'white' : 'black'}
                onClick={handleShowAbout}>
                About
              </AboutContactButton>
              {/* Contact Button */}
              <AboutContactButton
                backgroundcolor={
                  showAbout
                    ? BOOKEM_THEME.colors.BOOKEM_LIGHT_GRAY
                    : BOOKEM_THEME.colors.BOOKEM_BLACK
                }
                textcolor={showAbout ? 'black' : 'white'}
                onClick={handleShowContact}>
                Contact
              </AboutContactButton>
            </ButtonBox>

            {/* Display About and Contact according to showAbout state */}
            {showAbout && <About description={event.description} />}
            {!showAbout && <Contact phone={event.phone} email={event.email} />}
          </BottomBox>
        </Media>
      </EventBox>

      {/* Footer in mobile */}
      <Media lessThan="sm">
        <Footer
          signedUp={signedUp}
          setSignedUp={setSignedUp}
          event={event}
          signUpEvent={signUpEvent}
        />
      </Media>
    </>
  );
};

export default Event;
