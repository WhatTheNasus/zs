import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"; // Uncomment Box if needed
import { Session } from "next-auth";

export default function AuthHomeView({ session }: { session: Session }) {

  if (!session) {
    return (
      <Container>
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Vitajte, {session?.user?.name || "užívateľ"}!
      </Typography>

      {/* Display session data for debugging (conditionally for production) */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          {JSON.stringify(session, null, 2)}
        </Typography>
      </Box>
    </Container>
  );
}
