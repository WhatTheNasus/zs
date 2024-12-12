import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github'; // GitHub provider import
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma';

export const authOptions: NextAuthOptions = {
  // Use Prisma adapter to integrate NextAuth with Prisma
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '', // Google OAuth Client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '', // Google OAuth Client Secret
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '', // GitHub OAuth Client ID
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '', // GitHub OAuth Client Secret
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET, // Secret for encryption

  pages: {
    signIn: '/auth/prihlasenie', // Custom sign-in page
    signOut: '/auth/odhlasenie', // Custom sign-out page
  },

  callbacks: {
    // Redirect user to a specific page after successful authentication
    async redirect() {
      return 'http://localhost:3000/prispevok'; // Redirect to a custom page
    },
  },
};
