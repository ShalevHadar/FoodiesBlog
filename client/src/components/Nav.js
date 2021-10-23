import {
  AppBar,
  Button,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import React from "react";
import { useHistory } from "react-router";

export default function Nav() {

  const history = useHistory();

  const onDashboard = () => {
    history.push("/dashboard")
  }

  const onHome = () => {
    history.push("/")
  }

  const onSignup = () => {
    history.push("/signup")
  }

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
      <ThemeProvider theme={themey} >
        <AppBar position="fixed" align="center">
          <Toolbar >
          <HomeIcon />
            <Typography m={2} t={3} variant="h6" color="inherit" noWrap>
            <Button onClick={onHome} color="inherit">Home</Button>
            </Typography>
            <Typography m={2} t={3} variant="h6" color="inherit" noWrap>
            <Button color="inherit">Login</Button>
            </Typography>
            <Typography m={2} t={3} variant="h6" color="inherit" noWrap>
            <Button onClick={onSignup} color="inherit">SIGNUP</Button>
            </Typography>
            <Typography m={2} t={3} variant="h6" color="inherit" noWrap>
            <Button onClick={onDashboard} color="inherit">Dashboard</Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
