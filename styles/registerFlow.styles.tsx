import styled from 'styled-components';

/**
 * Container for centering page dots
 */
export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 120px;
`;

/**
 * Flex box for spacing page dots
 */
export const DotsFlex = styled.div`
  position: absolute;
  transform: translate(0%, 83.3%);
  display: flex;
  justify-content: space-between;
  width: 84px;
`;

/**
 * Moves left arrow to left of page dots
 */
export const LeftArrow = styled.div`
  float: left;
`;

/**
 * Moves right arrow to right of page dots
 */
export const RightArrow = styled.div`
  float: right;
`;

/**
 * Positions page dots and arrows at bottom of parent container
 */
export const ProgressContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 5vh;
`;
