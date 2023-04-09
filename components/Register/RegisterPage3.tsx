import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
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
  LabelRadio,
  InputRadio,
  Columns,
  InputTextarea,
  JoinNewsletterContainer,
  Fieldset,
} from '@/styles/register.styles';
import { RegisterFormData, RegisterFormFunctions } from '@/utils/types';
import { Media } from '@/lib/media';

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
  formData: RegisterFormData;
}) => {
  // react hook form
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = handleForm;

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
      <Header>Almost there</Header>

      <Form
        id="registerPage3"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <Media lessThan="sm">
          <SectionContainer>
            <SectionHeader>
              Why do you want to become a Book&apos;em volunteer?
            </SectionHeader>
            <InputContainer>
              <InputTextarea
                placeholder="Start here..."
                {...register('volunteerReason', {
                  required: screenSize.width <= 767,
                })}
              />
            </InputContainer>
            {errors.volunteerReason && printError('A response is required')}
          </SectionContainer>
        </Media>
        <Media greaterThanOrEqual="sm">
          {/** Moved to previous register page */}
        </Media>

        <SectionContainer>
          <SectionHeader>Current occupation</SectionHeader>

          <Fieldset>
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
          </Fieldset>

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
              {...register('occupationOrg', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Name of Employer or School"
              width="100%"
            />
          </InputContainer>

          {errors.occupation && printError('A selection is required')}
          {errors.occupationTitle &&
            printError('An occupation title is required')}
          {errors.occupationOrg &&
            printError('An employer/school name is required')}
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>
            Would you like to receive our newsletter?
          </SectionHeader>

          <JoinNewsletterContainer>
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
          </JoinNewsletterContainer>
          {errors.joinNewsletter && printError('A selection is required')}
        </SectionContainer>

        <Media lessThan="sm">{/** Moved to previous register page */}</Media>
        <Media greaterThanOrEqual="sm">
          <SectionContainer>
            <SectionHeader>How did you hear about us?</SectionHeader>

            <InputContainer>
              <InputText
                {...register('sourceHeardFrom', {
                  required: screenSize.width > 767,
                })}
                onKeyDown={handleEnter}
                placeholder="Source"
                width="100%"
              />
            </InputContainer>

            {errors.sourceHeardFrom && printError('A response is required')}
          </SectionContainer>
        </Media>
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
