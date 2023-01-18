import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { UserIcon } from './Home/UserIcon';

const SideBarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  justify-content: space-between;
  width: 156px;
  height: 100vh;
  background-color: #6d6d6d;
`;

const IconBox = styled.div``;

const IconLink = styled(Link)<{ hoveredsrc?: string }>`
  display: inline-block;
  padding: 25px 0px 25px 0px;
  width: 100%;
  &:hover,
  &:focus {
    background-color: #d9d9d9;
  }

  &:hover,
  &:focus > div {
    src: ${props => props.hoveredsrc};
  }
`;

interface IconParams {
  defaultSrc: string;
  hoveredSrc: string;
}

const iconParamList: IconParams[] = [
  {
    defaultSrc: '/sidebar/home-white.png',
    hoveredSrc: '/sidebar/home-black.png',
  },
  {
    defaultSrc: '/sidebar/hand-shake-white.png',
    hoveredSrc: '/sidebar/hand-shake-black.png',
  },
  {
    defaultSrc: '/sidebar/currency-dollar-white.png',
    hoveredSrc: '/sidebar/currency-dollar-black.png',
  },
  {
    defaultSrc: '/sidebar/book-open-white.png',
    hoveredSrc: '/sidebar/book-open-black.png',
  },
  {
    defaultSrc: '/sidebar/setting-white.png',
    hoveredSrc: '/sidebar/setting-black.png',
  },
];

const Icon = styled(Image)``;
const iconWidth = 41.25;
const iconHeight = 42.47;

export const SideBar = () => {
  return (
    <>
      <SideBarBox>
        <IconBox>
          <UserIcon />
        </IconBox>
        {iconParamList.map(iconParam => {
          return (
            <IconBox key={iconParam.defaultSrc}>
              <IconLink href="#" hoveredsrc={iconParam.hoveredSrc}>
                <Icon
                  src={iconParam.defaultSrc}
                  alt=""
                  width={iconWidth}
                  height={iconHeight}
                />
              </IconLink>
            </IconBox>
          );
        })}
      </SideBarBox>
    </>
  );
};
