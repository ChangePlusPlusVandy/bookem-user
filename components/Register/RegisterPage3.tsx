import React, { useEffect, useState } from 'react';
import { SubmitHandler, FieldValues } from 'react-hook-form';
import { RegisterFormFunctions } from '@/utils/types';
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
  LoginLink,
} from '@/styles/register.styles';

const RegisterPage3 = ({
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
        <SectionContainer>
          <SectionHeader>Current occupation</SectionHeader>

          <Fieldset>
            <Columns>
              {['Employed', 'Student', 'Not employed', 'Retired'].map(
                occupation => (
                  <LabelRadio key={occupation}>
                    <InputRadio
                      {...register('occupation', { required: true })}
                      type="radio"
                      value={occupation}
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
              placeholder="Occupation Title"
              width="100%"
              onKeyDown={handleEnter}
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('occupationOrg', { required: true })}
              placeholder="Name of Employer or School"
              width="100%"
              onKeyDown={handleEnter}
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
                {...register('joinNewsletter', { required: true })}
                type="radio"
                value="yes"
                onKeyDown={handleEnter}
              />
              Yes, please!
            </LabelRadio>
            <LabelRadio>
              <InputRadio
                {...register('joinNewsletter', { required: true })}
                type="radio"
                value="no"
                onKeyDown={handleEnter}
              />
              No, thanks
            </LabelRadio>
          </JoinNewsletterContainer>
          {errors.joinNewsletter && printError('A selection is required')}
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>How did you hear about us?</SectionHeader>

          <InputContainer>
            <InputText
              {...register('sourceHeardFrom', { required: true })}
              placeholder="Source"
              width="100%"
              onKeyDown={handleEnter}
            />
          </InputContainer>

          {errors.sourceHeardFrom && printError('A response is required')}
        </SectionContainer>
        <LoginLink href="/login">Already have an account? Login here</LoginLink>
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
