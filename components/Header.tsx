import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  display: flex;
  height: 48px;
  background-color: lightblue;
`;

const ArrowLink = styled(Link)``;

const ArrowImg = styled(Image)``;

const EventDetailText = styled.span`
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
`;
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
