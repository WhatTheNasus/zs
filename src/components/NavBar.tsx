"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useRouter } from "next/navigation";
import { FaHome, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaSearch, FaPlusSquare } from "react-icons/fa";

export default function Navbar() {
  const { data: session } = useSession();
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const unauthPaths = [
    { label: "Domov", icon: <FaHome />, path: "/" },
    { label: "Prihlásenie", icon: <FaSignInAlt />, path: "/auth/prihlasenie" },
    { label: "Registrácia", icon: <FaUserPlus />, path: "/auth/registracia" },
  ];

  const authPaths = [
    { label: "Domov", icon: <FaHome />, path: "/" },
    {
      label: session?.user?.name || "Profil",
      icon: (
        <Avatar
          alt="User Avatar"
          src={session?.user?.image || "/default-avatar.png"}
        />
      ),
      path: "/profil",
    },
    { label: "Hľadanie", icon: <FaSearch />, path: "/hladanie" },
    { label: "Príspevky", icon: <FaPlusSquare />, path: "/prispevok" },
    { label: "Odhlásenie", icon: <FaSignOutAlt />, path: "/auth/odhlasenie" },
  ];

  const navItems = session ? authPaths : unauthPaths;

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const activeIndex = navItems.findIndex(item => item.path === currentPath);
    setValue(activeIndex !== -1 ? activeIndex : 0);
  }, [router, navItems]);

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