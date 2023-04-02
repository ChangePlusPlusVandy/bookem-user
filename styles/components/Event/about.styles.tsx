import styled from 'styled-components';

export const AboutBox = styled.div`
  width: 700px;
`;

export const AboutHeader = styled.div`
  font-size: 30px;
`;
export const AboutContent = styled.div`
  @media (min-width: 768px) {
    margin-top: 33px;
  }
  @media (max-width: 767px) {
    margin: 15px 20px 0 20px;
  }
  line-height: 40px;
`;
