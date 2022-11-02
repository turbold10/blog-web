import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { sendRequest } from "../utils/Api";
import { Container } from "@mui/system";
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate } from "react-router-dom";

export const SingleBlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogId, setBlogId] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const { data } = await sendRequest("post", "GET");
      setBlogs(data.data);
    };
    getData();
  }, []);
  
  const saveBlogId = (id) => {
    setBlogId(id)
    navigate(`/posts/${id}`);
  } 
  console.log("blogid:",blogId)

  return (
    <>
      <Container style={styles.blogContainer}>
        {blogs.length > 0 &&
          blogs.map((blog, i) => {
            return (
              <Card
                onClick={() => saveBlogId(blog.id)}
                key={i}
                style={styles.cardContainer}
                sx={{ maxWidth: 345, borderRadius: "24px", minHeight: 380 }}
              >
                {
                  blog.image ?
                  <CardMedia
                  component="img"
                  height="140"
                  image={blog.image}
                  alt="green iguana"
                  /> : <CircularProgress />
                }
                <CardContent>
                  <Typography
                    sx={{
                      variant: "h5",
                      component: "div",
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    {blog.text}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions style={styles.cardButtomSection}>
                  <Avatar alt="Travis Howard" src={blog.owner.picture} />
                  <Typography variant="body2" color="text.secondary">
                    {blog.owner.lastName} {blog.owner.firstName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    |
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.publishDate.substring(0, 10)}
                  </Typography>
                </CardActions>
              </Card>
            );
          })}
      </Container>
    </>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  blogContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
  },
  cardButtomSection: {
    width: 300,
    display: "flex",
    justifyContent: "space-around",
  },
};
