import React from 'react';
import { Container } from '@/styles/components/mobile/MobileSidebar/sidebar.styles';
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
