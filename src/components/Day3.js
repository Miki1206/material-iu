import {
  Box,
  Button,
  createTheme,
  Grid,
  ThemeProvider
} from "@material-ui/core";
import { green, orange, purple } from "@material-ui/core/colors";
import React from "react";

const innerTheme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    }
  }
});

const outerTheme = createTheme({
  palette: {
    secondary: {
      main: orange[500]
    }
  }
});

const Day3 = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Box bgcolor="skyblue" borderRadius={5} p={2}>
            item
          </Box>
        </Grid>
        <Grid item>
          <Box bgcolor="skyblue" borderRadius={5} p={2}>
            item
          </Box>
        </Grid>
        <Grid item>
          <Box bgcolor="skyblue" borderRadius={5} p={2}>
            item
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box bgcolor="skyblue" borderRadius={5} p={2}>
            xs=12
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="skyblue" borderRadius={5} p={2}>
            xs=6
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box bgcolor="skyblue" borderRadius={5} p={2}>
            sm=6
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box bgcolor="skyblue" borderRadius={5} p={2}>
            xs=3
          </Box>
        </Grid>
        <Grid item sm={3}>
          <Box bgcolor="skyblue" borderRadius={5} p={2}>
            sm=3
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box bgcolor="skyblue" borderRadius={5} p={2}>
            xs=3
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box bgcolor="skyblue" borderRadius={5} p={2}>
            xs=3
          </Box>
        </Grid>
      </Grid>
      <ThemeProvider theme={outerTheme}>
        <Box display="flex" justifyContent="space-between" m={2}>
          <Button color="primary" variant="outlined">
            without Theme
          </Button>
          <Button color="secondary" variant="outlined">
            without Theme
          </Button>
        </Box>
        <ThemeProvider theme={innerTheme}>
          <Box display="flex" justifyContent="space-between" m={2}>
            <Button color="primary" variant="outlined">
              without Theme
            </Button>
            <Button color="secondary" variant="outlined">
              without Theme
            </Button>
          </Box>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
};

export default Day3;
