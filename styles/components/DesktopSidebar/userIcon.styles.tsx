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
  @media (min-width: 768px) {
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-top: 10px;
    font-size: 20px;
  }
`;

export const UserIconContainer = styled.div`
  @media (max-width: 767px) {
    margin: 0 0 120px 29px;
    width: 100px;
  }
`;
