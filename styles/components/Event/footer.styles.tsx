import styled from 'styled-components';

/**
 * Contains both sops filled and Sign up button
 */
export const SignupBox = styled.div`
  // Flex box
  display: flex;
  justify-content: space-between;

  // Fixed position to bottom
  position: fixed;
  bottom: 0;
  background-color: white;

  width: 100%;
  height: 60px;

  padding: 0 35px 0 45px;
`;

/**
 * Spots filled
 */
export const MaxSpot = styled.span`
  margin: 10px 0 0 0;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
`;
