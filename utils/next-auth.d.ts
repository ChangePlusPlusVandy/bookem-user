import NextAuth from 'next-auth';

/**
 * Documentation: https://next-auth.js.org/getting-started/typescript
 */
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's mongodb id. */
      _id: mongoose.SeTypes.ObjectId;
      /** The user's email. */
      email: string;
      /** The user's image */
      profileImageUrl: string;
      /** The user's name. */
      name: string;
    };
  }
}
