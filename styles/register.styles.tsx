import styled from 'styled-components';

interface Props {
  width?: string;
  margin?: string;
  page?: number;
  fontSize?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const RightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background: white;
  padding-top: 7vh;
  padding-bottom: 7vh;
  gap: 4vh;
  padding-left: 19vh;
  padding-right: 19vh;
  overflow-y: auto;
`;

export const Header = styled.div<Props>`
  margin-bottom: ${props => (props.margin ? props.margin : '2vh')};
  padding: 1vh;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
`;

export const SectionContainer = styled.div<Props>`
  margin-bottom: ${props => props.margin};
`;

export const SectionHeader = styled.div`
  padding: 1vh;
  padding-bottom: 1.2vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export const InputFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vh;
`;

export const InputContainer = styled.div`
  padding: 1vh;
`;

export const InputText = styled.input<Props>`
  outline: 0;
  border-width: 0 0 1px;
  border-bottom: 1px solid #c1c1c1;
  width: ${props => props.width};

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  ::placeholder {
    color: #a4a4a4;
  }
`;

export const LabelRadio = styled.label`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 18px;
  width: 33vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export const InputRadio = styled.input`
  width: 21px;
  height: 21px;
  border: 1px solid #000000;
  cursor: pointer;
`;

export const CheckboxColumns = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const LabelCheckbox = styled.label`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 18px;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  color: #000000;
`;

export const InputCheckbox = styled.input`
  width: 21px;
  height: 21px;
  border: 1px solid #000000;
  cursor: pointer;
`;

export const TextareaContainer = styled.div`
  padding: 1vh;
`;

export const InputTextarea = styled.textarea`
  border: 1px solid #6d6d6d;
  border-radius: 20px;
  resize: none;
  width: 100%;
  height: 160px;
  padding: 12px 25px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  ::placeholder {
    color: #a4a4a4;
  }
`;

export const InputRadioVertical = styled.ul`
  list-style-type: none;
  padding: 1vh;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const ResumeButton = styled.button`
  cursor: pointer;
  margin-top: 45px;
  border: 1px solid #6d6d6d;
  border-radius: 20px;
  background: #ffffff;
  width: 334px;
  height: fit-content;
  padding: 10px 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #6d6d6d;
`;

export const ReviewInfoText = styled.div`
  padding-left: 1vh;
  margin-bottom: 2vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 215px;
  height: 47px;
  background: #6d6d6d;
  border: 1px solid #6d6d6d;
  border-radius: 20px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #ffffff;
`;

export const LastPageContainer = styled(RightContainer)`
  padding: 10vh;
  gap: 0vh;
`;

export const LastPageText = styled.div<Props>`
  margin-bottom: 2vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${props => (props.fontSize ? props.fontSize : '25px')};
  line-height: 36px;

  color: #000000;
`;

export const LastPageImage = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LastPageButtonContainer = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Error = styled.span`
  padding: 1vh;
  color: red;
`;
