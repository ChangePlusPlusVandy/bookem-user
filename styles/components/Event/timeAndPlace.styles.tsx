import styled from 'styled-components';

/**
 * Contains Location and date of event
 */
export const TimeAndPlaceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  // Desktop
  @media (min-width: 768px) {
    justify-content: space-around;
    margin-top: 20px;
  }

  // Mobile
  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;

/**
 * Contains the Icon + text
 */
export const IconBox = styled.div`
  display: flex;
  align-items: center;

  // Mobile
  @media (max-width: 767px) {
    margin: 30px 200px 0 0;
  }
`;

export const IconText = styled.span`
  margin-left: 20px;
  font-size: 18px;
`;
