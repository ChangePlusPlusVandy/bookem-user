import {
  ImageContainer,
  Name,
} from '@/styles/components/mobile/MobileSidebar/userIcon.styles';
import Image from 'next/image';
export const MobileUserIcon = () => {
  return (
    <>
      <ImageContainer>
        {/* TODO: add user profile image */}
        <Image src="/pretty.png" width={70} height={70} alt="" />
      </ImageContainer>
      <Name>Linda S.</Name>{' '}
    </>
  );
};
