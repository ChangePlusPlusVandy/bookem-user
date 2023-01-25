import React from 'react';
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
`;

const CustomForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
            {...register('Number of Hours')}
            type="text"
            placeholder="# of hours"></FormInput>
          <FormLabel>Date of visit</FormLabel>
          <FormInput
            {...register('Date of Visit')}
            type="text"
            placeholder="MM/DD/YYYY"></FormInput>
          <FormLabel>How many books did you help distribute, if any?</FormLabel>
          <FormInput
            {...register('Number of Books')}
            type="text"
            placeholder="# of books"></FormInput>
          <FormLabel>Anything else you&apos;d like to share?</FormLabel>
          <LargeFormInput
            {...register('Comment')}
            placeholder="Comment here..."></LargeFormInput>
          <FormLabel>Would you like to share this comment?</FormLabel>
          <FormLabel>
            <input
              type="radio"
              {...register('Share Comment')}
              value="Yes"></input>
            Yes
          </FormLabel>
          <FormLabel>
            <input
              type="radio"
              {...register('Share Comment')}
              value="Anonymous"></input>
            Yes, but anonymously
          </FormLabel>
          <FormLabel>
            <input
              type="radio"
              {...register('Share Comment')}
              value="No"></input>
            No
          </FormLabel>
          <SubmitButton type="submit"></SubmitButton>
        </List>
      </FormBox>
    </form>
  );
};

export default CustomForm;
