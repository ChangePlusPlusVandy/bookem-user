import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Media } from '@/lib/media';
import { UserData } from 'bookem-shared/src/types/database';
import { RegisterFormFunctions, RegisterFormData } from '@/utils/types';
import LeftDisplay from '@/components/Register/LeftDisplay';
import RegisterPage1 from '@/components/Register/RegisterPage1';
import RegisterPage2 from '@/components/Register/RegisterPage2';
import RegisterPage3 from '@/components/Register/RegisterPage3';
import RegisterPage4 from '@/components/Register/RegisterPage4';
import RegisterPage5 from '@/components/Register/RegisterPage5';
import LastRegisterPage from '@/components/Register/LastRegisterPage';
import { Container, Error } from '@/styles/register.styles';

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
  const [formData, setFormData] = useState<RegisterFormData>({
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
    occupation: '',
    occupationTitle: '',
    occupationOrg: '',
    joinNewsletter: '',
    sourceHeardFrom: '',
    gender: '',
    otherGender: '',
    race: '',
    otherRace: '',
  });

  /* page number handling */

  // variable for storing the page that user wants to go to
  let nextPage = formData.page;

  // updates to the previous register page, saves data but not submit form
  const handleLeftArrow = (data: any) => {
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
    setFormData({ ...formData, page: nextPage, ...data });

    // when user clicks on final submit button on page 5
    if (formData.page === 5 && nextPage === formData.page) {
      // check if user is registered successfully
      const error = await onFinished(formData);

      // if successful, go to last register page
      if (!error) setFormData({ ...formData, page: formData.page + 1 });
      // otherwise, send alert to user with error message
      else alert(error.message);
    }
  };

  // attempt to create user in database using form data
  const onFinished = async (data: any) => {
    // put form data into correct format for the user schema
    const userEthnicity = data.race === 'other' ? data.otherRace : data.race;
    const userGender = data.gender === 'other' ? data.otherGender : data.gender;
    const userJoinNewsletter = data.joinNewsletter === 'yes' ? true : false;

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
      birthday: data.birthday,
      emergencyName: data.emergencyFirstName + ' ' + data.emergencyLastName,
      emergencyPhone: data.emergencyPhone,
      emergencyRelationship: data.emergencyRelationship,
      members: data.members,
      volunteerReason: data.volunteerReason,
      occupation: data.occupation,
      occupationTitle: data.occupationTitle,
      occupationOrg: data.occupationOrg,
      joinNewsletter: userJoinNewsletter,
      sourceHeardFrom: data.sourceHeardFrom,
      ethnicity: userEthnicity,
      gender: userGender,
      tags: [],
      events: [],
    };

    // send api request to create user
    try {
      const res = await fetch('/api/users/create', {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      // if request is successful, there is no error message
      if (res.status === 201) return null;
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

  return (
    <Container>
      {/* Mobile */}
      <Media lessThan="sm">{/*LeftDisplay is not visible*/}</Media>

      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        <LeftDisplay />
      </Media>

      {formData.page === 1 && (
        <RegisterPage1 formFunctions={formFunctions} formData={formData} />
      )}

      {formData.page === 2 && (
        <RegisterPage2 formFunctions={formFunctions} formData={formData} />
      )}

      {formData.page === 3 && <RegisterPage3 formFunctions={formFunctions} />}

      {formData.page === 4 && (
        <RegisterPage4 formFunctions={formFunctions} formData={formData} />
      )}

      {formData.page === 5 && (
        <RegisterPage5 formFunctions={formFunctions} formData={formData} />
      )}

      {formData.page === 6 && <LastRegisterPage formData={formData} />}
    </Container>
  );
};

export default RegisterPage;
