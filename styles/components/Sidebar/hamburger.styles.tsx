import Image from 'next/image';
import styled from 'styled-components';

/**
 * Hamburger
 * Positioned absoultely to the right
 */
export const Hamburger = styled(Image)`
  /* TODO: Make it stop moving along with page scrolling */
  position: absolute;
  right: 40px;
  top: 100px;

  &:hover {
    cursor: pointer;
  }
`;
