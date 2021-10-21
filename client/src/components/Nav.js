import {
  AppBar,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";

export default function Nav() {
  const themey = createTheme({
    palette: {
      primary: {
        light: "#52c7b8",
        main: "#009688",
        dark: "#00675b",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={themey}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Foody Blog
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
