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
import { useUserData } from '@/lib/useUserData';
require('dotenv').config(); // Load environment variables from .env file

export const UserIcon = () => {
  const userData = useUserData();

  return (
    <UserIconContainer>
      <ImageContainer>
        {userData && (
          <>
            {/* Choose image size based on screen size */}
            <Media greaterThanOrEqual="sm">
              <Image
                src={userData.profileImgUrl || '/bookem-logo.png'}
                width="100"
                height="100"
                alt="user-profile"
              />
            </Media>
            <Media lessThan="sm">
              <Image
                src={userData.profileImgUrl || '/bookem-logo.png'}
                width="73"
                height="73"
                alt="user-profile"
              />
            </Media>
          </>
        )}
      </ImageContainer>
      <Name>{userData?.name}</Name>
    </UserIconContainer>
  );
};
