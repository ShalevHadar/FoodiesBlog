import {  Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function Recipes(props) {
    return (
          <Card sx={{ maxWidth: 350 }} style={{ margin: "50px 50px" }} >
        <CardMedia
          component="img"
          height="200"
          image={props.selectedFile}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.content}
          </Typography>
        </CardContent>
        <CardActions>
        <Typography variant="body2" color="text.secondary">Created by: {props.creator}</Typography>
        </CardActions>
      </Card>
    )
}
