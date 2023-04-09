import React from 'react';
import { UserIcon } from '@/components/DesktopSidebar/UserIcon';
import { useActiveRoute } from '@/lib/useActiveRoute';
import {
  IconContainer,
  IconLink,
  Container,
} from '@/styles/components/Sidebar/sidebar.styles';
import {
  BOOKEM_THEME,
  SIDEBAR_ICON_HEIGHT,
  SIDEBAR_ICON_PARAMS,
  SIDEBAR_ICON_WIDTH,
} from '@/utils/constants';
import Image from 'next/image';

export const DesktopSidebar = () => {
  const activeRoute = useActiveRoute();

  return (
    <Container>
      <IconContainer>
        <UserIcon />
      </IconContainer>

      {/* Iterate through iconParamList to display icons */}
      {SIDEBAR_ICON_PARAMS.map(iconParam => {
        return (
          <IconContainer key={iconParam.linkTo}>
            {/* Link that wraps around the icon */}
            <IconLink
              href={iconParam.linkTo}
              hoveredsrc={iconParam.desktopHoveredSrc}
              // Dynamically assign the background color according to the current route
              backgroundcolor={
                activeRoute === iconParam.linkTo
                  ? BOOKEM_THEME.colors.BOOKEM_BLACK
                  : BOOKEM_THEME.colors.BOOKEM_LIGHT_GRAY
              }
              // Dynamically assign the src of the icon according to the current route
              imgsrc={
                activeRoute === iconParam.linkTo
                  ? iconParam.desktopDefaultSrc
                  : iconParam.desktopHoveredSrc
              }>
              {/* Desktop version only displays image */}
              {/* Icon image with default src */}
              <Image
                src={iconParam.desktopDefaultSrc}
                alt=""
                width={SIDEBAR_ICON_HEIGHT}
                height={SIDEBAR_ICON_WIDTH}
              />
              <div
                style={{
                  color:
                    activeRoute === iconParam.linkTo
                      ? BOOKEM_THEME.colors.WHITE
                      : BOOKEM_THEME.colors.BOOKEM_BLACK,
                }}>
                {iconParam.text}
              </div>
            </IconLink>
          </IconContainer>
        );
      })}
    </Container>
  );
};
