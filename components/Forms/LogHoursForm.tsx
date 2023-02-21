import {
  FormBox,
  FormHeader,
  FormInput,
  FormLabel,
  LargeFormInput,
  List,
  SubmitButton,
} from '@/styles/components/Forms/logHoursForm.styles';
import React from 'react';
import { useForm } from 'react-hook-form';

const LogHoursForm = () => {
  // get functions from react hook form
  const { register, handleSubmit } = useForm();

  // handle form submission by parsing data and calling createVolunteerLog
  const onSubmit = (data: any) => {
    const results = JSON.stringify({
      // program: data.Program,
      hours: parseInt(data.NumberOfHours),
      date: data.DateOfVisit,
      feedback: data.Comment,
      numBooks: data.NumberOfBooks,
    });
    console.log(results);
    createVolunteerLog(results);
  };

  // sends a post request to insert the volunteer form
  const createVolunteerLog = async (data: any) => {
    // TODO: implement endpoint for VolunteerProgramApplication and call it
    await fetch('/api/volunteerLogs/create', {
      method: 'POST',
      body: data,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormBox>
        <List>
          <FormHeader>Please select one program</FormHeader>
          <FormLabel>
            <input {...register('Program')} type="radio" value="RIF"></input>
            Reading is Fundamental (RIF)
          </FormLabel>
          <FormLabel>
            <input {...register('Program')} type="radio" value="RFR"></input>
            Ready for Reading (RFR)
          </FormLabel>
          <FormLabel>
            <input {...register('Program')} type="radio" value="BFNK"></input>
            Books for Nashville Kids (BFNK)
          </FormLabel>
          <FormLabel>Please log volunteer hours</FormLabel>
          <FormInput
            {...register('NumberOfHours')}
            type="text"
            placeholder="# of hours"
            pattern="^[1-9]\d*(\.\d+)?$"
            title="Input must be a number"></FormInput>
          <FormLabel>Date of visit</FormLabel>
          <FormInput
            {...register('DateOfVisit')}
            type="text"
            placeholder="MM/DD/YYYY"
            pattern="^((0|1)\d{1})\/((0|1|2)\d{1})\/((19|20)\d{2})"
            title="Input must be in MM/DD/YYYY format"></FormInput>
          <FormLabel>How many books did you help distribute, if any?</FormLabel>
          <FormInput
            {...register('NumberOfBooks')}
            type="text"
            placeholder="# of books"
            pattern="^[0-9]*$"
            title="Input must be a whole number"></FormInput>
          <FormLabel>Anything else you&apos;d like to share?</FormLabel>
          <LargeFormInput
            {...register('Comment')}
            placeholder="Comment here..."></LargeFormInput>
          <FormLabel>Would you like to share this comment?</FormLabel>
          <FormLabel>
            <input
              type="radio"
              {...register('ShareComment')}
              value="Yes"></input>
            Yes
          </FormLabel>
          <FormLabel>
            <input
              type="radio"
              {...register('ShareComment')}
              value="Anonymous"></input>
            Yes, but anonymously
          </FormLabel>
          <FormLabel>
            <input
              type="radio"
              {...register('ShareComment')}
              value="No"></input>
            No
          </FormLabel>
          <SubmitButton type="submit"></SubmitButton>
        </List>
      </FormBox>
    </form>
  );
};

export default LogHoursForm;