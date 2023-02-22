import React, { ChangeEvent, useRef, useState } from 'react';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';
import RegisterFlow from '../RegisterFlow';
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
} from '@/styles/register.styles';

const RegisterPage3 = ({
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
    setValue,
    formState: { errors },
  } = useForm();

  /* resume upload handling */
  /* based on https://codefrontend.com/file-upload-reactjs/, only works for files with <= 16 MB I think */

  // state for uploaded resume file
  const [resume, setResume] = useState<File>();

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
      <Header>Almost there</Header>
      <form id="registerPage3" onSubmit={handleSubmit(onSubmit)}>
        <SectionContainer margin="5vh">
          <SectionHeader>Occupation</SectionHeader>
          <InputContainer>
            <InputText
              {...register('jobTitle1', { required: true })}
              placeholder="Job Title 1"
              width="100%"></InputText>
          </InputContainer>
          <InputContainer>
            <InputText
              {...register('jobTitle2')}
              placeholder="Job Title 2 (Optional)"
              width="100%"></InputText>
          </InputContainer>
          {errors.jobTitle1 && printError('A job title is required')}
        </SectionContainer>

        <SectionContainer margin="5vh">
          <SectionHeader>Please upload your resume (Optional)</SectionHeader>
          <ButtonContainer>
            <ResumeButton type="button" onClick={handleUploadClick}>
              {resume ? `${resume.name}` : 'Click here to upload'}
            </ResumeButton>
          </ButtonContainer>
          <input
            type="file"
            {...register('resume')}
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </SectionContainer>

        <SectionContainer>
          <SectionHeader>Would you like to join our newsletter?</SectionHeader>
          <InputRadioVertical>
            <li style={{ marginBottom: '40px' }}>
              <LabelRadio>
                <InputRadio
                  type="radio"
                  value="yes"
                  {...register('joinNewsletter', { required: true })}
                />
                Yes, please!
              </LabelRadio>
            </li>
            <li>
              <LabelRadio>
                <InputRadio
                  type="radio"
                  value="no"
                  {...register('joinNewsletter', { required: true })}
                />
                No, thanks
              </LabelRadio>
            </li>
          </InputRadioVertical>
          {errors.joinNewsletter && printError('A selection is required')}
        </SectionContainer>

        <RegisterFlow
          currentPage={3}
          form="registerPage3"
          handleLeftArrow={handleLeftArrow}
          handleRightArrow={handleRightArrow}
        />
      </form>
    </RightContainer>
  );
};

export default RegisterPage3;
