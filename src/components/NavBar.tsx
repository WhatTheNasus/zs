"use client"; // This marks the component as a client component

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@/components/ThemeProvider'; // Import the custom useTheme hook
import { FaHome, FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaSearch, FaPlusSquare } from 'react-icons/fa'; // Importing from React Icons (Common and widely used)
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// Unaouthenticated paths
const unauthPaths = [
  { label: "Domov", icon: <FaHome />, path: '/' },
  { label: "Gdpr", icon: <FaUser />, path: '/gdpr' },
  { label: "O mne", icon: <FaUser />, path: '/o-mne' },
  { label: "Podmienky", icon: <FaUser />, path: '/podmienky' },
  { label: "Prihlásenie", icon: <FaSignInAlt />, path: '/auth/prihlasenie' },
  { label: "Registrácia", icon: <FaUserPlus />, path: '/auth/registracia' },
];

// Authenticated paths
const authPaths = [
  { label: "Domov", icon: <FaHome />, path: '/' },
  { label: "Profily", icon: <FaUser />, path: '/profil' },
  { label: "Hľadanie", icon: <FaSearch />, path: '/hladanie' },
  { label: "Príspevky", icon: <FaPlusSquare />, path: '/prispevok' },
  { label: "Odhlásenie", icon: <FaSignOutAlt />, path: '/auth/odhlasenie' },
];

export default function Navbar() {
  const { data: session } = useSession();
  const { isDarkMode, toggleDarkMode } = useTheme(); // Access theme context
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  
  const navItems = session ? authPaths : unauthPaths;

  // Update active tab based on current path
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const activeIndex = navItems.findIndex(item => item.path === currentPath);
    setValue(activeIndex !== -1 ? activeIndex : 0); // Default to 0 if path not found
  }, [router, navItems]);

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction 
            key={index}
            label={item.label} 
            icon={item.icon} 
            onClick={() => router.push(item.path)} 
          />
        ))}
      </BottomNavigation>

      {/* Dark mode toggle button */}
      <IconButton
        sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />} {/* Toggle between icons */}
      </IconButton>
    </Box>
  );
}
