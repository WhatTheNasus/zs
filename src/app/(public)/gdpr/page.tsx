// src/app/gdpr/page.tsx

import { Typography, Button } from '@mui/material';
import Link from 'next/link';

export const metadata = { title: 'Informácie o ochrane osobných údajov | ZS' };

const GdprPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1">
        Ochrana osobných údajov (GDPR)
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '15px', textAlign: 'justify' }}>
        <strong>Údaje uchovávame len počas nevyhnutného obdobia a chránime ich pred neoprávneným prístupom.</strong>
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '15px', textAlign: 'justify' }}>
        <strong>Vaše práva:</strong>
      </Typography>
      <Typography variant="body2" sx={{ marginTop: '10px', textAlign: 'justify' }}>
        - Právo na prístup k osobným údajom a informáciám o ich spracúvaní.
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
        - Právo na opravu nesprávnych alebo neúplných údajov.
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
        - Právo na vymazanie údajov (tzv. právo na zabudnutie) za určitých podmienok.
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
        - Právo na obmedzenie spracúvania údajov.
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
        - Právo na prenosnosť údajov k inému prevádzkovateľovi.
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
        - Právo podať sťažnosť na Úrad na ochranu osobných údajov Slovenskej republiky.
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '15px', textAlign: 'justify' }}>
        Pre viac informácií nás môžete kontaktovať na e-mailovej adrese: <strong>gdpr@zs.sk</strong>
      </Typography>

      {/* Button to navigate back to registration */}
      <Link href="/auth/registracia" passHref>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: '20px' }}
        >
          Späť na registráciu
        </Button>
      </Link>
    </div>
  );
};

export default GdprPage;
