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
  OtherRadio,
} from '@/styles/register.styles';
import { RegisterFormFunctions } from '@/utils/types';

const RegisterPage4 = ({
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
  formData: any;
}) => {
  // react hook form
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = handleForm;

  // state for other gender
  const [otherGender, setOtherGender] = useState(formData.otherGender);

  // state for other race
  const [otherRace, setOtherRace] = useState(formData.otherRace);

  return (
    <RightContainer>
      <Header>Finally</Header>

      <Form
        id="registerPage4"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <SectionContainer>
          <SectionHeader>Voluntary gender & race identification</SectionHeader>
          <SectionHeader>Gender</SectionHeader>
          <InputContainer>
            {['Female', 'Male', 'Nonbinary', 'Prefer not to answer'].map(
              gender => (
                <LabelRadio key={gender}>
                  <InputRadio
                    type="radio"
                    value={gender}
                    {...register('gender')}
                    onKeyDown={handleEnter}
                  />
                  {gender}
                </LabelRadio>
              )
            )}

            <OtherRadio>
              <LabelRadio>
                <InputRadio
                  {...register('gender')}
                  type="radio"
                  value={'other'}
                  onKeyDown={handleEnter}
                />
                Other:
              </LabelRadio>
              <InputText
                {...register('otherGender')}
                value={otherGender}
                onKeyDown={handleEnter}
                placeholder="Enter text"
                onChange={e => setOtherGender(e.target.value)}
                width="30%"
              />
            </OtherRadio>
          </InputContainer>

          <SectionHeader>Race</SectionHeader>
          <InputContainer>
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
                  {...register('race')}
                  onKeyDown={handleEnter}
                />
                {race}
              </LabelRadio>
            ))}

            <OtherRadio>
              <LabelRadio>
                <InputRadio
                  {...register('race')}
                  type="radio"
                  value={'other'}
                  onKeyDown={handleEnter}
                />
                Other:
              </LabelRadio>
              <InputText
                {...register('otherRace')}
                value={otherRace}
                onKeyDown={handleEnter}
                placeholder="Enter text"
                onChange={e => setOtherRace(e.target.value)}
                width="30%"
              />
            </OtherRadio>
          </InputContainer>
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
