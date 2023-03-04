import styled from 'styled-components';

/**
 * Props to pass into styled components
 */
interface Props {
  width?: string;
  margin?: string;
  page?: number;
  fontSize?: string;
}

/**
 * Generic input font
 */
const InputGenericFont = `
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

/**
 * Container for entire register page
 */
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  font-family: 'Inter';
  font-style: normal;
`;

/**
 * Container for right half of register page
 */
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
  width: 50vw;
  height: 100vh;
  padding: 7vh 3% 7vh 7%;
  overflow-y: auto;
`;

/**
 * Header of each register page
 */
export const Header = styled.div`
  margin-bottom: 2vh;
  padding: 1vh;

  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
`;

/**
 * Container for each section of a register page
 * 'margin' is used to determine its margin-bottom
 */
export const SectionContainer = styled.div<Props>`
  /* margin: 5vh 5vh ${props => props.margin} 0vh; */
  margin: 5vh 0vh 0vh 0vh;
`;

/**
 * Header for each section
 */
export const SectionHeader = styled.div`
  padding: 1vh;
  padding-bottom: 1.2vh;

  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
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
 * Radio input label
 */
export const LabelRadio = styled.label`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 18px;
  width: 33vh;

  ${InputGenericFont};
`;

/**
 * Radio input button
 */
export const InputRadio = styled.input`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;

/**
 * Contain checkbox plus text associated with it
 */
export const CheckboxContainer = styled.li`
  margin: 20px 0px;
`;

/**
 * Format checkboxes in columns
 */
export const CheckboxColumns = styled.ul`
  columns: 2;
  list-style-type: none;
  padding: 0;
  margin: 0;
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
  font-size: 20px;
`;

/**
 * Checkbox input button
 */
export const InputCheckbox = styled.input`
  width: 21px;
  height: 21px;
  cursor: pointer;
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
 * Horizontally aligns large register buttons
 */
export const ButtonContainer = styled.div`
  text-align: center;
`;

/**
 * Resume upload button
 */
export const ResumeButton = styled.button`
  cursor: pointer;
  margin-top: 45px;
  border: 1px solid #6d6d6d;
  border-radius: 20px;
  background: #ffffff;
  width: 334px;
  height: fit-content;
  padding: 10px 20px;

  ${InputGenericFont};
  color: #6d6d6d;
`;

/**
 * Formats radio buttons vertically
 */
export const InputRadioVertical = styled.ul`
  list-style-type: none;
  padding: 1vh;
`;

/**
 * Submit and Let's go buttons
 */
export const Button = styled.button`
  cursor: pointer;
  width: 215px;
  height: 47px;
  background: #6d6d6d;
  border: 1px solid #6d6d6d;
  border-radius: 20px;

  ${InputGenericFont};
  color: #ffffff;
`;

/**
 * Container for right half of last register page
 */
export const LastPageContainer = styled(RightContainer)`
  align-items: center;
  padding: 10vh;
`;

/**
 * Container for text on last register page
 */
export const LastPageTextContainer = styled.div`
  align-self: flex-start;
`;

/**
 * Text on last register page
 * 'margin' determines margin-bottom
 * 'fontSize' determines font-size
 */
export const LastPageText = styled.div<Props>`
  margin-bottom: ${props => (props.margin ? props.margin : '2vh')};

  font-weight: 400;
  font-size: ${props => (props.fontSize ? props.fontSize : '25px')};
  line-height: 36px;
`;

/**
 * Error messages for invalid inputs
 */
export const Error = styled.span`
  padding: 1vh;
  color: red;
`;
