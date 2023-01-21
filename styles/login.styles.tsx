import styled from 'styled-components';

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
  padding-top: 20vh;
  gap: 4vh;
  padding-left: 15vh;
  padding-right: 15vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Button = styled.button`
  font-size: 17px;
  background: #dbdbdb;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 35px;
  padding-right: 35px;
  border-radius: 14px;
  &:hover {
    background-color: green;
  }
  width: 275px;
  margin-left: auto;
  margin-right: auto;
`;

export const Footer = styled.div`
  position: absolute;
  justify-content: top;
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0px;
  bottom: 0px;
  width: 50vw;
  height: 17vh;
  background: gray;
`;
export const ExternalPrompt = styled.p`
  padding-top: 8px;
  color: gray;
  font-family: arial;
  font-size: 13px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;
export const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
export const LoginHeader = styled.div`
  margin-right: auto;
  font-size: 30px;
  font-weight: bold;
  font-family: arial;
  margin-bottom: 30px;
`;

export const IconContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 20px;
  padding-bottom: 30px;
`;

export const Input = styled.input`
  border: 1px solid;
  height: 35px;
  border-radius: 18px;
  padding: 10px;
`;

export const SubmitButton = styled.input`
  font-size: 17px;
  background: #dbdbdb;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 35px;
  padding-right: 35px;
  border-radius: 14px;
  &:hover {
    background-color: green;
  }
  width: 275px;
  margin-left: auto;
  margin-right: auto;
`;

export const IconButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: #dbdbdb;
  border: 0px;
  &:hover {
    background-color: green;
  }
`;

export const LittleText = styled.p`
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
  font-family: arial;
  font-size: 13px;
`;
