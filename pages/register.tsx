import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserData } from 'bookem-shared/src/types/database';
import LeftDisplay from '@/components/LeftDisplay';
import RegisterPage1 from '@/components/Register/RegisterPage1';
import RegisterPage2 from '@/components/Register/RegisterPage2';
import RegisterPage3 from '@/components/Register/RegisterPage3';
import RegisterPage4 from '@/components/Register/RegisterPage4';
import RegisterPage5 from '@/components/Register/RegisterPage5';
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
  // state for current register page
  const [page, setPage] = useState(1);

  // react hook form
  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = useForm();

  /* page number handling */

  // variable for storing the page that user wants to go to
  let nextPage = page;

  // useEffect(() => {
  //   console.log('hi ', errors);
  // }, [errors]);

  // updates nextPage to be the previous register page
  const handleLeftArrow = () => {
    nextPage = page - 1;
    // console.log(errors);
  };

  // updates nextPage to be the next register page
  const handleRightArrow = () => {
    nextPage = page + 1;
    // console.log(errors);
  };

  /* form handling */

  // handle form data upon submission on each page
  const onSubmit = async (data: any) => {
    console.log(data);

    // when user clicks on final submit button on page 4
    if (page == 4 && nextPage == page) {
      // check if user is registered successfully
      const error = await onFinished(data);
      console.log(error);

      // if successful, go to last register page
      if (!error) nextPage = page + 1;
      // otherwise, send alert to user with error message
      else alert(error.message);
    }

    // update current register page number
    setPage(nextPage);
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
    };

    // send api request to create user
    try {
      const res = await fetch('/api/users/create', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
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

  const props = {
    onSubmit,
    printError,
    handleLeftArrow,
    handleRightArrow,
  };

  return (
    <Container>
      <LeftDisplay />
      {page == 1 && <RegisterPage1 props={props} />}
      {page == 2 && <RegisterPage2 props={props} />}
      {page == 3 && <RegisterPage3 props={props} />}
      {page == 4 && <RegisterPage4 props={props} />}
      {page == 5 && <RegisterPage5 />}
    </Container>
  );
};

export default RegisterPage;
