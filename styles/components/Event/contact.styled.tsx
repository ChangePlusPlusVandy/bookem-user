import styled from 'styled-components';
import Image from 'next/image';

export const ContactBox = styled.div`
  width: 500px;
  margin-left: 147px;
`;

export const ContactHeader = styled.div`
  font-size: 30px;
`;

export const BigIconBox = styled.div`
  margin-top: 40px;
`;

/**
 * Contains Icon + text
 */
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Icon = styled(Image)``;

export const IconText = styled.span`
  margin-left: 37px;
  font-size: 18px;
`;
