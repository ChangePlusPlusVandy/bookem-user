import { SidebarIconParams } from '@/utils/types';

/**
 * Available routes as object
 */
export const AVAILABLE_ROUTES = {
  HOME: '/',
  VOLUNTEER: '/volunteer',
  SETTINGS: '/settings',
};

/**
 * Array of available routes
 *
 * e.g. ['./', '/volunteer', '/settings']
 */
export const AVAILABLE_ROUTES_ARRAY: string[] = Object.entries(
  AVAILABLE_ROUTES
).map(([_, value]) => value);

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
    mobileDefaultSrc: '/sidebar/home-black.png',
    desktopHoveredSrc: '/sidebar/home-black.png',
    mobileHoveredSrc: '/sidebar/home-white.png',
    linkTo: AVAILABLE_ROUTES.HOME,
    text: 'Home',
  },
  {
    desktopDefaultSrc: '/sidebar/volunteer-white.png',
    mobileDefaultSrc: '/sidebar/volunteer-black.png',
    desktopHoveredSrc: '/sidebar/volunteer-black.png',
    mobileHoveredSrc: '/sidebar/volunteer-white.png',
    linkTo: AVAILABLE_ROUTES.VOLUNTEER,
    text: 'Volunteer',
  },
  {
    desktopDefaultSrc: '/sidebar/setting-white.png',
    mobileDefaultSrc: '/sidebar/setting-black.png',
    desktopHoveredSrc: '/sidebar/setting-black.png',
    mobileHoveredSrc: '/sidebar/setting-white.png',
    linkTo: AVAILABLE_ROUTES.SETTINGS,
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
