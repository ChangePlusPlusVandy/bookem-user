import styled from 'styled-components';

export const ContactBox = styled.div`
  @media (min-width: 768px) {
    width: 500px;
    margin: 0 0 0 147px;
  }
  @media (max-width: 767px) {
    margin: 20px 20px 0 20px;
  }
`;

export const ContactHeader = styled.div`
  font-size: 30px;
`;

export const BigIconBox = styled.div`
  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

/**
 * Contains Icon + text
 */
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const IconText = styled.span`
  font-size: 18px;
  @media (min-width: 768px) {
    margin-left: 37px;
  }

  @media (max-width: 767px) {
    margin-left: 20px;
  }
`;
