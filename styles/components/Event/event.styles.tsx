import styled from 'styled-components';

/**
 * Contain everything
 */
export const EventBox = styled.div`
  @media (min-width: 768px) {
    padding: 50px;
  }
  @media (max-width: 767px) {
    padding: 30px;
  }
`;

/**
 * Contains the book icon and the event name info
 */
export const MiddleBox = styled.div`
  display: flex;
  @media (min-width: 768px) {
    margin: 45px auto auto 30px;
  }

  @media (max-width: 767px) {
    margin: 30px auto auto auto;
  }
`;

/**
 * Contain About and Contact info
 */
export const BottomBox = styled.div`
  // Desktop: Flex box
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    margin-top: 51px;
  }

  // Mobile
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

/**
 * Contains two buttons in mobile
 */
export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 0 20px;
`;

/**
 * Button to swtich to either About or Contact in Mobile
 * @param backgroundcolor
 * @param textcolor
 */
export const AboutContactButton = styled.button<{
  backgroundcolor: string;
  textcolor: string;
}>`
  width: 50vw;
  height: 35px;

  // Round border
  border-radius: 10px;
  border: 0px solid;

  // Customize color
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.textcolor};

  // Fonts
  font-family: ${props => props.theme.fonts.PRIMARY};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  // Change background color and text color when hovered
  &:hover {
    cursor: pointer;
    background-color: #6b6b6b;
    color: white;
  }
`;

/**
 * Sign up Button
 */
export const SignupButton = styled.button`
  color: ${props => props.theme.colors.WHITE};
  border: none;
  padding: 12px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  // Desktop
  @media (min-width: 768px) {
    width: 150px;
    margin-top: 30px;
    background: ${props => props.theme.colors.BOOKEM_RED};
    font-size: 25px;
  }

  // Mobile
  @media (max-width: 767px) {
    width: 120px;
    height: 40px;
    background: black;

    font-family: ${props => props.theme.fonts.PRIMARY};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;
