import styled from 'styled-components';
import Link from 'next/link';

export const HeaderBox = styled.div`
  display: flex;
  height: 48px;
`;

/**
 * Arrow Image as a link
 */
export const ArrowLink = styled(Link)``;

export const EventDetailText = styled.span`
  margin-left: 38px;
  font-size: 40px;
`;
