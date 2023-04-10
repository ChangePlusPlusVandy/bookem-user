import React from 'react';
import Image from 'next/image';
import {
  ImageContainer,
  Name,
  UserIconContainer,
} from '@/styles/components/Sidebar/userIcon.styles';
import { Media } from '@/lib/media';

export const UserIcon = () => {
  return (
    <UserIconContainer>
      <ImageContainer>
        {/* TODO: add user profile image */}
        {/* Bigger image size for desktop and smaller for mobile */}
        <Media greaterThanOrEqual="sm">
          <Image src="/bookem-logo.png" width="100" height="100" alt="" />
        </Media>
        <Media lessThan="sm">
          <Image src="/bookem-logo.png" width="73" height="73" alt="" />
        </Media>
      </ImageContainer>
      <Name>Linda S.</Name>
    </UserIconContainer>
  );
};
