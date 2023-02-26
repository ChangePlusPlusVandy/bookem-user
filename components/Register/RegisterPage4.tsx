import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LastPageContainer,
  LastPageText,
  LastPageImage,
  LastPageButtonContainer,
  Button,
} from '@/styles/register.styles';

const RegisterPage5 = () => {
  return (
    <LastPageContainer>
      <LastPageText fontSize="30px">Thank you!</LastPageText>
      <LastPageText>Your registration for Volunteer is complete!</LastPageText>
      <LastPageText>
        Press the button below to log in to your account
      </LastPageText>

      <LastPageImage>
        <Image
          src="/user-circle.png"
          alt="User profile stock image"
          width="226"
          height="226"
        />
      </LastPageImage>

      <LastPageButtonContainer>
        <Button>
          <Link href="/">Let&apos;s go</Link>
        </Button>
      </LastPageButtonContainer>
    </LastPageContainer>
  );
};

export default RegisterPage5;
