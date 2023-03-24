import styled from 'styled-components';

/**
 * Circular header image container
 */
export const ImageContainer = styled.div`
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 100%;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    width: 73px;
    height: 73px;
  }
`;

export const Name = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    color: white;
    font: 400 normal 20px/30px;
  }

  @media (max-width: 767px) {
    font: 400 normal 12px/30px;
  }
`;

export const UserIconContainer = styled.div`
  @media (max-width: 767px) {
    margin: 0 0 0 29px;
    width: 73px;
  }
`;
