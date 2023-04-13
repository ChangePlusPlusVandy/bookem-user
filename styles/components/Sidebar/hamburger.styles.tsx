import Image from 'next/image';
import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 2;
  background-color: white;
`;

/**
 * Hamburger
 * Positioned absoultely to the right
 */
export const Hamburger = styled(Image)`
  /* TODO: Make it stop moving along with page scrolling */
  position: absolute;
  right: 40px;
  top: 20px;

  &:hover {
    cursor: pointer;
  }
`;
