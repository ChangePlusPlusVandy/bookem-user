import React from 'react';
import {
  HeaderBox,
  ArrowLink,
  ArrowImg,
  EventDetailText,
} from '@/styles/components/Event/header.styles';

/**
 * Contain the Header Event Detail
 */
const Header = () => {
  return (
    <>
      <HeaderBox>
        <ArrowLink href="/">
          <ArrowImg src="/event/arrow-left.png" alt="" width={48} height={48} />
        </ArrowLink>
        <EventDetailText>Event Details</EventDetailText>
      </HeaderBox>
    </>
  );
};

export default Header;
