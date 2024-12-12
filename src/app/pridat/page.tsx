// src/app/pridat/page.tsx

import { Typography, Container, Box, Button } from '@mui/material';

export const metadata = { title: 'Add Form | ZS' };

const FormularAdd = () => {
  return (
    <Container sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
        Add a New Entry
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: '30px' }}>
        Fill out the form below to add a new entry to ZS.
      </Typography>

      {/* Sample Form Section */}
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Input Fields can be added here */}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default FormularAdd;
