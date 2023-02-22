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

export const ExternalPrompt = styled.p`
  padding-top: 8px;
  color: gray;
  font-size: 13px;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  text-align: center;

  span {
    background: #fff;
    padding: 0 10px;
  }
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

export const IconContainer = styled.div`
  margin: 15px auto;
  display: flex;
  gap: 20px;
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
  padding: 12px 35px;
  border-radius: 14px;
  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
  width: 80%;
  margin: auto;
`;

export const IconButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 5px;
  border: 0px;
  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
  padding: 0px;
`;

export const IconImage = styled.img`
  height: 30px;
  width: 30px;
  padding: 0px;
  margin: 0px;
`;

export const LittleText = styled.p`
  padding-top: 8px;
  color: white;
  font-size: 13px;
`;
