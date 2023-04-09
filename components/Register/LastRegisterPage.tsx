import React from 'react';
import { FieldValues } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { RegisterFormData } from '@/utils/types';
import Image from 'next/image';
import {
  LastPageContainer,
  LastPageTextContainer,
  LastPageText,
  Button,
} from '@/styles/register.styles';

const LastRegisterPage = ({ formData }: { formData: RegisterFormData }) => {
  // Function to handle login and redirect.
  const handleLogin = async (data: FieldValues) => {
    const status = await signIn('credentials', {
      redirect: true,
      email: data.email,
      password: data.password,
    });

    if (!status) {
      window.location.href = '/';
    }
  };

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

      <Button onClick={() => handleLogin(formData)}>Let&apos;s go</Button>
    </LastPageContainer>
  );
};

export default LastRegisterPage;
