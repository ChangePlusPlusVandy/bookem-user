import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const CustomForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const FormBox = styled.div`
    display: flex;
    justify-content: center;
  `;

  const FormHeader = styled.legend`
    font-weight: bold;
  `;

  const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
  `;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormBox>
        <List>
          <FormHeader>Please select one program</FormHeader>
          <label>
            <input
              type="radio"
              name="first-page"
              value="Reading is Fundamental (RIF)"></input>
            Reading is Fundamental (RIF)
          </label>
          <label>
            <input
              type="radio"
              name="first-page"
              value="Ready for Reading (RFR)"></input>
            Ready for Reading (RFR)
          </label>
          <label>
            <input
              type="radio"
              name="first-page"
              value="Books for Nashville Kids (BFNK)"></input>
            Books for Nashville Kids (BFNK)
          </label>
        </List>
      </FormBox>
    </form>
  );
};

export default CustomForm;
