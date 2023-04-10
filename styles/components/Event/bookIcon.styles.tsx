import styled from 'styled-components';
import Image from 'next/image';

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: max(17vw, 150px);
  min-width: 180px;
  height: max(17vw, 150px);
`;

export const CircularProgress = styled.svg`
  position: absolute;
  transform: rotate(-90deg);
  width: max(17vw, 150px);
  height: max(17vw, 150px);
`;

export const Icon = styled(Image)``;
