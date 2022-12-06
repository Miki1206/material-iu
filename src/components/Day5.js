import { makeStyles, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: green[500]
    }
  }
}));

const Day5 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>{"down(sm): red,縮小螢幕寬"}</Typography>
      <Typography>{"up(md): blue,增加螢幕寬"}</Typography>
      <Typography>{"up(lg): green,增加螢幕寬至1280以上"}</Typography>
    </div>
  );
};

export default Day5;
