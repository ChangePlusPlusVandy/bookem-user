import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LastPageContainer,
  LastPageTextContainer,
  LastPageText,
  Button,
} from '@/styles/register.styles';

const RegisterPage4 = () => {
  return (
    <LastPageContainer>
      <LastPageTextContainer>
        <LastPageText>Thank you!</LastPageText>
        <LastPageText>
          Your registration for Volunteer is complete!
        </LastPageText>
        <LastPageText>
          Press the button below to log in to your account
        </LastPageText>
      </LastPageTextContainer>

      <Image
        src="/registerFlow/user-circle.png"
        alt="User profile stock image"
        width="226"
        height="226"
      />

      <Button>
        <Link href="/">Let&apos;s go</Link>
      </Button>
    </LastPageContainer>
  );
};

export default RegisterPage4;
