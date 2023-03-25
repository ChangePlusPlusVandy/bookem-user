import React from 'react';
import { UserIcon } from '@/components/DesktopSidebar/UserIcon';
import { useActiveRoute } from '@/lib/useActiveRoute';
import {
  IconContainer,
  IconLink,
  Container,
  IconText,
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
          <IconContainer key={iconParam.desktopDefaultSrc}>
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
              <Media greaterThanOrEqual="sm">
                {/* Icon image with default src */}
                <Image
                  src={iconParam.desktopDefaultSrc}
                  alt=""
                  width={SIDEBAR_ICON_HEIGHT}
                  height={SIDEBAR_ICON_WIDTH}
                />
              </Media>

              {/* Mobile version displays image + text */}
              <Media lessThan="sm">
                <Image
                  src={iconParam.desktopDefaultSrc}
                  alt=""
                  width={SIDEBAR_ICON_HEIGHT}
                  height={SIDEBAR_ICON_WIDTH}
                />
                <IconText>{iconParam.text}</IconText>
              </Media>
            </IconLink>
          </IconContainer>
        );
      })}
    </Container>
  );
};
