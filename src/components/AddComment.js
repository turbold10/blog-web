import { Avatar, Box, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import {sendRequest} from "../utils/Api"
import { useParams } from 'react-router-dom';
export const AddComment = () => {
    const { id: id } = useParams();
    const [value, setValue] = useState("");
    const addComm = async() => {
        console.log(value);
        await sendRequest("comment/create", "POST", {
            message: value,
            owner: "60d0fe4f5311236168a109ed",
            post: `${id}`
        })
    }

    const enter = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            addComm();
            setValue("")
        }
    }
    
    return (
        <Box sx={styles.container}>
            <Container style={styles.row}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://randomuser.me/api/portraits/med/women/5.jpg"
                    sx={styles.proFile}
                />
                <TextField
                    onKeyDown={enter}
                    id="filled-multiline-static"
                    label="Comments"
                    multiline
                    rows={4}
                    variant="filled"
                    style={styles.input}
                    value={value}
                    onChange={(e) => {setValue(e.target.value)}}
                />
            </Container>
        </Box>
    )
}

const styles = {
    container: {
        width: 900,
        marginTop: 5
    },
    proFile:{
        width: 56, 
        height: 56
    },
    row: {
        display: "flex",
        flexDeriction: "row",
        marginLeft: "220px"
    },
    input:{
        width: "430px",
        marginLeft: 10
    }
}