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

export const UserIcon = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<Error>();

  useEffect(() => {
      try {
        fetchData('/api/users/')
        .then(data => {
          if (data != null) {
            console.log('Fetched data:', data); 
            setUserData(data)}
        })
        .catch(err => setError(err));

      } catch (error) {
        setError(new Error('Error fetching user data'));
        console.error('Error fetching user data:', error);
      }
  }, []);

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
      <Name>{userData !== null &&userData.name}</Name>
    </UserIconContainer>
  );
};
