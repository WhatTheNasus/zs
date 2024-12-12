// src/app/gdpr/page.tsx

import { Typography } from '@mui/material';

export const metadata = { title: 'GDPR Information | ZS' };

const GdprPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1">
        General Data Protection Regulation (GDPR)
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '15px' }}>
        Learn about how we handle your personal data and comply with GDPR requirements.
      </Typography>
    </div>
  );
};

export default GdprPage;
