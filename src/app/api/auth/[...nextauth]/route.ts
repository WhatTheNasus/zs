// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth';
import { authOptions } from './authOptions';

// Initialize NextAuth with the provided configuration options
const authHandler = NextAuth(authOptions);

// Export GET and POST handlers for the authentication routes
export { authHandler as GET, authHandler as POST };
