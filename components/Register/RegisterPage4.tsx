import React, { useState } from 'react';
import { SubmitHandler, FieldValues } from 'react-hook-form';
import { RegisterFormData, RegisterFormFunctions } from '@/utils/types';
import RegisterFlow from '@/components/shared/RegisterFlow';
import {
  RightContainer,
  Form,
  Header,
  SectionContainer,
  SectionHeader,
  InputContainer,
  InputText,
  LabelRadio,
  InputRadio,
  OtherRadio,
} from '@/styles/register.styles';

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
  formData: RegisterFormData;
}) => {
  // react hook form
  const { register, handleSubmit, getValues } = handleForm;

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
                    {...register('gender')}
                    type="radio"
                    value={gender}
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
                placeholder="Enter text"
                value={otherGender}
                onChange={e => setOtherGender(e.target.value)}
                width="30%"
                onKeyDown={handleEnter}
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
                  {...register('race')}
                  type="radio"
                  value={race}
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
                placeholder="Enter text"
                value={otherRace}
                width="30%"
                onChange={e => setOtherRace(e.target.value)}
                onKeyDown={handleEnter}
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
