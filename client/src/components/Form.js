import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { React, useState } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";

const url = "http://localhost:5000/posts";

export default function Form() {
  const [recipeData, setRecipeData] = useState({
    title: "",
    content: "",
    creator: "",
    selectedFile: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, recipeData);
      
    } catch (error) {
      console.log(error.message);
    }
  };
  const clear = () => {};

  return (
    <div>
      <Card>
        <Typography variant="h4" className="texty" align="center">
          Share you recipe !
        </Typography>
        <form onSubmit={handleSubmit} align="center">
          <Grid container direction={"column"} spacing={2}>
            <Grid item>
              <TextField
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={recipeData.title}
                onChange={(e) =>
                  setRecipeData({ ...recipeData, title: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <TextField
                multiline
                rows={5}
                name="content"
                variant="outlined"
                label="Content"
                fullWidth
                value={recipeData.content}
                onChange={(e) =>
                  setRecipeData({ ...recipeData, content: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <TextField
                name="creator"
                variant="outlined"
                label="Creator"
                fullWidth
                value={recipeData.creator}
                onChange={(e) =>
                  setRecipeData({ ...recipeData, creator: e.target.value })
                }
              />
            </Grid>{" "}
          </Grid>
          <FileBase64
            multiple={false}
            onDone={({base64}) =>
              setRecipeData({ ...recipeData, selectedFile: base64 })
            }
            
          />
          <Grid
            container
            align="center"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "10vh" }}
          >
            <Grid item xs={6}>
              <Button
                style={{ backgroundColor: "#12824C", color: "#FFFFFF" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit Recipe
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                style={{ backgroundColor: "#3E065F", color: "#FFFFFF" }}
                variant="contained"
                color="secondary"
                onClick={clear}
              >
                Clear Fields
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
}
