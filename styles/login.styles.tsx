import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  hover?: boolean;
}

/**
 * Container for desktop login page
 */
export const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

/**
 * Container for right half of desktop login page
 */
export const RightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background: white;
  overflow: auto;
`;

/**
 * Container for login information
 */
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35% 15% 0% 15%;
`;

/**
 * Header of login page
 */
export const LoginHeader = styled.div`
  font-size: ${props => props.theme.fontSizes.LARGE};
  color: ${props => props.theme.colors.BOOKEM_BLACK};
  font-weight: bold;
  margin-bottom: 50px; // TODO: need?
`;

/**
 * Login form
 */
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/**
 * Inputs to desktop login form
 */
export const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.BOOKEM_BLACK};
  height: 45px;
  border-radius: 10px;
  padding: 10px; // TODO: need?
`;

/**
 * Wrapper for password input
 */
export const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
`;

/**
 * Position the password hide/show eye in correct place
 */
export const Eye = styled.i`
  position: absolute;
  top: 13%;
  right: 4%;
`;

/**
 * Container for the forgot password link
 */
export const ForgotPassword = styled.div`
  margin: -10px 10px 0 auto;
  font-size: 15px;
  line-height: 18px;
  color: #6d6d6d;
`;

/**
 * Login form submit button for desktop
 */
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
  min-width: 200px; // TODO: need?
  margin: 10% auto;
`;

/**
 * Desktop footer
 */
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

/**
 * Text inside footer
 */
export const LittleText = styled.p`
  padding-top: 8px;
  margin: 0 auto;
  color: ${props => props.theme.colors.BOOKEM_BLACK};
  font-size: 13px;
`;

/**
 * Sign up button for desktop
 */
export const CreateButton = styled.button`
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

/**
 * Container for mobile welcome page
 */
export const MobileContainer = styled.div`
  height: 100vh;
  padding: 8.6% 14% 6% 14%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30.26px;
`;

/**
 * Container for responsive mobile welcome page image
 */
export const MobileImageContainer = styled.div`
  position: relative;
  width: 73vw;
  height: 46vh;
`;

/**
 * Centers text on mobile welcome page
 */
export const MobileTextContainer = styled.div`
  margin: auto;
`;

/**
 * Text on mobile welcome page
 */
export const MobileText = styled.p<Props>`
  text-align: center;
  &:last-child {
    font-size: 16px;
    line-height: 19.36px;
  }
  &:hover {
    cursor: ${props => (props.hover ? `pointer` : `auto`)};
  }
`;

/**
 * Login button on mobile welcome page
 */
export const MobileLoginButton = styled.button`
  background: #6d6d6d;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1rem;
  color: white;
  width: 296px;
  height: 53px;
  &:hover {
    cursor: pointer;
  }
`;

/**
 * Container for mobile login page
 */
export const MobileLoginContainer = styled(ContentContainer)`
  height: 100vh;
  padding: 20% 7% 6% 7%;
  display: flex;
  justify-content: space-between;
`;

/**
 * Submit button on mobile login page
 */
export const MobileSubmitButton = styled(SubmitButton)`
  background: #6d6d6d;
  border-radius: 10px;
  font-size: 16px;
  line-height: 19px;
  color: white;
  width: 296px;
  height: 53px;
  margin-bottom: 71px;

  &:hover {
    background: #6d6d6d;
    cursor: pointer;
  }
`;
