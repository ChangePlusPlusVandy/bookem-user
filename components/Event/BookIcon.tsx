import React from 'react';
import { Icon, IconContainer } from '@/styles/components/Event/bookIcon.styles';
import { Media } from '@/lib/media';

/**
 * Contains the circle + the book icon
 */
const BookIcon = () => {
  return (
    <IconContainer>
      <Media greaterThanOrEqual="sm">
        <Icon src="/event/bookmark.png" alt="" width={120} height={120} />
      </Media>

      <Media lessThan="sm">
        <Icon src="/event/bookmark.png" alt="" width={100} height={100} />
      </Media>
    </IconContainer>
  );
};

export default BookIcon;
