import React, { ChangeEvent, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import RegisterFlow from '@/components/shared/RegisterFlow';
import {
  RightContainer,
  Form,
  Header,
  SectionContainer,
  SectionHeader,
  InputFlex,
  InputText,
  InputContainer,
  Columns,
  CheckboxContainer,
  LabelCheckbox,
  InputCheckbox,
  InputTextarea,
  LabelRadio,
  InputRadio,
  OtherRadio,
} from '@/styles/register.styles';
import { RegisterFormFunctions } from '@/utils/types';

const RegisterPage5 = ({
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
    getValues,
    formState: { errors },
  } = handleForm;

  return (
    <RightContainer>
      <Header>Review information</Header>

      <Form
        id="registerPage5"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <SectionContainer>
          <SectionHeader>Basic Information</SectionHeader>

          <InputFlex>
            <InputText
              {...register('firstName', { required: true })}
              width="45%"
              disabled
            />
            <InputText
              {...register('lastName', { required: true })}
              width="45%"
              disabled
            />
          </InputFlex>

          <InputContainer>
            <InputText
              {...register('birthday', {
                required: true,
              })}
              width="100%"
              disabled
            />
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Contact</SectionHeader>

          <InputContainer>
            <InputText
              {...register('phone', { required: true })}
              width="100%"
              disabled
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('email', { required: true })}
              width="100%"
              disabled
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('password', { required: true })}
              width="45%"
              type="password"
              disabled
            />
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Address</SectionHeader>

          <InputContainer>
            <InputText
              {...register('streetAddress', { required: true })}
              width="100%"
              disabled
            />
          </InputContainer>

          <InputFlex>
            <InputText
              {...register('city', { required: true })}
              width="45%"
              disabled
            />
            <InputText
              {...register('state', { required: true })}
              width="45%"
              disabled
            />
          </InputFlex>

          <InputContainer>
            <InputText
              {...register('zip', { required: true })}
              width="45%"
              disabled
            />
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Emergency Contact</SectionHeader>

          <InputFlex>
            <InputText
              {...register('emergencyFirstName', { required: true })}
              width="45%"
              disabled
            />
            <InputText
              {...register('emergencyLastName', { required: true })}
              width="45%"
              disabled
            />
          </InputFlex>

          <InputContainer>
            <InputText
              {...register('emergencyPhone', { required: true })}
              width="100%"
              disabled
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('emergencyRelationship', { required: true })}
              width="100%"
              disabled
            />
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>
            Are you a member of the following? (Optional)
          </SectionHeader>

          <fieldset style={{ border: 'none' }}>
            <Columns>
              {[
                'Rotary member',
                'Kiwanis member',
                "Current Book'em board member",
                "Former Book'em board member",
                'Junior League member or sustainer',
              ].map(member => (
                <CheckboxContainer key={member}>
                  <LabelCheckbox>
                    <InputCheckbox
                      type="checkbox"
                      checked={formData.members.includes(member)}
                      value={member}
                      disabled
                    />
                    {member}
                  </LabelCheckbox>
                </CheckboxContainer>
              ))}
            </Columns>
          </fieldset>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>
            Why do you want to become a Book&apos;em volunteer?
          </SectionHeader>
          <InputContainer>
            <InputTextarea
              {...register('volunteerReason', { required: true })}
              disabled
            />
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Current Occupation</SectionHeader>

          <fieldset style={{ border: 'none' }}>
            <Columns>
              {['Employed', 'Student', 'Not employed', 'Retired'].map(
                occupation => (
                  <LabelRadio key={occupation}>
                    <InputRadio
                      type="radio"
                      checked={formData.occupation.includes(occupation)}
                      value={occupation}
                      disabled
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
              width="100%"
              disabled
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('occupationBoss', { required: true })}
              width="100%"
              disabled
            />
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Would you like to join our newsletter?</SectionHeader>

          <InputContainer>
            <LabelRadio>
              <InputRadio
                type="radio"
                checked={formData.joinNewsletter.includes('yes')}
                value="yes"
                disabled
              />
              Yes, please!
            </LabelRadio>
            <LabelRadio>
              <InputRadio
                type="radio"
                checked={formData.joinNewsletter.includes('no')}
                value="no"
                disabled
              />
              No, thanks
            </LabelRadio>
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Voluntary gender & race identification</SectionHeader>
          <SectionHeader>Gender</SectionHeader>
          <InputContainer>
            {['Female', 'Male', 'Nonbinary', 'Prefer not to answer'].map(
              gender => (
                <LabelRadio key={gender}>
                  <InputRadio
                    type="radio"
                    checked={formData.gender.includes(gender)}
                    value={gender}
                    disabled
                  />
                  {gender}
                </LabelRadio>
              )
            )}

            <OtherRadio>
              <LabelRadio>
                <InputRadio
                  type="radio"
                  checked={formData.gender == formData.otherGender}
                  value={formData.otherGender}
                  disabled
                />
                Other:
              </LabelRadio>
              <InputText
                {...register('otherGender')}
                width="30%"
                placeholder="Enter text"
                disabled
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
                  checked={formData.race.includes(race)}
                  value={race}
                  disabled
                />
                {race}
              </LabelRadio>
            ))}

            <OtherRadio>
              <LabelRadio>
                <InputRadio
                  type="radio"
                  checked={formData.race == formData.otherRace}
                  value={formData.otherRace}
                  disabled
                />
                Other:
              </LabelRadio>
              <InputText
                {...register('otherRace')}
                width="30%"
                placeholder="Enter text"
                disabled
              />
            </OtherRadio>
          </InputContainer>
        </SectionContainer>
      </Form>

      <RegisterFlow
        currentPage={5}
        form="registerPage5"
        getValues={getValues}
        handleLeftArrow={handleLeftArrow}
        handleRightArrow={handleRightArrow}
      />
    </RightContainer>
  );
};

export default RegisterPage5;
