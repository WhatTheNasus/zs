// Import necessary modules
import Typography from "@mui/material/Typography";

// Metadata for the page
export const metadata = {
  title: "Detail Profilu | ZS",
};

/**
 * ProfileDetail Component
 * Displays detailed information about a specific user profile.
 * @param {Object} props - Component props.
 * @param {Object} props.params - Parameters from the route.
 * @param {string} props.params.id - The ID of the profile to display.
 */
export default function ProfileDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div style={{ padding: "1rem" }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Detail profilu
      </Typography>
      <Typography variant="body1">ID: {params.id}</Typography>
    </div>
  );
}
