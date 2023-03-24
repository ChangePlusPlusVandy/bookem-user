import React from 'react';
import Image from 'next/image';
import {
  ImageContainer,
  Name,
} from '@/styles/components/DesktopSidebar/userIcon.styles';

export const UserIcon = () => {
  return (
    <>
      <ImageContainer>
        {/* TODO: add user profile image */}
        <Image src="/pretty.png" width="100" height="100" alt="" />
      </ImageContainer>
      <Name>Linda S.</Name>
    </>
  );
};
