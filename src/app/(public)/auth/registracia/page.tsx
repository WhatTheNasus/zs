"use client";

import React from 'react';
import { signIn } from 'next-auth/react';
import { Button, Box, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import GoogleIcon from '../../../../icon/google.svg';
import GitHubIcon from '../../../../icon/github.svg';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';

const Register = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleLogin = async (provider) => {
    await signIn(provider);
  };

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'transparent',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '400px',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          backgroundColor: isDarkMode ? '#333' : '#ffffff',
        }}>
          <Typography variant="h5" sx={{
            marginBottom: '25px',
            fontWeight: 'bold',
            color: isDarkMode ? '#fff' : '#333',
            fontSize: '1.5rem',
          }}>
            Create an Account
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLogin('google')}
            sx={{
              width: '100%',
              marginBottom: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              padding: '12px',
              borderRadius: '50px',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#4285f4',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <Image src={GoogleIcon} alt="Google" width={20} height={20} style={{ marginRight: '12px' }} />
            Register via Google
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleLogin('github')}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              padding: '12px',
              borderRadius: '50px',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#333',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <Image src={GitHubIcon} alt="GitHub" width={20} height={20} style={{ marginRight: '12px' }} />
            Register via GitHub
          </Button>

          <Typography sx={{
            marginTop: '20px',
            color: isDarkMode ? '#bbb' : '#555',
            fontSize: '0.9rem',
          }}>
            Already have an account?{' '}
            <Link href="/auth/prihlasenie" passHref>
              <Typography component="span" sx={{
                color: '#1976d2',
                fontWeight: '600',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}>
                Log In
              </Typography>
            </Link>
          </Typography>

          <IconButton
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              color: isDarkMode ? '#fff' : '#000',
            }}
            onClick={toggleDarkMode}
          >
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Register;
