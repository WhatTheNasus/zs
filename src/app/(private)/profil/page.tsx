// Import necessary modules
import Typography from "@mui/material/Typography";

// Metadata for the page
export const metadata = {
  title: "Zoznam Profilov | ZS",
};

/**
 * ProfileList Component
 * Displays a list of user profiles.
 */
export default function ProfileListPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Zoznam Profilov
      </Typography>
    </div>
  );
}
