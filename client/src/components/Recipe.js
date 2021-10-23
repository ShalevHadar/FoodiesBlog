import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

export default function Recipes(props) {
  const url = "http://localhost:5000/posts/";

  function refreshPage() {
    window.location.reload(false);
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    await axios.delete(url + props._id).then((res) => console.log("delete!"));
  };

  return (
    <Card
      sx={{ maxWidth: 450 }}
      style={{
        margin: "50px 50px",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={props.selectedFile}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{whiteSpace: 'pre-wrap'}} rows="1">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Typography
          style={{ padding: "8px " }}
          variant="body2"
          color="text.secondary"
        >
          Created by: {props.creator}
        </Typography>
        <div >
          <IconButton
            onClick={function (e) {
              handleDelete(e);
              refreshPage();
            }}
          >
            <DeleteIcon style={{ color: "#E26A2C" }} />
          </IconButton>
          <IconButton>
            <EditIcon style={{ color: "#E26A2C" }} />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            {/* </IconButton>
        <IconButton aria-label="share">
          <ShareIcon /> */}
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
