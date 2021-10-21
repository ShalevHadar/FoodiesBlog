import { Grid, Typography } from "@mui/material";
import MainIMG from "../imgs/MainIMG.png";


export default function Top() {
    return (
        <div>
        <Grid
        container
        align="center"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        <Grid item md={6} xs={12}>
          <Typography variant="h1" fontWeight='bold' style={{ color: "#E26A2C" }}>Foody</Typography>
          <Typography variant="h3" fontWeight='lighter'>Your Food, Our site</Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src={MainIMG} alt="icon" />
        </Grid>
      </Grid>            
        </div>
    )
}
