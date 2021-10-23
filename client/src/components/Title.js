import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Title() {
    return (
        <div>
        <Grid
        container
        align="center"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item md={12} xs={12}>
          <Typography variant="h1" fontWeight='bold' style={{ color: "#E26A2C" }}>Foody</Typography>
          <Typography variant="h3" fontWeight='lighter'>Your Food, Our site</Typography>
        </Grid>
      </Grid>            
        </div>
    )
}
