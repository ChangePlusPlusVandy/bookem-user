import React from 'react';
import {
  CircularProgress,
  Icon,
  IconContainer,
} from '@/styles/components/Event/bookIcon.styles';
import { Media } from '@/lib/media';
import { BOOKEM_THEME } from '@/utils/constants';

/**
 * Contains the circle + the book icon
 */
const BookIcon = ({ count, total }: { count: number; total: number }) => {
  const strokeWidth = 4;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (count / total) * circumference;

  return (
    <IconContainer>
      <CircularProgress viewBox={`0 0 ${2 * radius} ${2 * radius}`}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
          fill="none"
          stroke={BOOKEM_THEME.colors.BOOKEM_LIGHT_GRAY}
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
          fill="none"
          stroke="black"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
      </CircularProgress>
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
