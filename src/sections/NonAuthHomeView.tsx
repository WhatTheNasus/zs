import { Container, Typography, Box } from "@mui/material";

export default function NonAuthHomeView() {
  return (
    <div style={{ padding: "1rem" }}>
      <Container>
        <Box sx={{ mt: 4, mb: 3 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Vitajte na stránke!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Domovská stránka - neprihlásený
          </Typography>
          <Typography variant="body2">
            Registrujte sa, aby ste mohli pridať príspevky a zobraziť profil.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
