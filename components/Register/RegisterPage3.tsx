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
  LabelRadio,
  InputRadio,
  Button,
  Columns,
  CheckboxContainer,
  LabelCheckbox,
  InputCheckbox,
} from '@/styles/register.styles';
import { RegisterFormFunctions } from '@/utils/types';

const RegisterPage3 = ({
  formFunctions: {
    handleForm,
    onSubmit,
    handleEnter,
    printError,
    handleLeftArrow,
    handleRightArrow,
  },
  formData,
}: {
  formFunctions: RegisterFormFunctions;
  formData: any; // TODO: ADD CORRECT TYPE, MAYBE ONLY TAKE A FEW FIELDS AS PROP??
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
      <Header>Almost there</Header>

      <Form
        id="registerPage3"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <SectionContainer>
          <SectionHeader>Current Occupation</SectionHeader>

          <fieldset style={{ border: 'none' }}>
            <Columns>
              {['Employed', 'Student', 'Not employed', 'Retired'].map(
                occupation => (
                  <LabelRadio key={occupation}>
                    <InputRadio
                      type="radio"
                      value={occupation}
                      {...register('occupation', { required: true })}
                      onKeyDown={handleEnter}
                    />
                    {occupation}
                  </LabelRadio>
                )
              )}
            </Columns>
          </fieldset>

          <InputContainer>
            <InputText
              {...register('occupationTitle', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Occupation Title"
              width="100%"
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('occupationBoss', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Name of Employer or School"
              width="100%"
            />
          </InputContainer>

          {errors.occupation && printError('A selection is required')}
          {errors.occupationTitle &&
            printError('An occupation title is required')}
          {errors.occupationBoss &&
            printError('An employer/school name is required')}
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Would you like to join our newsletter?</SectionHeader>

          <InputContainer>
            <LabelRadio>
              <InputRadio
                type="radio"
                value="yes"
                {...register('joinNewsletter', { required: true })}
                onKeyDown={handleEnter}
              />
              Yes, please!
            </LabelRadio>
            <LabelRadio>
              <InputRadio
                type="radio"
                value="no"
                {...register('joinNewsletter', { required: true })}
                onKeyDown={handleEnter}
              />
              No, thanks
            </LabelRadio>
          </InputContainer>
          {errors.joinNewsletter && printError('A selection is required')}
        </SectionContainer>
      </Form>

      <RegisterFlow
        currentPage={3}
        form="registerPage3"
        getValues={getValues}
        handleLeftArrow={handleLeftArrow}
        handleRightArrow={handleRightArrow}
      />
    </RightContainer>
  );
};

export default RegisterPage3;
