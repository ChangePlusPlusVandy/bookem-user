import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchData } from '@/utils/utils';
import {
  ImageContainer,
  Name,
  UserIconContainer,
} from '@/styles/components/Sidebar/userIcon.styles';
import { Media } from '@/lib/media';
import { useSession } from 'next-auth/react';
require('dotenv').config(); // Load environment variables from .env file

export const UserIcon = () => {
  const { data: session } = useSession();

  return (
    <UserIconContainer>
      <ImageContainer>
        {/* TODO: add user profile image */}
        {/* Bigger image size for desktop and smaller for mobile */}
        <Media greaterThanOrEqual="sm">
          {session?.user && session.user.profileImgUrl && (
            <Image
              src={session.user.profileImgUrl}
              width="100"
              height="100"
              alt="user-profile"
            />
          )}
        </Media>
        <Media lessThan="sm">
          <Image src="/bookem-logo.png" width="73" height="73" alt="" />
        </Media>
      </ImageContainer>
      <Name>{session?.user && session.user.name}</Name>
    </UserIconContainer>
  );
};
