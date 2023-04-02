import styled from 'styled-components';

interface Props {
  visible?: boolean;
}

/**
 * Flex box for spacing page dots
 */
export const DotsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 156px;
`;

/**
 * Makes register nagivation arrow visible or hidden
 */
export const Arrow = styled.div<Props>`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  &:hover {
    cursor: pointer;
  }
`;

/**
 * Spaces out and centers page dots and arrows
 */
export const ProgressContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 291px;
`;
