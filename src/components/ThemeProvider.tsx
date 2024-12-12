"use client"; // This marks the component as a client component

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, IconButton } from '@mui/material'; 
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Theme context type definition
type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

// Hook for using the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Main ThemeProvider component
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
        main: isDarkMode ? '#ff4081' : '#6200ea',
      },
      secondary: {
        main: isDarkMode ? '#c6ff00' : '#03dac6',
      },
      background: {
        default: isDarkMode ? '#121212' : '#f5f5f5',
        paper: isDarkMode ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: isDarkMode ? '#e0e0e0' : '#202124',
        secondary: isDarkMode ? '#bdbdbd' : '#5f6368',
      },
    },
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
      },
      button: {
        textTransform: 'uppercase',
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            padding: '10px 20px',
            fontSize: '1rem',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: isDarkMode ? '#e0e0e0' : '#202124',
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            background: isDarkMode
              ? 'linear-gradient(to bottom, #212121, #424242)'
              : 'linear-gradient(to bottom, #ffffff, #e3f2fd)',
            position: 'relative',
          }}
        >
          {/* Toggle button for dark/light mode */}
          <IconButton
            onClick={toggleDarkMode}
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
            }}
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {children}
        </div>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
