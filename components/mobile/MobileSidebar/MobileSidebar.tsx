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
} from '@/styles/components/Sidebar/sidebar.styles';
import {
  BOOKEM_THEME,
  SIDEBAR_ICON_HEIGHT,
  SIDEBAR_ICON_PARAMS,
  SIDEBAR_ICON_WIDTH,
} from '@/utils/constants';
import Image from 'next/image';

export const MobileSidebar = ({
  showSidebar,
  handleHideSidebar,
}: {
  showSidebar: boolean;
  handleHideSidebar: () => void;
}) => {
  const activeRoute = useActiveRoute();

  return (
    <>
      {showSidebar && (
        <Container>
          <Header>
            <UserIcon />
            <Cross
              onClick={handleHideSidebar}
              src="/sidebar/error.png"
              alt=""
              width={40}
              height={40}
            />
          </Header>

          <MobileIconsContainer>
            {/* Iterate through icons */}
            {SIDEBAR_ICON_PARAMS.map(iconParam => {
              return (
                <IconContainer key={iconParam.linkTo}>
                  {/* Link that wraps around the icon */}
                  <IconLink
                    href={iconParam.linkTo}
                    onClick={handleHideSidebar}
                    hoveredsrc={
                      activeRoute === iconParam.linkTo
                        ? iconParam.mobileHoveredSrc
                        : iconParam.mobileDefaultSrc
                    }
                    // Dynamically assign the background color according to the current route
                    backgroundcolor={
                      activeRoute === iconParam.linkTo
                        ? BOOKEM_THEME.colors.BOOKEM_BLACK
                        : BOOKEM_THEME.colors.WHITE
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
                          activeRoute === iconParam.linkTo
                            ? BOOKEM_THEME.colors.WHITE
                            : BOOKEM_THEME.colors.BOOKEM_BLACK
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
      )}
    </>
  );
};
