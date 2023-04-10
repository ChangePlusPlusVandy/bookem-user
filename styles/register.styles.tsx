import styled from 'styled-components';

/**
 * Props to pass into styled components
 */
interface Props {
  width?: string;
}

/**
 * Generic input font
 */
const InputGenericFont = `
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

/**
 * Container for entire register page
 */
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  font-family: ${props => props.theme.fonts.PRIMARY};
  font-style: normal;
`;

/**
 * Container for right half of register page
 */
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 50vw;
  height: 100vh;
  padding: 7vh 3% 7vh 7%;
  overflow-y: auto;

  @media (max-width: 767px) {
    width: 100vw;
  }
`;

/**
 * Header of each register page
 */
export const Header = styled.div`
  padding: 1vh;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  @media (max-width: 767px) {
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
  }
`;

/**
 * Form border on RegisterPage5 (Review Information page)
 */
export const FormBorder = styled.div`
  overflow: auto;
  border: 1px solid;
  border-radius: 10px;
  margin: -20px -20px -20px -20px;
  padding: 5px 20px 20px 20px;
`;

/**
 * Form whose formatting adjusts on screen size
 */
export const Form = styled.form`
  overflow: auto;
  margin-top: -40px;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:last-child {
    margin-top: 0px;
  }

  @media (max-width: 767px) {
    justify-content: space-between;
    height: 100%;
    gap: 7px;
  }
`;

/**
 * Container for each section of a register page
 */
export const SectionContainer = styled.div<Props>`
  margin-top: 10px;
`;

/**
 * Header for each section
 */
export const SectionHeader = styled.div`
  padding: 1vh;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

/**
 * Flexbox for inputs that are side-by-side
 */
export const InputFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vh;
`;

/**
 * Text inputs with varying length
 * 'width' determines input box length
 */
export const InputText = styled.input<Props>`
  outline: 0;
  border-width: 0 0 1px;
  border-bottom: 1px solid #c1c1c1;
  width: ${props => props.width};

  ${InputGenericFont};

  ::placeholder {
    color: #a4a4a4;
  }
`;

/**
 * Container that gives text inputs consistent padding
 */
export const InputContainer = styled.div`
  padding: 1vh;
`;

/**
 * Container for radio/checkbox column inputs
 */
export const Fieldset = styled.fieldset`
  border: none;
`;

/**
 * Format inputs in columns
 */
export const Columns = styled.ul`
  columns: 2;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 767px) {
    columns: 1;
  }
`;

/**
 * Contain checkbox plus text associated with it
 */
export const CheckboxContainer = styled.li`
  @media (max-width: 767px) {
    margin: 15px 0px;
  }
`;

/**
 * Checkbox input label
 */
export const LabelCheckbox = styled.label`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 18px;
  align-items: center;
  font-weight: 400;
  font-size: 19px;
  line-height: 40px;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

/**
 * Checkbox input button
 */
export const InputCheckbox = styled.input`
  width: 21px;
  height: 21px;

  &:hover {
    cursor: pointer;
  }
`;

/**
 * Text area input
 */
export const InputTextarea = styled.textarea`
  border-radius: 20px;
  resize: none;
  width: 100%;
  height: 160px;
  padding: 12px 25px;

  ${InputGenericFont};
  ::placeholder {
    color: #a4a4a4;
  }
`;

/**
 * Radio input label
 */
export const LabelRadio = styled.label`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 18px;
  margin-bottom: 20px;
  align-items: center;
  ${InputGenericFont};

  &:last-child {
    margin-bottom: 0px;
  }
`;

/**
 * Radio input button
 */
export const InputRadio = styled.input`
  width: 21px;
  height: 21px;

  &:hover {
    cursor: pointer;
  }
`;

/**
 * Container for joining newsletter section
 */
export const JoinNewsletterContainer = styled.div`
  @media (min-width: 767px) {
    padding: 1vh;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    columns: 2;
    list-style-type: none;
    padding: 1vh 2vh;
    margin: 0;
  }
`;

/**
 * Container for radio input button with a text field
 */
export const OtherRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  height: 27px;
`;

/**
 * Horizontally aligns large register buttons
 */
export const ButtonContainer = styled.div`
  text-align: center;
`;

/**
 * Submit and Let's go buttons
 */
export const Button = styled.button`
  &:hover {
    cursor: pointer;
  }
  width: 215px;
  height: 47px;
  background: #6d6d6d;
  border: 1px solid #6d6d6d;
  border-radius: 20px;

  ${InputGenericFont};
  color: #ffffff;

  @media (max-width: 767px) {
    width: 128px;
  }
`;

/**
 * Container for right half of last register page
 */
export const LastPageContainer = styled(RightContainer)`
  align-items: center;
  padding: 10vh;
  justify-content: space-between;

  @media (max-width: 767px) {
    padding: 10vh 7.7vw;
  }
`;

/**
 * Container for text on last register page
 */
export const LastPageTextContainer = styled.div`
  align-self: flex-start;
`;

/**
 * Text on last register page
 */
export const LastPageText = styled.div<Props>`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.78px;

  &:first-child {
    font-size: 30px;
    line-height: 36.31px;
    margin-bottom: 5vh;
  }
`;

/**
 * Error messages for invalid inputs
 */
export const Error = styled.p`
  margin: 0 0 -10px 0;
  padding-left: 1vh;
  color: red;
`;
