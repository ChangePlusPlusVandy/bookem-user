import React, {
  ChangeEvent,
  KeyboardEventHandler,
  useRef,
  useState,
} from 'react';
import { SubmitHandler, FieldValues, UseFormReturn } from 'react-hook-form';
import RegisterFlow from '@/components/RegisterFlow';
import {
  RightContainer,
  Header,
  SectionContainer,
  SectionHeader,
  InputContainer,
  InputText,
  ButtonContainer,
  ResumeButton,
  InputRadioVertical,
  LabelRadio,
  InputRadio,
  Button,
} from '@/styles/register.styles';
import { RegisterFormFunctions } from '@/types/types';

const RegisterPage3 = ({
  formFunctions: {
    handleForm,
    onSubmit,
    handleEnter,
    printError,
    handleLeftArrow,
    handleRightArrow,
  },
  formResumeData,
}: {
  formFunctions: RegisterFormFunctions;
  formResumeData: File | undefined;
}) => {
  // react hook form
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = handleForm;

  /* resume upload handling */
  /* based on https://codefrontend.com/file-upload-reactjs/, only works for files with <= 16 MB I think */

  // state for uploaded resume file
  const [resume, setResume] = useState<File | undefined>(formResumeData);

  // object that helps with handling clicking on resume upload button
  const inputRef = useRef<HTMLInputElement | null>(null);

  // handles clicking on resume upload button
  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  // updates name of resume upload button to the name of the file uploaded
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setValue('resume', e.target.files[0]);
    setResume(e.target.files[0]);
  };

  return (
    <RightContainer>
      <form
        id="registerPage3"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <Header>Almost there</Header>

        <SectionContainer>
          <SectionHeader>Occupation</SectionHeader>

          <InputContainer>
            <InputText
              {...register('jobTitle1', { required: true })}
              onKeyDown={handleEnter}
              placeholder="Job Title 1"
              width="100%"
            />
          </InputContainer>

          <InputContainer>
            <InputText
              {...register('jobTitle2')}
              onKeyDown={handleEnter}
              placeholder="Job Title 2 (Optional)"
              width="100%"
            />
          </InputContainer>

          {errors.jobTitle1 && printError('A job title is required')}
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Please upload your resume (Optional)</SectionHeader>

          <ButtonContainer>
            <ResumeButton type="button" onClick={handleUploadClick}>
              {resume ? `${resume.name}` : 'Click here to upload'}
            </ResumeButton>
          </ButtonContainer>

          <input
            type="file"
            {...register('resume')}
            onKeyDown={handleEnter}
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Would you like to join our newsletter?</SectionHeader>

          <InputRadioVertical>
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
          </InputRadioVertical>
          {errors.joinNewsletter && printError('A selection is required')}
        </SectionContainer>

        <ButtonContainer>
          <Button>Submit</Button>
        </ButtonContainer>
      </form>

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
