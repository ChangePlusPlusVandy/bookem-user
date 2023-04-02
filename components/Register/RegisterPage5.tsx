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
  FormBorder,
  ButtonContainer,
  Button,
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

      <FormBorder>
        <Form
          id="registerPage5"
          onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
          <SectionContainer>
            <SectionHeader>Basic Information</SectionHeader>

            <InputFlex>
              <InputText value={formData.firstName} width="45%" disabled />
              <InputText value={formData.lastName} width="45%" disabled />
            </InputFlex>

            <InputContainer>
              <InputText value={formData.birthday} width="100%" disabled />
            </InputContainer>
          </SectionContainer>

          <SectionContainer>
            <SectionHeader>Contact</SectionHeader>

            <InputContainer>
              <InputText value={formData.phone} width="100%" disabled />
            </InputContainer>

            <InputContainer>
              <InputText value={formData.email} width="100%" disabled />
            </InputContainer>

            <InputContainer>
              <InputText
                value={formData.password}
                width="45%"
                type="password"
                disabled
              />
            </InputContainer>
          </SectionContainer>

          <SectionContainer>
            <SectionHeader>Address</SectionHeader>

            <InputContainer>
              <InputText value={formData.streetAddress} width="100%" disabled />
            </InputContainer>

            <InputFlex>
              <InputText value={formData.city} width="45%" disabled />
              <InputText value={formData.state} width="45%" disabled />
            </InputFlex>

            <InputContainer>
              <InputText value={formData.zip} width="45%" disabled />
            </InputContainer>
          </SectionContainer>

          <SectionContainer>
            <SectionHeader>Emergency Contact</SectionHeader>

            <InputFlex>
              <InputText
                value={formData.emergencyFirstName}
                width="45%"
                disabled
              />
              <InputText
                value={formData.emergencyLastName}
                width="45%"
                disabled
              />
            </InputFlex>

            <InputContainer>
              <InputText
                value={formData.emergencyPhone}
                width="100%"
                disabled
              />
            </InputContainer>

            <InputContainer>
              <InputText
                value={formData.emergencyRelationship}
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
              <InputTextarea value={formData.volunteerReason} disabled />
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
                value={formData.occupationTitle}
                width="100%"
                disabled
              />
            </InputContainer>

            <InputContainer>
              <InputText
                value={formData.occupationBoss}
                width="100%"
                disabled
              />
            </InputContainer>
          </SectionContainer>

          <SectionContainer>
            <SectionHeader>
              Would you like to join our newsletter?
            </SectionHeader>

            <InputContainer>
              <LabelRadio>
                <InputRadio
                  type="radio"
                  checked={formData.joinNewsletter.includes('yes')}
                  disabled
                />
                Yes, please!
              </LabelRadio>
              <LabelRadio>
                <InputRadio
                  type="radio"
                  checked={formData.joinNewsletter.includes('no')}
                  disabled
                />
                No, thanks
              </LabelRadio>
            </InputContainer>
          </SectionContainer>

          <SectionContainer>
            <SectionHeader>
              Voluntary gender & race identification
            </SectionHeader>
            <SectionHeader>Gender</SectionHeader>
            <InputContainer>
              {['Female', 'Male', 'Nonbinary', 'Prefer not to answer'].map(
                gender => (
                  <LabelRadio key={gender}>
                    <InputRadio
                      type="radio"
                      checked={formData.gender.includes(gender)}
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
                    checked={formData.gender === 'other'}
                    disabled
                  />
                  Other:
                </LabelRadio>
                <InputText
                  value={formData.otherGender}
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
                    disabled
                  />
                  {race}
                </LabelRadio>
              ))}

              <OtherRadio>
                <LabelRadio>
                  <InputRadio
                    type="radio"
                    checked={formData.race === 'other'}
                    disabled
                  />
                  Other:
                </LabelRadio>
                <InputText
                  value={formData.otherRace}
                  width="30%"
                  placeholder="Enter text"
                  disabled
                />
              </OtherRadio>
            </InputContainer>
          </SectionContainer>
        </Form>
      </FormBorder>

      <ButtonContainer>
        <Button form="registerPage5">Submit</Button>
      </ButtonContainer>

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
