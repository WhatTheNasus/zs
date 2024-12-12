// //src/app/hladanie/page.tsx

// import Typography from '@mui/material/Typography';

// export const metadata = { title: "Vyhladavanie | ZoškaSnap"};

// export default function Search() {
//   return (

//       <Typography> Vyhladavanie </Typography>
    
//   );

// }

// Import necessary modules
import Typography from "@mui/material/Typography";

// Metadata for the page
export const metadata = {
  title: "Vyhľadávanie | ZS",
};

/**
 * Search Component
 * Displays the search page content.
 */
export default function SearchPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Vyhľadávanie
      </Typography>
    </div>
  );
}
