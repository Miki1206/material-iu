import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
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

const Day1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapSpacing}>
      <Typography className={classes.title}>Hellow Material UI</Typography>
    </div>
  );
};

export default Day1;
