import React, { useEffect, useState } from "react";
import Recipe from "./Recipe.js";
import axios from "axios";
import { Grid } from "@mui/material";

export default function Recipes() {
  const [items, setItems] = useState([]);

  const url = "http://localhost:5000/posts";

  useEffect(() => {
      axios.get(url).then((response) => {
        setItems(response.data);
      });
    },[items])

  return (
    <div>
    <Grid 
     container align="center"
        alignItems="center"
        justifyContent="center"
        >
          {items.map((item) => (
              <Recipe {...item} key={item._id} />
          ))
          }
          </Grid>
    </div>
  );
}
