import { useActiveRoute } from '@/lib/useActiveRoute';
import {
  IconContainer,
  IconLink,
} from '@/styles/components/DesktopSidebar/sidebar.styles';
import {
  ImageContainer,
  Name,
} from '@/styles/components/mobile/MobileSidebar/userIcon.styles';
import {
  SIDEBAR_ICON_PARAMS,
  SIDEBAR_ICON_HEIGHT,
  SIDEBAR_ICON_WIDTH,
} from '@/utils/constants';
import Image from 'next/image';
export const MobileUserIcon = () => {
  const activeRoute = useActiveRoute();

  return (
    <>
      <ImageContainer>
        {/* TODO: add user profile image */}
        <Image src="/pretty.png" width={70} height={70} alt="" />
      </ImageContainer>
      <Name>Linda S.</Name>
      {/* Iterate through iconParamList to display icons */}
      {SIDEBAR_ICON_PARAMS.map(iconParam => {
        return (
          <IconContainer key={iconParam.defaultSrc}>
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
              <Image
                src={iconParam.defaultSrc}
                alt=""
                width={SIDEBAR_ICON_HEIGHT}
                height={SIDEBAR_ICON_WIDTH}
              />
            </IconLink>
          </IconContainer>
        );
      })}
    </>
  );
};
