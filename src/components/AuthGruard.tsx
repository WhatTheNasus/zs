// src/components/AuthGuard.tsx

'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface PrivateContentProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: PrivateContentProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Wait for loading state to finish
    if (status === 'loading') return;

    // Redirect to login page if no session found
    if (!session) {
      router.push('/auth/prihlasenie');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    // Optional: Add a loading spinner or message here
    return <div>Loading...</div>;
  }

  // Render children only if authenticated
  if (!session) {
    return null; // Optionally return a loading screen or redirect if no session is present
  }

  return <>{children}</>; // Render private content if authenticated
};

export default AuthGuard;
