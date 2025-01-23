"use client";

import React from 'react';
import { FaHome, FaSignInAlt, FaUserPlus, FaSearch, FaPlusSquare, FaSignOutAlt, FaInfoCircle } from 'react-icons/fa';
import { Avatar, Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import AuthenticatedView from "@/sections/AuthHomeView";

export default function Navbar() {
  const { data: session } = useSession();
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const unauthPaths = [
    { label: "Domov", icon: <FaHome />, path: "/" },
    { label: "O nás", icon: <FaInfoCircle />, path: "/o-nas" },
    { label: "Registrácia", icon: <FaUserPlus />, path: "/auth/registracia" },
    { label: "Prihlásenie", icon: <FaSignInAlt />, path: "/auth/prihlasenie" },
  ]

  const authPaths = [
    { label: "Domov", icon: <FaHome />, path: "/prispevok" },
    { label: "Hľadaj", icon: <FaSearch />, path: "/hladanie" },
    {
      label: "Profil",
      icon: (
        <Avatar
          alt="User Avatar"
          src={session?.user?.image || "/default-avatar.png"}
        />
      ),
      path: "/profil",
    },
    { label: "Pridaj", icon: <FaPlusSquare />, path: "/pridaj" },
    { label: "Odhlásenie", icon: <FaSignOutAlt />, path: "/auth/odhlasenie" },
  ];

  const navItems = session ? authPaths : unauthPaths;

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0, left: 0 }}>
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
    </Box>
  );
}