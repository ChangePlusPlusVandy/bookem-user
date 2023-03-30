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
  LabelRadio,
  InputRadio,
  Columns,
  LabelCheckbox,
  InputCheckbox,
  InputTextarea,
  InputContainer,
  CheckboxContainer,
  InputText,
} from '@/styles/register.styles';
import { RegisterFormFunctions } from '@/utils/types';

// TODO: HAVE 1 FORMATPHONENUMBER FUNCTION

/**
 * auto-format inputted phone number
 * adapted from https://tomduffytech.com/how-to-format-phone-number-in-react/
 * @param value inputted phone number
 * @returns phone number in the form of (xxx) xxx-xxxx
 */
const formatPhoneNumber = (value: string) => {
  // if no input, return
  if (!value) return value;

  // phone number only has numbers
  const phoneNumber: string = value.replace(/[^\d]/g, '');

  // length of phone number
  const phoneNumberLength: number = phoneNumber.length;

  // auto-format based on length of numbers inputted
  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

const RegisterPage2 = ({
  formFunctions: {
    handleForm,
    onSubmit,
    handleEnter,
    printError,
    handleLeftArrow,
    handleRightArrow,
  },
  formPhoneData,
}: {
  formFunctions: RegisterFormFunctions;
  formPhoneData: string;
}) => {
  // react hook form
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = handleForm;

  /* phone number format handling */

  // state for phone number
  const [phoneValue, setPhoneValue] = useState<string>(formPhoneData);

  // updates phone number with correct format
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  return (
    <RightContainer>
      <Header>Next up</Header>

      <Form
        id="registerPage2"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <SectionContainer>
          <SectionHeader>Emergency Contact</SectionHeader>

          <InputFlex>
            <InputText
              {...register('emergencyFirstName', { required: true })}
              onKeyDown={handleEnter}
              placeholder="First name"
              width="45%"
            />
            <InputText
              {...register('emergencyLastName', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Last name"
              width="45%"
            />
          </InputFlex>

          <InputContainer>
            <InputText
              {...register('emergencyPhone', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Phone number"
              onChange={e => handlePhone(e)}
              value={phoneValue}
              width="100%"
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('emergencyRelationship', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Relationship"
              width="100%"
            />
          </InputContainer>

          {errors.emergencyFirstName && printError('First name is required')}
          {errors.emergencyLastName && printError('Last name is required')}
          {errors.emergencyPhone &&
            phoneValue == '' &&
            printError('Phone number is required')}
          {errors.emergencyRelationship &&
            printError('Relationship is required')}
        </SectionContainer>
        {/* <SectionContainer>
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
        </SectionContainer> */}

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
                      value={member}
                      {...register('members')}
                      onKeyDown={handleEnter}
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
              placeholder="Start here..."
              {...register('volunteerReason', { required: true })}
            />
          </InputContainer>
          {errors.volunteerReason && printError('A response is required')}
        </SectionContainer>
      </Form>

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
