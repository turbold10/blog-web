import { CardMedia} from "@mui/material"
import React from "react"
export const Image = ({images}) => {
    return(
        <CardMedia
            component="img"
            height="450px"
            image={images}
            alt="image"
            style={{marginTop: 50}}
        />
    )
}