import styled from 'styled-components';
import Image from 'next/image';

export const TimeAndPlaceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
`;

export const Icon = styled(Image)``;

export const IconText = styled.span`
  margin-left: 20px;
  font-size: 18px;
`;
