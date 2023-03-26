import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserData } from 'bookem-shared/src/types/database';
import LeftDisplay from '@/components/Register/LeftDisplay';
import RegisterPage1 from '@/components/Register/RegisterPage1';
import RegisterPage2 from '@/components/Register/RegisterPage2';
import RegisterPage3 from '@/components/Register/RegisterPage3';
import RegisterPage4 from '@/components/Register/RegisterPage4';
import LastRegisterPage from '@/components/Register/LastRegisterPage';
import { Container, Error } from '@/styles/register.styles';
import { RegisterFormFunctions } from '@/utils/types';
import { Media, MediaContextProvider } from '@/lib/media';

/**
 * format error messages
 * @param message error message to be shown
 * @returns formatted error message
 */
const printError = (message: string) => {
  return (
    <>
      <Error>{message}</Error>
      <br />
    </>
  );
};

const RegisterPage = () => {
  // state for form data
  // TODO: add type to formdata
  const [formData, setFormData] = useState({
    page: 1,
    firstName: '',
    lastName: '',
    birthday: '',
    phone: '',
    email: '',
    password: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    emergencyFirstName: '',
    emergencyLastName: '',
    emergencyPhone: '',
    emergencyRelationship: '',
    members: [],
    volunteerReason: '',
    occupationTitle: '',
    occupationBoss: '',
    joinNewsletter: '',
    gender: '',
    race: '',
  });

  /* page number handling */

  // variable for storing the page that user wants to go to
  let nextPage = formData.page;

  // updates to the previous register page, saves data but not submit form
  const handleLeftArrow = (data: any) => {
    console.log(data);
    setFormData({ ...formData, page: formData.page - 1, ...data });
  };

  // updates nextPage to be the upcoming register page
  const handleRightArrow = () => {
    nextPage = formData.page + 1;
  };

  /* form handling */

  // react hook form
  const handleForm = useForm();

  // disable submitting form data using enter key (used for all form inputs)
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') event.preventDefault();
  };

  // handle form data upon submission on each page
  const onSubmit = async (data: any) => {
    // update formData state with new form data and next register page number
    console.log(data);
    setFormData({ ...formData, page: nextPage, ...data });

    // when user clicks on final submit button on page 5
    if (formData.page === 5 && nextPage === formData.page) {
      // check if user is registered successfully
      const error = await onFinished(formData);
      console.log(error);

      // if successful, go to last register page
      if (!error) setFormData({ ...formData, page: formData.page + 1 });
      // otherwise, send alert to user with error message
      else alert(error.message);
    }
    console.log(formData);
  };

  // attempt to create user in database using form data
  const onFinished = async (data: any) => {
    // put form data into correct format for the user schema
    const userData: UserData = {
      name: data.firstName + ' ' + data.lastName,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address:
        data.streetAddress +
        ', ' +
        data.city +
        ', ' +
        data.state +
        ' ' +
        data.zip,
      sourceHeardFrom: 'somethingrandomidkwhattoputhere',
      ethnicity: 'somethingrandomidkwhattoputhere',
      gender: 'somethingrandomidkwhattoputhere',
      programs: [],
      backgroundCheck: {
        passed: false,
        expirationDate: new Date(),
      },
      userType: '',
      tags: [],
    };

    // send api request to create user
    try {
      const res = await fetch('/api/users/create', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
      console.log(res);

      // if request is successful, there is no error message
      if (res.status == 201) return null;
      // otherwise, there is an error message
      else return { message: 'You have entered invalid information.' };
    } catch (err) {
      return { message: 'Some error has occurred.' };
    }
  };

  // functions to be passed as props to each register page component
  const formFunctions: RegisterFormFunctions = {
    handleForm,
    onSubmit,
    handleEnter,
    printError,
    handleLeftArrow,
    handleRightArrow,
  };

  // TODO: should I adjust everything's font size?
  return (
    <MediaContextProvider disableDynamicMediaQueries>
      <Container>
        <Media lessThan="sm">{/*LeftDisplay is not visible*/}</Media>
        <Media greaterThanOrEqual="sm">
          <LeftDisplay />
        </Media>

        {formData.page === 1 && (
          <RegisterPage1
            formFunctions={formFunctions}
            formPhoneData={formData.phone}
          />
        )}

        {formData.page === 2 && (
          <RegisterPage2
            formFunctions={formFunctions}
            formPhoneData={formData.emergencyPhone}
          />
        )}

        {formData.page === 3 && <RegisterPage3 formFunctions={formFunctions} />}

        {formData.page === 4 && <RegisterPage4 formFunctions={formFunctions} />}

        {formData.page === 5 && <LastRegisterPage />}
      </Container>
    </MediaContextProvider>
  );
};

export default RegisterPage;
