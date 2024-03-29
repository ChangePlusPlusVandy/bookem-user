import styled from 'styled-components';
import Image from 'next/image';

export const HeaderBox = styled.div`
  display: flex;
  height: 48px;

  @media (max-width: 767px) {
    justify-content: space-between;
    align-items: center;
  }

  // Adjust the cursor for the img child element
  img:hover {
    cursor: pointer;
  }
`;

export const EventDetailText = styled.span`
  margin-left: 38px;
  font-size: 40px;
`;

export const Line = styled(Image)`
  width: 100%;
`;
