import React from 'react';
import { UserIcon } from '@/components/DesktopSidebar/UserIcon';
import { useActiveRoute } from '@/lib/useActiveRoute';
import {
  IconContainer,
  IconLink,
  Container,
  IconText,
  MobileIconsContainer,
  MobileIconFlexBox,
  Header,
  Cross,
} from '@/styles/components/DesktopSidebar/sidebar.styles';
import {
  SIDEBAR_ICON_HEIGHT,
  SIDEBAR_ICON_PARAMS,
  SIDEBAR_ICON_WIDTH,
} from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

export const MobileSidebar = () => {
  const activeRoute = useActiveRoute();

  return (
    <Container>
      <Header>
        <UserIcon />
        <Link href="#">
          <Cross src="/sidebar/error.png" alt="" width={32} height={32} />
        </Link>
      </Header>

      <MobileIconsContainer>
        {/* Iterate through icons */}
        {SIDEBAR_ICON_PARAMS.map(iconParam => {
          return (
            <IconContainer key={iconParam.linkTo}>
              {/* Link that wraps around the icon */}
              <IconLink
                href={iconParam.linkTo}
                hoveredsrc={iconParam.mobileHoveredSrc}
                // Dynamically assign the background color according to the current route
                backgroundcolor={
                  activeRoute === iconParam.linkTo ? '#6d6d6d' : 'white'
                }
                // Dynamically assign the src of the icon according to the current route
                imgsrc={
                  activeRoute === iconParam.linkTo
                    ? iconParam.mobileHoveredSrc
                    : iconParam.mobileDefaultSrc
                }>
                <MobileIconFlexBox>
                  {/* Mobile version displays image + text */}
                  <Image
                    src={iconParam.mobileDefaultSrc}
                    alt=""
                    width={SIDEBAR_ICON_HEIGHT}
                    height={SIDEBAR_ICON_WIDTH}
                  />
                  <IconText
                    color={
                      activeRoute === iconParam.linkTo ? 'white' : 'black'
                    }>
                    {iconParam.text}
                  </IconText>
                </MobileIconFlexBox>
              </IconLink>
            </IconContainer>
          );
        })}
      </MobileIconsContainer>
    </Container>
  );
};
