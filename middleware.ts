import { testingAPI } from './utils/api-testing';

/**
 * THIS FILE HAS TO STAY HERE!
 * Use the default next-auth middleware pattern from https://next-auth.js.org/configuration/nextjs
 * If a user is not logged in, the default behavior is
 * to redirect them to the sign-in page.
 */
export { default } from 'next-auth/middleware';

/**
 * Configure which api routes to authenticate
 */
// when in development, export an empty config
export const config = {
  // match all routes in /api except for the route /api/users/create
  // the ?!(...) means match everything except for (...)
  // adapted from: https://nextjs.org/docs/messages/invalid-route-source
  matcher: testingAPI ? [] : ['/api/((?!users/create).*)'],
};

function middleware() {}
// when in development, export the empty middleware function
if (testingAPI) {
  module.exports = { ...module.exports, middleware };
}
