import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { UserIcon } from '@/components/UserIcon';

/**
 * Container of sidebar
 */
const SideBarBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  justify-content: space-between;
  width: 120px;
  height: 100vh;
  background-color: #6d6d6d;
`;

/**
 * Container of icon
 */
const IconBox = styled.div`
  padding-top: 20px;
`;

/**
 * Make each icon a link
 * @hoveredsrc src of the img when hovered or focused
 */
const IconLink = styled(Link)<{ hoveredsrc: string }>`
  display: inline-block;
  padding: 25px 0px 25px 0px;
  width: 100%;
  &:hover,
  &:focus {
    background-color: #d9d9d9;
    img {
      content: url(${props => props.hoveredsrc});
    }
  }
`;

/**
 * Icon image
 */
const Icon = styled(Image)``;

/**
 * Icon Param container.
 * Used to create icons through iteration
 * @defaultSrc src of the icon when not selected or hovered
 * @hoveredSrc src of the icon when selected or hovered
 * @linkTo where the link of icon directs to
 */
interface IconParams {
  defaultSrc: string;
  hoveredSrc: string;
  linkTo: string;
}

/**
 * List of IconParams
 */
const iconParamList: IconParams[] = [
  {
    defaultSrc: '/sidebar/home-white.png',
    hoveredSrc: '/sidebar/home-black.png',
    linkTo: '/',
  },
  {
    defaultSrc: '/sidebar/hand-shake-white.png',
    hoveredSrc: '/sidebar/hand-shake-black.png',
    linkTo: '/volunteer',
  },
  {
    defaultSrc: '/sidebar/currency-dollar-white.png',
    hoveredSrc: '/sidebar/currency-dollar-black.png',
    linkTo: '/donate',
  },
  {
    defaultSrc: '/sidebar/book-open-white.png',
    hoveredSrc: '/sidebar/book-open-black.png',
    linkTo: '/request',
  },
  {
    defaultSrc: '/sidebar/setting-white.png',
    hoveredSrc: '/sidebar/setting-black.png',
    linkTo: '/settings',
  },
];

/**
 * Default width of icons
 */
const iconWidth = 41.25;

/**
 * Default height of icons
 */
const iconHeight = 42.47;

export const SideBar = () => {
  return (
    <SideBarBox>
      <IconBox>
        <UserIcon />
      </IconBox>

      {/* Iterate through iconParamList to display icons */}
      {iconParamList.map(iconParam => {
        return (
          <IconBox key={iconParam.defaultSrc}>
            <IconLink href={iconParam.linkTo} hoveredsrc={iconParam.hoveredSrc}>
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
  );
};
