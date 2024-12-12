"use client";

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button, Box, Typography, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import Image from 'next/image';
import GoogleIcon from '../../../../icon/google.svg';
import GitHubIcon from '../../../../icon/github.svg';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';

const Register = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isGdprChecked, setIsGdprChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (provider) => {
    if (!isGdprChecked) {
      setErrorMessage('Musíte súhlasiť so spracovaním osobných údajov.');
      return;
    }
    setErrorMessage('');
    await signIn(provider);
  };

  const handleCheckboxChange = (event) => {
    setIsGdprChecked(event.target.checked);
    setErrorMessage('');
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
            Vytvorte si účet
          </Typography>

          {errorMessage && (
            <Typography sx={{
              color: 'red',
              marginBottom: '15px',
              fontSize: '1rem',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '5px',
              borderRadius: '5px',
              backgroundColor: '#ffebeb', // Light red background to make the message stand out
              width: '100%',
            }}>
              Musíte súhlasiť s GDPR podmienkami.
            </Typography>
          )}


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
            }}
          >
            <Image src={GoogleIcon} alt="Google" width={20} height={20} style={{ marginRight: '12px' }} />
            Registrovať cez Google
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
            }}
          >
            <Image src={GitHubIcon} alt="GitHub" width={20} height={20} style={{ marginRight: '12px' }} />
            Registrovať cez GitHub
          </Button>

          <FormControlLabel
            control={
              <Checkbox
                checked={isGdprChecked}
                onChange={handleCheckboxChange}
                sx={{
                  color: isDarkMode ? '#fff' : '#000',
                  '&.Mui-checked': {
                    color: '#1976d2',
                  },
                }}
              />
            }
            label={
              <Typography sx={{ color: isDarkMode ? '#fff' : '#333' }}>
                Súhlasím so spracovaním osobných údajov{' '}
                <Link href="/gdpr" passHref>
                  <Typography
                    component="span"
                    sx={{
                      color: '#1976d2',
                      fontWeight: '600',
                      cursor: 'pointer',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    GDPR
                  </Typography>
                </Link>
                {' a '}
                <Link href="/podmienky" passHref>
                  <Typography
                    component="span"
                    sx={{
                      color: '#1976d2',
                      fontWeight: '600',
                      cursor: 'pointer',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    podmienkami používania
                  </Typography>
                </Link>
              </Typography>
            }
            sx={{ marginTop: '15px' }}
          />


          <Typography sx={{
            marginTop: '20px',
            color: isDarkMode ? '#bbb' : '#555',
            fontSize: '0.9rem',
          }}>
            Už máte účet?{' '}
            <Link href="/auth/prihlasenie" passHref>
              <Typography component="span" sx={{
                color: '#1976d2',
                fontWeight: '600',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}>
                Prihlásiť sa
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
