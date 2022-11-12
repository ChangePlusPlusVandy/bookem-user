// NextAuth documentation: https://next-auth.js.org/getting-started/example
import clientPromise from 'lib/mongodb';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    // Credentials docs: https://next-auth.js.org/providers/credentials
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'test_user@bookem.org',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = credentials;
        if (password !== process.env.TEST_USER_PASSWD) return null;

        const client = await clientPromise;
        const db = client.db();
        const user = await db.collection('users').findOne({ email });

        if (!user) return null;
        return { ...user, id: '123' };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],
};

export default NextAuth(authOptions);
