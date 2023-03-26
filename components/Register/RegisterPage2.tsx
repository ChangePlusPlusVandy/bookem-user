import React from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import RegisterFlow from '@/components/shared/RegisterFlow';
import {
  RightContainer,
  Header,
  SectionContainer,
  SectionHeader,
  InputFlex,
  LabelRadio,
  InputRadio,
  CheckboxColumns,
  LabelCheckbox,
  InputCheckbox,
  InputTextarea,
  InputContainer,
  CheckboxContainer,
} from '@/styles/register.styles';
import { RegisterFormFunctions } from '@/utils/types';

const RegisterPage2 = ({
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
    getValues,
    formState: { errors },
  } = handleForm;

  return (
    <RightContainer>
      <form
        id="registerPage2"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <Header>Next up</Header>

        <SectionContainer>
          <SectionHeader>Select age range</SectionHeader>

          <InputFlex>
            <LabelRadio>
              <InputRadio
                type="radio"
                value="under18"
                {...register('ageRange', { required: true })}
                onKeyDown={handleEnter}
              />
              Under 18
            </LabelRadio>
            <LabelRadio>
              <InputRadio
                type="radio"
                value="18to45"
                {...register('ageRange', { required: true })}
                onKeyDown={handleEnter}
              />
              18-45
            </LabelRadio>
            <LabelRadio>
              <InputRadio
                type="radio"
                value="45plus"
                {...register('ageRange', { required: true })}
                onKeyDown={handleEnter}
              />
              45+
            </LabelRadio>
          </InputFlex>

          {errors.ageRange && printError('A selection is required')}
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>
            Are you a member of the following? (Optional)
          </SectionHeader>

          <fieldset style={{ border: 'none' }}>
            <CheckboxColumns>
              {[
                'Rotary member',
                'Kiwanis member',
                'Current board member',
                'Former board member',
                'Junior League member or sustainer',
              ].map(member => (
                <CheckboxContainer key={member}>
                  <LabelCheckbox>
                    <InputCheckbox
                      type="checkbox"
                      value={member}
                      {...register('members')}
                      onKeyDown={handleEnter}
                    />
                    {member}
                  </LabelCheckbox>
                </CheckboxContainer>
              ))}
            </CheckboxColumns>
          </fieldset>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>
            Why do you want to become a community volunteer?
          </SectionHeader>
          <InputContainer>
            <InputTextarea
              placeholder="Start here..."
              {...register('volunteerReason', { required: true })}
            />
          </InputContainer>
          {errors.volunteerReason && printError('A response is required')}
        </SectionContainer>
      </form>

      <RegisterFlow
        currentPage={2}
        form="registerPage2"
        getValues={getValues}
        handleLeftArrow={handleLeftArrow}
        handleRightArrow={handleRightArrow}
      />
    </RightContainer>
  );
};

export default RegisterPage2;
