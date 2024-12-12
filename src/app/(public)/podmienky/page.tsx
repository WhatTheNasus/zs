// src/app/podmienky/page.tsx

import { Typography, Container, Button } from '@mui/material';
import Link from 'next/link';

export const metadata = { title: 'Podmienky používania | ZS' };

const TermsAndConditionsPage = () => {
  return (
    <Container sx={{ padding: '30px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
        Podmienky používania
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: '20px' }}>
        Prosím, prečítajte si naše podmienky používania služby ZS.
      </Typography>

      {/* Terms and conditions content */}
      <Typography variant="body2" sx={{ textAlign: 'justify', marginBottom: '15px' }}>
        <strong>1. Úvod</strong><br />
        Tieto podmienky používania (ďalej len „podmienky“) sú záväzné pre každého používateľa (ďalej len „užívateľ“) webovej stránky ZS a všetkých súvisiacich služieb.
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'justify', marginBottom: '15px' }}>
        <strong>2. Práva a povinnosti používateľov</strong><br />
        Užívateľ sa zaväzuje, že bude dodržiavať všetky zákony a predpisy týkajúce sa používania služby. Všetky informácie poskytnuté užívateľom musia byť pravdivé a aktuálne.
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'justify', marginBottom: '15px' }}>
        <strong>3. Ochrana osobných údajov</strong><br />
        Služba ZS rešpektuje ochranu osobných údajov užívateľov v súlade s GDPR. Viac informácií o spracovaní osobných údajov nájdete v našich <Link href="/gdpr" passHref><Typography component="span" sx={{ color: '#1976d2', textDecoration: 'underline' }}>GDPR</Typography></Link> pravidlách.
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'justify', marginBottom: '15px' }}>
        <strong>4. Používanie služby</strong><br />
        Služba ZS je určená na vzdelávacie účely a používateľ sa zaväzuje využívať službu výlučne v súlade s jej účelom.
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'justify', marginBottom: '15px' }}>
        <strong>5. Zodpovednosť</strong><br />
        Za akékoľvek neautorizované použitie účtu alebo porušenie týchto podmienok zodpovedá používateľ. ZS nenesie zodpovednosť za škody vzniknuté zneužitím služby.
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'justify', marginBottom: '15px' }}>
        <strong>6. Zmena podmienok</strong><br />
        ZS si vyhradzuje právo kedykoľvek upravit tieto podmienky. Používatelia budú informovaní o všetkých zmenách prostredníctvom webovej stránky.
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'justify', marginBottom: '20px' }}>
        <strong>7. Kontakt</strong><br />
        Ak máte akékoľvek otázky týkajúce sa týchto podmienok, môžete nás kontaktovať na e-mailovej adrese <strong>support@zs.sk</strong>.
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
    </Container>
  );
};

export default TermsAndConditionsPage;
