import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserIcon } from '@/components/UserIcon';
import { useRouter } from 'next/router';

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
const IconLink = styled(Link)<{ hoveredsrc: string; isActive: boolean }>`
  display: inline-block;
  padding: 25px 0px 25px 0px;
  width: 100%;
  &:hover {
    background-color: #d9d9d9;
    img {
      content: url(${props => props.hoveredsrc});
    }
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: '#d9d9d9';
  `}
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
  isActive: boolean;
}

/**
 * Default width of icons
 */
const iconWidth = 41.25;

/**
 * Default height of icons
 */
const iconHeight = 42.47;

export const SideBar = () => {
  /**
   * List of IconParams
   */
  const [iconParamList, setIconParamList] = useState<IconParams[]>([
    {
      defaultSrc: '/sidebar/home-white.png',
      hoveredSrc: '/sidebar/home-black.png',
      linkTo: '/',
      isActive: false,
    },
    {
      defaultSrc: '/sidebar/hand-shake-white.png',
      hoveredSrc: '/sidebar/hand-shake-black.png',
      linkTo: '/volunteer',
      isActive: false,
    },
    {
      defaultSrc: '/sidebar/currency-dollar-white.png',
      hoveredSrc: '/sidebar/currency-dollar-black.png',
      linkTo: '/donate',
      isActive: false,
    },
    {
      defaultSrc: '/sidebar/book-open-white.png',
      hoveredSrc: '/sidebar/book-open-black.png',
      linkTo: '/request',
      isActive: false,
    },
    {
      defaultSrc: '/sidebar/setting-white.png',
      hoveredSrc: '/sidebar/setting-black.png',
      linkTo: '/settings',
      isActive: false,
    },
  ]);
  const { pathname } = useRouter();
  const setIconActive = () => {
    setIconParamList(iconParamList => {
      return iconParamList.map(iconParam => {
        iconParam.isActive = false;
        return iconParam;
      });
    });

    setIconParamList(iconParamList => {
      return iconParamList.map(iconParam => {
        console.log('Linked to: ', iconParam.linkTo);
        console.log('Path name: ', pathname);
        if (iconParam.linkTo === pathname) {
          iconParam.isActive = true;
        }
        return iconParam;
      });
    });
  };

  useEffect(() => {
    console.log(pathname);
    setIconActive();
  }, [pathname]);

  return (
    <SideBarBox>
      <IconBox>
        <UserIcon />
      </IconBox>

      {/* Iterate through iconParamList to display icons */}
      {iconParamList.map(iconParam => {
        return (
          <IconBox key={iconParam.defaultSrc}>
            <IconLink
              href={iconParam.linkTo}
              hoveredsrc={iconParam.hoveredSrc}
              isActive={iconParam.isActive}>
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
