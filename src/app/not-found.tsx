// src/app/not-found.tsx

import { Typography, Container, Box } from '@mui/material';

export const metadata = { title: 'Page Not Found | ZS' };

const NotFound = () => {
  return (
    <Container sx={{ textAlign: 'center', padding: '40px' }}>
      <Box>
        <Typography variant="h4" component="h1" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: '30px' }}>
          Sorry, the page you are looking for does not exist.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
