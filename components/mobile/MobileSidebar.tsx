import React from 'react';
import {
  IconContainer,
  IconLink,
  Container,
} from '@/styles/components/Sidebar/sidebar.styles';
import { UserIcon } from '@/components/Sidebar/UserIcon';

const MobileSidebar = () => {
  return (
    <Container>
      <IconContainer>
        <UserIcon />
      </IconContainer>
    </Container>
  );
};

export default MobileSidebar;
