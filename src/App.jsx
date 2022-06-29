import { useState } from "react";
import profile from "./assets/profile.png"
import logo from "./assets/logo.png"

import "./App.css";
// Import MUI stuff
// import "@fontsource/roboto"; 

// 
// Loading Roboto font. 
// MUI was designed with this font in mind.

import {
  Card,
  CardHeader,
  Switch,
  CardContent,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define theme settings

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

//note to self
// stateless component is also called functional component - more convenient
// stateful component is also called class-based component - not used now


const App = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // This function is triggered when 
  // the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Container>
        <div className="App">
          <Box component="div" p={5}></Box>
          <Card>
            <CardHeader
              action={
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={isDarkTheme} onChange={changeTheme} />
                    }
                    label="Dark Theme"
                  />
                </FormGroup>
              }
            />
            <CardContent>
              <Typography variant="h3" component="h3">
          <div className="container">
           <div className="hPage">Home Office🏣</div>
            Hello. I'm Bek. Pleased to meet you.
                <br />  
                こんにちは。ベックです。
               <br /> よろしくお願いします。</div>
              </Typography>
              <img className = "App-logo" src={profile} alt="Logo" />
              <Typography className="body1" variant="body1">
                Dark Mode is {isDarkTheme ? "On" : "Off"}
              </Typography>
            </CardContent>
          </Card>
        </div>      
      </Container>
    </ThemeProvider>
  );
};

export default App;