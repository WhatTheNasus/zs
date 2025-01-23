// src/app/o-mne/page.tsx

import { Typography, Container } from '@mui/material';

export const metadata = { title: 'O nás | ZS' };

const AboutPage = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Container sx={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
          O nás
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Informácie o nás.
        </Typography>
      </Container>
    </div>
  );
};

export default AboutPage;
