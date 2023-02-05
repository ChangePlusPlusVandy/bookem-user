import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const FormBox = styled.div`
  display: flex;
  justify-content: center;
`;

const FormHeader = styled.legend`
  font-weight: bold;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0;
`;

const FormLabel = styled.label`
  margin-top: 20px;
`;

const FormInput = styled.input`
  margin-top: 20px;
  border-radius: 10px;
  height: 25px;
`;

const LargeFormInput = styled.textarea`
  margin-top: 20px;
  border-radius: 10px;
  width: 400px;
  height: 100px;
  font-family: 'Times New Roman', serif;
  font-size: 1em;
`;

const SubmitButton = styled.input`
  margin-left: 150px;
  margin-top: 40px;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
`;

const LogHoursForm = () => {
  const { register, handleSubmit } = useForm();
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

  async function createVolunteerLog(data: any) {
    await fetch('/api/volunteerLogs/create', {
      method: 'POST',
      body: data,
    });
  }

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
