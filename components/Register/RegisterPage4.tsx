import React, { ChangeEvent, useRef, useState } from 'react';
import { SubmitHandler, FieldValues, UseFormReturn } from 'react-hook-form';
import RegisterFlow from '@/components/shared/RegisterFlow';
import {
  RightContainer,
  Form,
  Header,
  SectionContainer,
  SectionHeader,
  InputContainer,
  InputText,
  ButtonContainer,
  InputRadioVertical,
  LabelRadio,
  InputRadio,
  Button,
  CheckboxColumns,
  CheckboxContainer,
  LabelCheckbox,
  InputCheckbox,
} from '@/styles/register.styles';
import { RegisterFormFunctions } from '@/utils/types';

// TODO: IS THIS THE RIGHT WAY TO DO THIS MOBILE RESPONSIVE THING FOR FORM COMPONENT?

const RegisterPage4 = ({
  formFunctions: {
    handleForm,
    onSubmit,
    handleEnter,
    printError,
    handleLeftArrow,
    handleRightArrow,
  },
}: {
  formFunctions: RegisterFormFunctions;
}) => {
  // react hook form
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = handleForm;

  return (
    <RightContainer>
      <Header>Finally</Header>

      <Form
        id="registerPage4"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <SectionContainer>
          <SectionHeader>Voluntary gender & race identification</SectionHeader>
          <SectionHeader>Gender</SectionHeader>
          <InputRadioVertical>
            {['Female', 'Male', 'Nonbinary', 'Prefer not to answer'].map(
              gender => (
                <LabelRadio key={gender}>
                  <InputRadio
                    type="radio"
                    value={gender}
                    {...register('gender', { required: true })}
                    onKeyDown={handleEnter}
                  />
                  {gender}
                </LabelRadio>
              )
            )}
          </InputRadioVertical>
          {errors.gender && printError('A selection is required')}

          <SectionHeader>Race</SectionHeader>
          <InputRadioVertical>
            {[
              'Asian',
              'Black or African American',
              'Hispanic or Latino',
              'Native Hawaiian or Other Pacific Islander',
              'White',
              'Two or More Races',
            ].map(race => (
              <LabelRadio key={race}>
                <InputRadio
                  type="radio"
                  value={race}
                  {...register('race', { required: true })}
                  onKeyDown={handleEnter}
                />
                {race}
              </LabelRadio>
            ))}
          </InputRadioVertical>
          {errors.race && printError('A selection is required')}
        </SectionContainer>
      </Form>

      <RegisterFlow
        currentPage={4}
        form="registerPage4"
        getValues={getValues}
        handleLeftArrow={handleLeftArrow}
        handleRightArrow={handleRightArrow}
      />
    </RightContainer>
  );
};

export default RegisterPage4;
