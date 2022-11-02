// import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import {sendRequest} from "../utils/Api"
import { useParams } from 'react-router-dom';
export const CommentRender = () => {
    const [data, setData] = useState([])
    const { id: id } = useParams();
    useEffect(() => {
        const getData = async () => {
            const post = await sendRequest(`post/${id}/comment`, "GET");
            setData(post.data)
        };
        getData()
    }, [])
    //console.log(data.data?.[0]);
    return (
        <Box sx={styles.container}>
            {!data.data?.length ? ("no comment") : (
                data.data.map((el, key) => {
                    return (
                        <Container style={styles.content} key={key}>
                            <Container style={styles.two}>
                                <Avatar
                                    alt="img"
                                    src={el.owner?.picture}
                                    ///sx={styles.proFile}
                                />
                                <Typography>
                                {el.owner?.firstName}
                                </Typography>
                            </Container>
                            <Typography style={{width:1000}}>{el.message}</Typography>
                        </Container>
                    )
                }))}
        </Box>
    )
}

const styles = {
    container: {
        width: 900,
        display: "flex",
        flexDirection: "column",
        height: "150px",
        overflowY: 'scroll',
        marginTop: 5
    },
    content: {
        width: "400px",
        // backgroundColor: "green",
        display: "flex",
        marginTop: "20px"
    },
    two:{
        marginLeft: "-40px"
    }

}