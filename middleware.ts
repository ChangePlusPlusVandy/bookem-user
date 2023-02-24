import { NextResponse } from 'next/server';

/**
 * THIS FILE HAS TO STAY HERE!
 * Use the default next-auth middleware pattern.
 * If a user is not logged in, the default behavior is
 * to redirect them to the sign-in page.
 */
export { default } from 'next-auth/middleware';

// TODO: figure out why this is necessary
export async function middleware(req: any, ev: any) {}

/**
 * Configure which api routes to authenticate
 */
export const config = {
  matcher: ['/api/:function*'],
};
