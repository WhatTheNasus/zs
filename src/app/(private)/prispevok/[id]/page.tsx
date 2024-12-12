// Import necessary modules
import Typography from "@mui/material/Typography";

// Metadata for the page
export const metadata = {
  title: "Detail Príspevku | ZS",
};

/**
 * PostDetail Component
 * Displays detailed information about a specific post.
 * @param {Object} props - Component props.
 * @param {Object} props.params - Parameters from the route.
 * @param {string} props.params.prispevokId - The ID of the post to display.
 */
export default function PostDetailPage({
  params,
}: {
  params: { prispevokId: string };
}) {
  return (
    <div style={{ padding: "1rem" }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Detail konkrétneho príspevku
      </Typography>
      <Typography variant="body1">ID: {params.prispevokId}</Typography>
    </div>
  );
}
