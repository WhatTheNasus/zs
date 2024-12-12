// src/app/notifikacie/page.tsx

import { Typography, Container } from '@mui/material';

export const metadata = { title: 'Notifications | ZS' };

const NotificationsPage = () => {
  return (
    <Container sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
        Notifications
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Stay updated with the latest notifications from ZS.
      </Typography>
    </Container>
  );
};

export default NotificationsPage;
