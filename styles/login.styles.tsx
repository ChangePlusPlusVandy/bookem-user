import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

export const RightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background: white;
  overflow: auto;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CreateButton = styled.button`
  font-size: 17px;
  background: #dbdbdb;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 14px;
  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
  width: 20vw;
  min-width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Footer = styled.div`
  position: fixed;
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 50vw;
  bottom: 0px;
  width: 50vw;
  height: 17vh;
  background-color: teal;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35% 15% 0% 15%;
`;

export const LoginHeader = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  border: 1px solid;
  height: 35px;
  border-radius: 10px;
  padding: 10px;
  flex-grow: 1;
`;

export const SubmitButton = styled.input`
  font-size: 17px;
  background: #dbdbdb;
  border: none;
  padding: 12px 35px;
  border-radius: 14px;
  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
  width: 20vw;
  min-width: 200px;
  margin: 10% auto;
`;

export const LittleText = styled.p`
  padding-top: 8px;
  color: white;
  font-size: 13px;
`;

export const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Eye = styled.i`
  position: absolute;
  top: 13%;
  right: 4%;
`;

export const ForgotPassword = styled.div`
  margin: -10px 10px 0 auto;
  font-size: 15px;
  line-height: 18px;
  color: #6d6d6d;
`;
