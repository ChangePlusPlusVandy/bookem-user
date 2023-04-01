import styled from 'styled-components';

export const TimeAndPlaceBox = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    justify-content: space-around;
  }
  @media (max-width: 767px) {
    justify-content: space-between;
  }
  align-items: center;
  height: 50px;
  margin-top: 20px;
`;

/**
 * Contains the Icon + text
 */
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    margin-right: 200px;
  }
`;

export const IconText = styled.span`
  margin-left: 20px;
  font-size: 18px;
`;
