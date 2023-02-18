// NextAuth documentation: https://next-auth.js.org/getting-started/example
import dbConnect from '@/lib/dbConnect';
import Users from 'bookem-shared/src/models/Users';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import { SessionStrategy } from 'next-auth/core/types';
import { QueriedUserData } from 'bookem-shared/src/types/database';
import { JWT } from 'next-auth/jwt';

const sessionStrategy: SessionStrategy = 'jwt';

export const authOptions = {
  // configure adaptor to mongoDB database using mongoose
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: sessionStrategy,
    maxAge: 24 * 60 * 60, // 1 day
  },
  providers: [
    // Credentials docs: https://next-auth.js.org/providers/credentials
    CredentialsProvider({
      id: 'credentials',
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'test_user@bookem.org',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // if credentials do not exist, return null
        if (!credentials) return null;

        // get user email and password from credentials
        const { email, password } = credentials;

        // connect to database
        await dbConnect();

        // check if user's email exists in database
        const user = await Users.findOne({ email });

        // if user does not exist, return null
        if (!user) return null;

        // compare password hash with database hash
        const checkPassword = await bcrypt.compare(password, user.password);

        // if password is incorrect, return null
        if (!checkPassword) return null;

        // success. return user
        return user;
      },
    }),
    // Google docs: https://next-auth.js.org/providers/google
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],

  pages: {
    // Configure the route for signin page
    signIn: '/login',
  },

  callbacks: {
    /**
     * Update session's user.id with token.uid
     * @param session
     * @param token Contains user id
     * @returns session with user.id inside
     */
    async session({ session, token }: { session: any; token: any }) {
      //session.accessToken = token.accessToken;
      console.log('Session Token: ', token);
      if (session?.user) {
        console.log('User in session: ', session.user);
        session.user._id = token.uid;
      }
      console.log('session callback returning');
      console.log('Session: ', session);
      return session;
    },

    /**
     * Put user id inside JWT token
     * @param token JWT token
     * @param user Logged in user
     * @returns JWT token with user's id encrypted inside
     */
    async jwt({ token, user }: { token: JWT; user?: QueriedUserData | any }) {
      console.log('JWT Token: ', token);

      if (user) {
        console.log('Logged in User: ', user);
        token.uid = user._id;
      }

      return token;
    },
  },
};

export default NextAuth(authOptions);
