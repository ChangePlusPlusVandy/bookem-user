import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeaderBox,
  EventDetailText,
} from '@/styles/components/Event/header.styles';
import { Media } from '@/lib/media';

/**
 * Contain the Header Event Detail
 */
const Header = () => {
  return (
    <>
      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        <HeaderBox>
          <Link href="/">
            <Image src="/event/arrow-left.png" alt="" width={48} height={48} />
          </Link>
          <EventDetailText>Event Details</EventDetailText>
        </HeaderBox>
      </Media>

      {/* Mobile */}
      <Media lessThan="sm">
        <HeaderBox>
          <EventDetailText>Event Details</EventDetailText>
          <Link href="/">
            <Image src="/event/error.png" alt="" fill />
          </Link>
        </HeaderBox>
        <Image src="/event/line.png" alt="" />
      </Media>
    </>
  );
};

export default Header;
