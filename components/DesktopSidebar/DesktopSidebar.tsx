import React from 'react';
import { UserIcon } from '@/components/DesktopSidebar/UserIcon';
import { useActiveRoute } from '@/lib/useActiveRoute';
import {
  IconContainer,
  IconLink,
  Container,
  IconText,
  MobileIconsContainer,
} from '@/styles/components/DesktopSidebar/sidebar.styles';
import {
  SIDEBAR_ICON_HEIGHT,
  SIDEBAR_ICON_PARAMS,
  SIDEBAR_ICON_WIDTH,
} from '@/utils/constants';
import Image from 'next/image';
import { Media } from '@/lib/media';

export const DesktopSidebar = () => {
  const activeRoute = useActiveRoute();

  return (
    <Container>
      <Media greaterThanOrEqual="sm">
        <IconContainer>
          <UserIcon />
        </IconContainer>
      </Media>

      <Media lessThan="sm">
        <UserIcon />
      </Media>

      {/* Iterate through iconParamList to display icons */}
      {SIDEBAR_ICON_PARAMS.map(iconParam => {
        return (
          <Media greaterThanOrEqual="sm" key={iconParam.linkTo}>
            <IconContainer>
              {/* Link that wraps around the icon */}
              <IconLink
                href={iconParam.linkTo}
                hoveredsrc={iconParam.desktopHoveredSrc}
                // Dynamically assign the background color according to the current route
                backgroundcolor={
                  activeRoute === iconParam.linkTo ? '#d9d9d9' : '#6d6d6d'
                }
                // Dynamically assign the src of the icon according to the current route
                imgsrc={
                  activeRoute === iconParam.linkTo
                    ? iconParam.desktopHoveredSrc
                    : iconParam.desktopDefaultSrc
                }>
                {/* Desktop version only displays image */}
                {/* Icon image with default src */}
                <Image
                  src={iconParam.desktopDefaultSrc}
                  alt=""
                  width={SIDEBAR_ICON_HEIGHT}
                  height={SIDEBAR_ICON_WIDTH}
                />
              </IconLink>
            </IconContainer>
          </Media>
        );
      })}

      <Media lessThan="sm">
        <MobileIconsContainer>
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
                </IconLink>
              </IconContainer>
            );
          })}
        </MobileIconsContainer>
      </Media>
    </Container>
  );
};
