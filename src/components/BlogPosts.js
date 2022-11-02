import { Container, Typography } from "@mui/material";
import React from "react";
import { SingleBlogPost } from "./SingleBlogPost";

export const BlogPosts = () => {
  return (
    <Container>
      <Typography sx={{ variant: "h1", fontWeight: "bold", fontSize: 48 }}>
        Blog posts
      </Typography>
      <Typography color="text.secondary">
        Our latest updates and blogs about managing your team
      </Typography>
      <SingleBlogPost />
    </Container>
  );
};