import styled from 'styled-components';

export const UserIconContainer = styled.div`
  @media (min-width: 768px) {
    margin: 20px 0 0 0;
  }

  @media (max-width: 767px) {
    margin: 76px 0 100px 29px;
    width: 100px;
  }
`;

/**
 * Circular header image container
 */
export const ImageContainer = styled.div`
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin: auto;
    // Round border
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
