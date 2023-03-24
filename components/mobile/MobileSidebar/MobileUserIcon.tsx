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
    </>
  );
};
