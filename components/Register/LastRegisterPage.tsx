import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LastPageContainer,
  LastPageTextContainer,
  LastPageText,
  Button,
} from '@/styles/register.styles';

const LastRegisterPage = () => {
  return (
    <LastPageContainer>
      <LastPageTextContainer>
        <LastPageText>Thank you!</LastPageText>
        <LastPageText>
          Your registration for the Book&apos;em Volunteer Portal is complete!
          Press the button below to log in to your account.
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

export default LastRegisterPage;
