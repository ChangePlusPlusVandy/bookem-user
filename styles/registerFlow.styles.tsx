import styled from 'styled-components';

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 120px;
  margin-left: 120px;
`;

export const DotsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 84px;
  position: absolute;
  transform: translate(0%, 83.3%);
`;

export const LeftArrow = styled.div`
  float: left;
`;

export const RightArrow = styled.div`
  float: right;
`;

export const ProgressContainer = styled.div`
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 5vh;
  position: absolute;
  bottom: 0;
`;
