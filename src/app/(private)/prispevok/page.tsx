// Import necessary modules
import Typography from "@mui/material/Typography";

// Metadata for the page
export const metadata = {
  title: "Zoznam Príspevkov | ZS",
};

/**
 * PostList Component
 * Displays a list of posts.
 */
export default function PostListPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Zoznam Príspevkov
      </Typography>
    </div>
  );
}
