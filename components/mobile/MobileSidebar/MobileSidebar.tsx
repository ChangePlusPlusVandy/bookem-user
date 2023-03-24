import React from 'react';
import {
  Container,
  IconContainer,
} from '@/styles/components/mobile/MobileSidebar/MobileSidebar.styles';
import { UserIcon } from '@/components/DesktopSidebar/UserIcon';
import { MobileUserIcon } from './MobileUserIcon';

const MobileSidebar = () => {
  return (
    <Container>
      <MobileUserIcon />
    </Container>
  );
};

export default MobileSidebar;
