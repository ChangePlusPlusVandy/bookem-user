import styled from 'styled-components';

export const TimeAndPlaceBox = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    justify-content: space-around;
    margin-top: 20px;
  }
  @media (max-width: 767px) {
    justify-content: space-between;
  }
  align-items: center;
  height: 50px;
`;

/**
 * Contains the Icon + text
 */
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    margin-right: 200px;
    margin-top: 30px;
  }
`;

export const IconText = styled.span`
  margin-left: 20px;
  font-size: 18px;
`;
