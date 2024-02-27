import { SidebarIconParams } from '@/utils/types';

// Color themes for the app
export const BOOKEM_THEME = {
  colors: {
    WHITE: '#FFFFFF',
    BOOKEM_BLACK: '#2C2C2C',
    BOOKEM_LIGHT_GRAY: '#F4F4F4',
    BOOKEM_RED: '#DA4347',
    BOOKEM_BLUE: '#83BCDA',
    BOOKEM_YELLOW: '#F1E09A',
  },
  fonts: {
    PRIMARY: 'Inter',
    SECONDARY: 'sans-serif',
  },
  fontSizes: {
    EXTRA_SMALL: '1rem',
    SMALL: '1.2rem',
    MEDIUM: '1.6rem',
    LARGE: '2.4rem',
  },
};

/**
 * The list of images used in the login and register pages
 */
export const LOGIN_REGISTER_IMAGES = {
  LOGIN: '/login/login.png',
  REGISTER_1: '/login/register-1.png',
  REGISTER_2: '/login/register-2.png',
  REGISTER_3: '/login/register-3.png',
  REGISTER_4: '/login/register-4.png',
  REGISTER_5: '/login/register-5.png',
  REGISTER_6: '/login/register-6.png',
};

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
export const SIDEBAR_ICON_WIDTH = 50;

/**
 * Default height of icons
 */
export const SIDEBAR_ICON_HEIGHT = 50;

/**
 * List of IconParams
 */
export const SIDEBAR_ICON_PARAMS: SidebarIconParams[] = [
  {
    desktopDefaultSrc: '/sidebar/home-white.svg',
    mobileDefaultSrc: '/sidebar/home-black.svg',
    desktopHoveredSrc: '/sidebar/home-black.svg',
    mobileHoveredSrc: '/sidebar/home-white.svg',
    linkTo: AVAILABLE_ROUTES.HOME,
    text: 'Home',
  },
  {
    desktopDefaultSrc: '/sidebar/volunteer-white.svg',
    mobileDefaultSrc: '/sidebar/volunteer-black.svg',
    desktopHoveredSrc: '/sidebar/volunteer-black.svg',
    mobileHoveredSrc: '/sidebar/volunteer-white.svgs',
    linkTo: AVAILABLE_ROUTES.VOLUNTEER,
    text: 'Volunteer',
  },
  {
    desktopDefaultSrc: '/sidebar/setting-white.svg',
    mobileDefaultSrc: '/sidebar/setting-black.svg',
    desktopHoveredSrc: '/sidebar/setting-black.svg',
    mobileHoveredSrc: '/sidebar/setting-white.svg',
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
