import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import RegisterFlow from '../RegisterFlow';
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
  TextareaContainer,
  InputTextarea,
} from '@/styles/register.styles';

const RegisterPage2 = ({
  props: { onSubmit, printError, handleLeftArrow, handleRightArrow },
}: {
  props: {
    onSubmit: SubmitHandler<FieldValues>;
    printError: Function;
    handleLeftArrow: Function;
    handleRightArrow: Function;
  };
}) => {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <RightContainer>
      <Header>Next up</Header>
      <form id="registerPage2" onSubmit={handleSubmit(onSubmit)}>
        <SectionContainer margin="4vh">
          <SectionHeader>Select age range</SectionHeader>
          <InputFlex>
            <LabelRadio>
              <InputRadio
                type="radio"
                value="under18"
                {...register('ageRange', { required: true })}
              />
              Under 18
            </LabelRadio>
            <LabelRadio>
              <InputRadio
                type="radio"
                value="18to45"
                {...register('ageRange', { required: true })}
              />
              18-45
            </LabelRadio>
            <LabelRadio>
              <InputRadio
                type="radio"
                value="45plus"
                {...register('ageRange', { required: true })}
              />
              45+
            </LabelRadio>
          </InputFlex>
          {errors.ageRange && printError('A selection is required')}
        </SectionContainer>

        <SectionContainer margin="4vh">
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
              ].map(member => (
                <li key={member}>
                  <LabelCheckbox>
                    <InputCheckbox
                      type="checkbox"
                      value={member}
                      {...register('members')}
                    />
                    {member}
                  </LabelCheckbox>
                </li>
              ))}
            </CheckboxColumns>
            <LabelCheckbox>
              <InputCheckbox
                type="checkbox"
                value="Junior League member or sustainer"
                {...register('members')}
              />
              Junior League member or sustainer
            </LabelCheckbox>
          </fieldset>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>
            Why do you want to become a community volunteer?
          </SectionHeader>
          <TextareaContainer>
            <InputTextarea
              placeholder="Start here..."
              {...register('volunteerReason', { required: true })}
            />
          </TextareaContainer>
          {errors.volunteerReason && printError('A response is required')}
        </SectionContainer>

        <RegisterFlow
          currentPage={2}
          form="registerPage2"
          handleLeftArrow={handleLeftArrow}
          handleRightArrow={handleRightArrow}
        />
      </form>
    </RightContainer>
  );
};

export default RegisterPage2;
