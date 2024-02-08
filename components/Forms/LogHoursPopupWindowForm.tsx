import {
  FormHeader,
  FormInput,
  FormLabel,
  LargeFormInput,
  LogHoursForm,
} from '@/styles/components/Forms/logHoursPopupWindowForm.styles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PopupWindow from '@/components/shared/PopupWindow';
import WindowFlow from '@/components/shared/WindowFlow';
import VolunteerSignedEvents from '../Volunteer/VolunteerSignedEvents';
import { QueriedVolunteerEventData } from 'bookem-shared/src/types/database';

const LogHoursPopupWindowForm = ({
  setShowPopup,
  successMessage,
  errorMessage,
}: {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  successMessage: (message: string) => void;
  errorMessage: (message: string) => void;
}) => {
  // get functions from react hook form
  const { register, handleSubmit } = useForm();

  const [selectedEvent, setSelectedEvent] =
    useState<QueriedVolunteerEventData>();

  // TODO: combine event and program into one so users only need to select event
  // that they signed up for (which is automatically under a program)
  const pages = ['Event', 'Numbers', 'Comments'];

  // handle form submission by parsing data and calling createVolunteerLog
  const onSubmit = (data: any) => {
    const results = JSON.stringify({
      eventId: selectedEvent?._id,
      hours: parseInt(data.NumberOfHours),
      date: data.DateOfVisit,
      feedback: data.Comment,
      numBooks: data.NumberOfBooks,
    });
    createVolunteerLog(results);
  };

  // sends a post request to insert the volunteer form
  const createVolunteerLog = async (data: any) => {
    try {
      // Implement endpoint for VolunteerEventApplication and call it
      const response = await fetch('/api/volunteer-logs/create', {
        method: 'POST',
        body: data,
      });
      if (response.status === 200) {
        const message = (await response.json()).message;
        setShowPopup(false);
        successMessage(message);
      } else {
        const message = (await response.json()).message;
        errorMessage(message);
      }
    } catch (err) {
      errorMessage('Sorry an error occurred');
    }
  };

  return (
    <PopupWindow hidePopup={() => setShowPopup(false)}>
      <WindowFlow
        pages={pages}
        onSubmit={handleSubmit(onSubmit)}
        components={[
          // Page 1 - Event
          <LogHoursForm key={pages[0]}>
            <VolunteerSignedEvents
              selectedEvent={selectedEvent}
              setSelectedEvent={setSelectedEvent}
            />
          </LogHoursForm>,

          // Page 2 - Numbers
          <LogHoursForm key={pages[1]}>
            <FormLabel>
              {/* TODO: Add an icon here to display tool tip  */}
              Please log your volunteer hours <br /> (rounded to the nearest
              half hour)
            </FormLabel>
            <FormInput
              {...register('NumberOfHours')}
              type="text"
              placeholder="# of hours"
              pattern="^[1-9]\d*(\.\d+)?$"
              title="Input must be a number"
            />
            <FormLabel>Date of visit</FormLabel>
            <FormInput
              {...register('DateOfVisit')}
              type="date"
              placeholder="MM/DD/YYYY"
              pattern="^((0|1)\d{1})\/((0|1|2)\d{1})\/((19|20)\d{2})"
              title="Input must be in MM/DD/YYYY format"
            />
            <FormLabel>
              How many books did you help distribute, if any?
            </FormLabel>
            <FormInput
              {...register('NumberOfBooks')}
              type="text"
              placeholder="# of books"
              pattern="^[0-9]*$"
              title="Input must be a whole number"
            />
          </LogHoursForm>,

          // Page 3 - Comments
          <LogHoursForm key={pages[2]}>
            <FormLabel>Anything else you&apos;d like to share?</FormLabel>
            <LargeFormInput
              {...register('Comment')}
              placeholder="Comment here..."
            />
            <FormLabel>Would you like to share this comment?</FormLabel>
            <FormLabel>
              <input type="radio" {...register('ShareComment')} value="Yes" />
              Yes
            </FormLabel>
            <FormLabel>
              <input
                type="radio"
                {...register('ShareComment')}
                value="Anonymous"
              />
              Yes, but anonymously
            </FormLabel>
            <FormLabel>
              <input type="radio" {...register('ShareComment')} value="No" />
              No
            </FormLabel>
          </LogHoursForm>,
        ]}
      />
    </PopupWindow>
  );
};

export default LogHoursPopupWindowForm;
