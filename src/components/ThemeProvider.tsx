"use client"; // This marks the component as a client component

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, IconButton } from '@mui/material'; 
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persist theme preference across sessions
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#673ab7' : '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: isDarkMode ? '#121212' : '#fafafa',
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#000000',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: isDarkMode ? '#9c27b0' : '#1565c0',
            },
            borderRadius: '8px',
            padding: '8px 16px',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
            },
          },
        },
      },
    },
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          position: 'relative',
        }}>
          {/* Toggle button for dark/light mode */}
          <IconButton 
            onClick={toggleDarkMode} 
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              color: isDarkMode ? '#fff' : '#000',
            }}
          >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          {children}
        </div>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
