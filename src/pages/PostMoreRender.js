import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { PostMore, AddComment, CommentRender } from "../components"
import {sendRequest} from "../utils/Api";
import { useParams } from 'react-router-dom';
export const PostMoreRender = () => {
    const { id: id } = useParams();
    console.log(id);
    const [posts, setPosts] = useState([]);
    const getData = async () => {
        const { data } = await sendRequest(`post/${id}`, "GET");
        setPosts(data);
    };
    useEffect(() => {
        getData();
    }, [])
    //console.log(posts);
    return(
        <Container style={styles.container}>
            <PostMore posts={posts}/>
            <CommentRender />
            <AddComment />
        </Container>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent: "center"
    }
}