import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

/**
 * Hamburger
 * Positioned absoultely to the right
 */
export const Hamburger = styled(Image)`
  position: absolute;
  right: 0;
  margin: 50px 40px 0 0;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;
