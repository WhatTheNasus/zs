"use client";

import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { fetchPostById } from "@/app/actions/posts";

interface Post {
  id: string;
  userId: string;
  imageUrl: string;
  caption: string;
  createdAt: string;
  updatedAt: string;
  user: {
    name: string;
  };
}

const PostDetailPage = ({ params }: { params: { prispevokId: string } }) => {
  const [post, setPost] = useState<Post | null>(null);
  const { prispevokId } = params;
  
  console.log("params", params);
  console.log("prispevokId", prispevokId);

  useEffect(() => {
    const loadPost = async () => {
      try {
        if (!prispevokId) {
          console.error("No prispevokId provided");
          return;
        }
        const fetchedPost: Post = await fetchPostById(prispevokId);
        console.log("fetchedPost", fetchedPost);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };

    loadPost();
  }, [prispevokId]);

  if (!post) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">{post.caption}</Typography>
      <Typography variant="body1">{post.user.name}</Typography>
      <img src={post.imageUrl} alt={post.caption} />
    </Container>
  );
};

export default PostDetailPage;