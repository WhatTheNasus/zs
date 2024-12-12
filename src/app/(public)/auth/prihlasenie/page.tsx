"use client";

import { signIn } from 'next-auth/react';
import { Button, Box, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import GoogleIcon from '../../../../icon/google.svg';
import GitHubIcon from '../../../../icon/github.svg';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';

const LoginPage = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleGoogleLogin = async () => {
    await signIn('google');
  };

  const handleGitHubLogin = async () => {
    await signIn('github');
  };

  return (
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
        backgroundColor: isDarkMode ? '#333' : '#fff',
      }}>
        <Typography variant="h5" sx={{
          marginBottom: '25px',
          fontWeight: 'bold',
          color: isDarkMode ? '#fff' : '#333',
          fontSize: '1.5rem',
        }}>
          Prihláste sa do svojho účtu
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleGoogleLogin}
          sx={{
            width: '100%',
            marginBottom: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            padding: '12px',
            borderRadius: '50px',
            transition: '0.3s ease',
          }}
        >
          <Image src={GoogleIcon} alt="Google" width={20} height={20} style={{ marginRight: '12px' }} />
          Pokračovať cez Google
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleGitHubLogin}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            padding: '12px',
            borderRadius: '50px',
            transition: '0.3s ease',
          }}
        >
          <Image src={GitHubIcon} alt="GitHub" width={20} height={20} style={{ marginRight: '12px' }} />
          Pokračovať cez GitHub
        </Button>

        <Typography sx={{
          marginTop: '20px',
          color: isDarkMode ? '#bbb' : '#555',
          fontSize: '0.9rem',
        }}>
          Ešte nemáte účet?{' '}
          <Link href="/auth/registracia" passHref>
            <Typography component="span" sx={{
              color: '#1976d2',
              fontWeight: '600',
              cursor: 'pointer',
            }}>
              Zaregistrujte sa teraz
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
  );
};

export default LoginPage;
