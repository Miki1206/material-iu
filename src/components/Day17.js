import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger
} from "@material-ui/core";

// css需轉成小駝峰命名改寫,以物件的形式打包,並於className中指向所需的class
const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    letterSpacing: 5
  },
  wrapSpacing: {
    padding: "2rem",
    marginTop: 16
  }
});

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger(false);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Day17 = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger(false);
  return (
    <div className={classes.wrapSpacing}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <Toolbar>
            123
            <Button>121212</Button>
          </Toolbar>
        </AppBar>
      </Slide>
      <p style={{ height: "125vh" }}>44</p>
    </div>
  );
};

export default Day17;
