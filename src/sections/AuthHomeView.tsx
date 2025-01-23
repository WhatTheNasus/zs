import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
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
    <div style={{ padding: "1rem" }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Vitajte, {session?.user?.name || "užívateľ"}!
        </Typography>
        <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
          <Avatar
            alt="User Avatar"
            src={session.user?.image || "/default-avatar.png"}
            sx={{ width: 56, height: 56, mr: 2 }}
          />
          <Box>
            <Typography variant="body1">
              Meno: {session.user?.name}
            </Typography>
            <Typography variant="body1">
              Email: {session.user?.email}
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}