import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeaderBox,
  EventDetailText,
  Line,
} from '@/styles/components/Event/header.styles';
import { Media } from '@/lib/media';

/**
 * Contain the Header Event Detail
 */
const Header = () => {
  return (
    <>
      {/* TODO: make the x button go back to the correct page */}

      {/* Desktop */}
      <Media greaterThanOrEqual="sm">
        <HeaderBox>
          <Image
            src="/event/arrow-left.png"
            alt=""
            width={48}
            height={48}
            onClick={() => history.back()}
          />
          <EventDetailText>Event Details</EventDetailText>
        </HeaderBox>
      </Media>

      {/* Mobile */}
      <Media lessThan="sm">
        <HeaderBox>
          <EventDetailText>Event Details</EventDetailText>

          {/* Cross icon */}
          <Image
            src="/event/error.svg"
            alt=""
            width={40}
            height={40}
            onClick={() => history.back()}
          />
        </HeaderBox>

        {/* Horizontal line */}
        <Line src="/event/line.png" alt="" width={100} height={1} />
      </Media>
    </>
  );
};

export default Header;
