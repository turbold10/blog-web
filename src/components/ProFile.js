import { Avatar, Box, Typography } from "@mui/material"
import React from "react"
export const ProFile = () => {
    return(
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
    )
}