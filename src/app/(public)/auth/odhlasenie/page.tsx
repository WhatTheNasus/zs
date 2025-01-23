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
        <title>Odhlásenie | ZS</title>
      </Head>
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <Typography variant="h4">Naozaj sa chcete odhlásiť?</Typography>
        {session ? (
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSignOut}
            sx={{ marginTop: '15px' }}
          >
            Odhlásiť sa
          </Button>
        ) : (
          <Typography variant="body1" sx={{ marginTop: '15px' }}>
            Boli ste odhlásený.
          </Typography>
        )}
      </div>
    </>
  );
};

export default LogoutPage;
