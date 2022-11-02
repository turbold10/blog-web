import { Box, Typography, Avatar, Container } from "@mui/material";
import React /*, { useEffect, useState } */from "react";
import { Styles } from "../styles/MyStyles";
import { Image } from "./Image";

export const PostMore = ( { posts }) => {
    return(
            <Box sx={Styles.container2}>
                <Typography variant="h4" component="h4" style={{marginLeft:"27%", width:"420px"}}>
                    10 Secrets for managing a remote team
                </Typography>
                <Container style={styles.mini}>
                    <Box style={styles.row}>
                        <Avatar
                            alt="img"
                            src={posts.owner?.picture}
                            sx={styles.proFile}
                        />
                        <Typography>
                            {posts.owner?.firstName}
                        </Typography>
                    </Box>
                    <Typography>
                        |
                    </Typography>
                    <Typography>
                        {posts.publishDate?.slice(0, 10)}
                    </Typography>
                </Container>
                {posts.image ? (<Image images={posts.image}/>) : (<></>)}
                <Typography style={{marginLeft:"27%", marginTop: "50px", width:"480px"}}>
                    {posts.text}
                    If you’re thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not!

In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal.

Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.

Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own.

Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and 

Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
                </Typography>      
            </Box>
)}

const styles = {
    container: {
        width: 900,
        backgroundColor:"gray"
    },
    proFile:{
        width: 56, 
        height: 56,
        marginRight: "10px"
    },
    mini:{
        display: "flex",
        flexDeriction: "row",
        justifyContent:"space-between",
        width:"360px",
        alignItems:"center",
        marginTop: "20px",
        marginLeft: "210px",
        color:"gray"
    },
    row:{
        display: "flex",
        flexDeriction: "row",
        alignItems:"center"
    }
}