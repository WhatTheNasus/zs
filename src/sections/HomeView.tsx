"use client";

import { useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress"; // Added loading spinner

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Typography variant="h4" sx={{ textAlign: "center", mt: 2 }}>
      {session ? `Welcome, ${session.user?.name || "User"}` : "Welcome guest"}
    </Typography>
  );
}
