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
    background-color: aliceblue;
  }
`;

/**
 * Contains the book icon and the program name info
 */
export const MiddleBox = styled.div`
  display: flex;
  background-color: pink;
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
    background-color: lightgreen;
  }
`;

/**
 * Contains two buttons in mobile
 */
export const ButtonBox = styled.div`
  display: flex;
  align-item: center;
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
  font-family: 'Inter';
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

export const SignupBox = styled.div`
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  height: 50px;
`;

export const MaxSpot = styled.span``;

export const SignupButton = styled.button``;
