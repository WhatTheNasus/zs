// src/app/o-mne/page.tsx

import { Typography, Container } from '@mui/material';

export const metadata = { title: 'O nás | ZS' };

const AboutPage = () => {
  return (
    <Container sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
        About ZS
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Welcome to ZS! Learn more about our platform and its mission.
      </Typography>
    </Container>
  );
};

export default AboutPage;
