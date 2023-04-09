import styled from 'styled-components';
import Link from 'next/link';

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

export const CreateButton = styled(Link)`
  font-size: ${props => props.theme.fontSizes.SMALL};
  background: ${props => props.theme.colors.BOOKEM_BLACK};
  color: ${props => props.theme.colors.WHITE};
  padding: 12px 35px;
  text-align: center;
  border-radius: 14px;
  &:hover {
    background-color: ${props => props.theme.colors.WHITE};
    color: ${props => props.theme.colors.BOOKEM_BLACK};
    border: solid 1px ${props => props.theme.colors.BOOKEM_BLACK};
    cursor: pointer;
  }
  border: none;
  width: 40%;
  margin: 2% auto;
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
  font-size: ${props => props.theme.fontSizes.LARGE};
  color: ${props => props.theme.colors.BOOKEM_BLACK};
  margin-bottom: 50px;
`;

export const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.BOOKEM_BLACK};
  height: 45px;
  border-radius: 10px;
  padding: 10px;
`;

export const SubmitButton = styled.input`
  font-size: ${props => props.theme.fontSizes.SMALL};
  background: ${props => props.theme.colors.WHITE};
  border: solid 1px ${props => props.theme.colors.BOOKEM_BLACK};
  padding: 12px 35px;
  border-radius: 14px;
  &:hover {
    background-color: ${props => props.theme.colors.BOOKEM_BLACK};
    color: ${props => props.theme.colors.WHITE};
    cursor: pointer;
  }
  width: 40%;
  margin: 10% auto;
`;

export const LittleText = styled.p`
  padding-top: 8px;
  margin: 0px auto;
  color: ${props => props.theme.colors.BOOKEM_BLACK};
  font-size: 13px;
`;
