import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export const BookIcon = () => {
  const IconContainer = styled.div`
    width: 281px;
    height: 281px;
    border-radius: 50%;
    border: 2px solid black;
  `;

  const Icon = styled(Image)`
    text-align: center;
  `;
  return (
    <>
      <IconContainer>
        <Icon src="/event/bookmark.png" alt="" width={84.7} height={97.41} />
      </IconContainer>
    </>
  );
};
