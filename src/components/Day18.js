import React from "react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  makeStyles,
  TextField,
  Typography
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

const Day18 = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <div className={classes.wrapSpacing}>
      <Button onClick={() => setDrawerOpen(true)}>left</Button>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem>基本資料</ListItem>
          <ListItem>設定</ListItem>
          <ListItem>相簿</ListItem>
        </List>
      </Drawer>
      <TextField />
    </div>
  );
};

export default Day18;
