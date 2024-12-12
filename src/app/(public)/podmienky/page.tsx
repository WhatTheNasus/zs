// src/app/podmienky/page.tsx

import { Typography, Container } from '@mui/material';

export const metadata = { title: 'Terms and Conditions | ZS' };

const TermsAndConditionsPage = () => {
  return (
    <Container sx={{ padding: '30px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
        Terms and Conditions
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Please review our terms of service for using ZS.
      </Typography>
    </Container>
  );
};

export default TermsAndConditionsPage;
