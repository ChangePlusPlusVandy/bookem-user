import { SidebarIconParams } from '@/utils/types';

/**
 * Default width of icons
 */
export const SIDEBAR_ICON_WIDTH = 41.25;

/**
 * Default height of icons
 */
export const SIDEBAR_ICON_HEIGHT = 42.47;

/**
 * List of IconParams
 */
export const SIDEBAR_ICON_PARAMS: SidebarIconParams[] = [
  {
    desktopDefaultSrc: '/sidebar/home-white.png',
    mobileDefaultSrc: '',
    desktopHoveredSrc: '/sidebar/home-black.png',
    mobileHoveredSrc: '',
    linkTo: '/',
    text: 'Home',
  },
  {
    desktopDefaultSrc: '/sidebar/volunteer-white.png',
    mobileDefaultSrc: '',
    desktopHoveredSrc: '/sidebar/volunteer-black.png',
    mobileHoveredSrc: '',
    linkTo: '/volunteer',
    text: 'Volunteer',
  },
  {
    desktopDefaultSrc: '/sidebar/setting-white.png',
    mobileDefaultSrc: '',
    desktopHoveredSrc: '/sidebar/setting-black.png',
    mobileHoveredSrc: '',
    linkTo: '/settings',
    text: 'Settings',
  },
];

/**
 * Default width of event contact icons
 */
export const EVENT_CONTACT_ICON_WIDTH = 23;

/**
 * Default height of event contact icons
 */
export const EVENT_CONTACT_ICON_HEIGHT = 23;
