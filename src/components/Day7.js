import {
  Box,
  Button,
  ButtonGroup,
  Fab,
  makeStyles,
  styled
} from "@material-ui/core";
import React from "react";
import { FiPlus, FiEdit2, FiNavigation, FiHeart } from "react-icons/fi";

const useStyles = makeStyles({
  btnGroup: {
    margin: 8,
    "& button": {
      letterSpacing: 5
    }
  }
});

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px"
});

const Day7 = () => {
  const classes = useStyles();
  return (
    <div>
      <ButtonGroup
        className={classes.btnGroup}
        color="primary"
        aria-label="預設就是outlined"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        className={classes.btnGroup}
        variant="contained"
        color="primary"
        aria-label="contained & text 要另外下"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        className={classes.btnGroup}
        variant="text"
        color="secondary"
        size="small"
        aria-label="size & color的邏輯和前面的Button是一致的"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        className={classes.btnGroup}
        orientation="vertical"
        color="primary"
        aria-label="vertical"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Fab color="primary" size="small" aria-label="add">
          <FiPlus />
        </Fab>
        <Fab color="secondary" size="medium" aria-label="edit">
          <FiEdit2 />
        </Fab>
        <Fab variant="extended" size="large">
          <FiNavigation style={{ marginRight: 8 }} />
          Navigate
        </Fab>
        <Fab disabled aria-label="like">
          <FiHeart />
        </Fab>
      </Box>
      <MyButton>styled-components</MyButton>
    </div>
  );
};

export default Day7;
