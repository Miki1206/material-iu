import {
  Button,
  createTheme,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React from "react";

const theme = createTheme({
  typography: {
    h3: {
      fontSize: "1.2rem",
      "@media (min-width:480px)": {
        fontSize: "2rem"
      }
    },
    subtitle1: {
      fontSize: 12
    },
    body1: {
      fontWeight: 500
    },
    button: {
      fontStyle: "italic"
    }
  },
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: "#11cb5f"
    }
  }
});

const Day4 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3">這一行有RWD樣式</Typography>
      <Typography variant="subtitle1">這是subtitle1客製後大小</Typography>
      <Typography variant="body1" color="secondary">
        這是body1客製後樣式
      </Typography>
      <Button variant="outlined" color="primary">
        這是按鈕字體樣式
      </Button>
    </ThemeProvider>
  );
};

export default Day4;
