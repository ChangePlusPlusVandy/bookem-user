import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const HeaderBox = styled.div`
  display: flex;
  height: 48px;
`;

/**
 * Arrow Image as a link
 */
export const ArrowLink = styled(Link)``;
export const ArrowImg = styled(Image)``;

export const EventDetailText = styled.span`
  margin-left: 38px;
  font-size: 40px;
`;
