"use client";

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Button, Typography } from '@mui/material';
import Head from 'next/head';

const LogoutPage = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <>
      <Head>
        <title>Sign Out | ZS</title>
      </Head>
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <Typography variant="h4">Sign Out</Typography>
        {session ? (
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSignOut}
            sx={{ marginTop: '15px' }}
          >
            Sign Out
          </Button>
        ) : (
          <Typography variant="body1" sx={{ marginTop: '15px' }}>
            You are not logged in.
          </Typography>
        )}
      </div>
    </>
  );
};

export default LogoutPage;
