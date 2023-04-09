import React, { ChangeEvent, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import RegisterFlow from '@/components/shared/RegisterFlow';
import {
  RightContainer,
  Form,
  Header,
  SectionContainer,
  SectionHeader,
  InputFlex,
  Columns,
  LabelCheckbox,
  InputCheckbox,
  InputTextarea,
  InputContainer,
  CheckboxContainer,
  InputText,
  Fieldset,
} from '@/styles/register.styles';
import { RegisterFormData, RegisterFormFunctions } from '@/utils/types';
import { Media } from '@/lib/media';

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
  formData,
}: {
  formFunctions: RegisterFormFunctions;
  formData: RegisterFormData;
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
  const [phoneValue, setPhoneValue] = useState(formData.emergencyPhone);

  // updates phone number with correct format
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };

  /* window size handling */

  // gets current window size
  const getCurrentDimension = () => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    } else {
      return {
        width: 768,
        height: 768,
      };
    }
  };

  // state for getting window size
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // updates window size state
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

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

        <SectionContainer>
          <SectionHeader>
            Are you a member of the following? (Optional)
          </SectionHeader>

          <Fieldset>
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
          </Fieldset>
        </SectionContainer>

        <Media lessThan="sm">{/** Moved to next register page */}</Media>
        <Media greaterThanOrEqual="sm">
          <SectionContainer>
            <SectionHeader>
              Why do you want to become a Book&apos;em volunteer?
            </SectionHeader>
            <InputContainer>
              <InputTextarea
                placeholder="Start here..."
                {...register('volunteerReason', {
                  required: screenSize.width > 767,
                })}
              />
            </InputContainer>
            {errors.volunteerReason && printError('A response is required')}
          </SectionContainer>
        </Media>

        <Media lessThan="sm">
          <SectionContainer>
            <SectionHeader>How did you hear about us?</SectionHeader>

            <InputContainer>
              <InputText
                {...register('sourceHeardFrom', {
                  required: screenSize.width <= 767,
                })}
                onKeyDown={handleEnter}
                placeholder="Source"
                width="100%"
              />
            </InputContainer>

            {errors.sourceHeardFrom && printError('A response is required')}
          </SectionContainer>
        </Media>
        <Media greaterThanOrEqual="sm">
          {/** Moved to next register page */}
        </Media>
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
