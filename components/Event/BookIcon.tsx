import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export const BookIcon = () => {
  const IconContainer = styled.div`
    width: 248px;
    height: 248px;
    border-radius: 50%;
    border: 10px solid #5a5a5a;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Icon = styled(Image)``;
  return (
    <>
      <IconContainer>
        <Icon src="/event/bookmark.png" alt="" width={84.7} height={97.41} />
      </IconContainer>
    </>
  );
};
