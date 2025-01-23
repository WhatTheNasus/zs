// import Typography from "@mui/material/Typography";
import PostsView from "@/views/(private)/PostsView";

export const metadata = {
  title: "Zoznam Príspevkov | ZS",
};

const PostListPage = () => <PostsView />;

export default PostListPage;

// export default function PostListPage() {
//   return (
//     <div style={{ padding: "1rem" }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Zoznam Príspevkov
//       </Typography>
//       <PostsPage />
//     </div>
//   );
// }