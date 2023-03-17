import React from 'react';
import { UserIcon } from '@/components/UserIcon';
import { useActiveRoute } from '@/lib/useActiveRoute';
import { Icon, IconBox, IconLink, SideBarBox } from '@/styles/sidebar.styles';
import {
  SIDEBAR_ICON_HEIGHT,
  SIDEBAR_ICON_PARAMS,
  SIDEBAR_ICON_WIDTH,
} from '@/utils/constants';

export const SideBar = () => {
  const activeRoute = useActiveRoute();

  return (
    <SideBarBox>
      <IconBox>
        <UserIcon />
      </IconBox>

      {/* Iterate through iconParamList to display icons */}
      {SIDEBAR_ICON_PARAMS.map(iconParam => {
        return (
          <IconBox key={iconParam.defaultSrc}>
            {/* Link that wraps around the icon */}
            <IconLink
              href={iconParam.linkTo}
              hoveredsrc={iconParam.hoveredsrc}
              // Dynamically assign the background color according to the current route
              backgroundcolor={
                activeRoute === iconParam.linkTo ? '#d9d9d9' : '#6d6d6d'
              }
              // Dynamically assign the src of the icon according to the current route
              imgsrc={
                activeRoute === iconParam.linkTo
                  ? iconParam.hoveredsrc
                  : iconParam.defaultSrc
              }>
              {/* Icon image with default src */}
              <Icon
                src={iconParam.defaultSrc}
                alt=""
                width={SIDEBAR_ICON_HEIGHT}
                height={SIDEBAR_ICON_WIDTH}
              />
            </IconLink>
          </IconBox>
        );
      })}
    </SideBarBox>
  );
};
