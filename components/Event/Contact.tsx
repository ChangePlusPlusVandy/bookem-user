import React from 'react';
import Image from 'next/image';
import {
  ContactBox,
  ContactHeader,
  BigIconBox,
  IconBox,
  IconText,
} from '@/styles/components/Event/contact.styles';
import {
  EVENT_CONTACT_ICON_WIDTH,
  EVENT_CONTACT_ICON_HEIGHT,
} from '@/utils/constants';
import { Media } from '@/lib/media';
import Link from 'next/link';

/**
 * Contain Contact info
 */
const Contact = ({ phone, email }: { phone: string; email: string }) => (
  <ContactBox>
    {/* Header only for Desktop */}
    <Media greaterThanOrEqual="sm">
      <ContactHeader>Contact</ContactHeader>
    </Media>
    <BigIconBox>
      {/* Phone */}
      <IconBox>
        <Image
          src={'/event/phone.svg'}
          alt=""
          width={EVENT_CONTACT_ICON_WIDTH}
          height={EVENT_CONTACT_ICON_HEIGHT}
        />
        <IconText>{phone}</IconText>
      </IconBox>

      {/* Email */}
      <IconBox>
        <Image
          src={'/event/mail.svg'}
          alt=""
          width={EVENT_CONTACT_ICON_WIDTH}
          height={EVENT_CONTACT_ICON_HEIGHT}
        />
        <IconText>
          <Link href={'mailto:' + email}>{email}</Link>
        </IconText>
      </IconBox>
    </BigIconBox>
  </ContactBox>
);

export default Contact;
