import { Box, Container } from "@material-ui/core";
import React from "react";

const Day2 = () => {
  // Box的底層就是div，material ui 作的方式就是將各個屬性題列出來，讓其保有彈性調整各個組件的間距排版
  return (
    <Container fixed>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
        my={2}
        p={{ xs: 1, sm: 4 }}
      >
        <Box p={1} m={1} order={2} bgcolor="#CCC" borderRadius={10}>
          Item 1 |{" "}
          <Box component="span" color="#EB30B6">
            inline
          </Box>
        </Box>
        <Box p={1} m={1} order={1} bgcolor="#CCC" borderRadius={10}>
          Item 2
        </Box>
        <Box p={1} m={1} order={3} bgcolor="#CCC" borderRadius={10}>
          Item 3
        </Box>
      </Box>
      <Box display={{ xs: "block", md: "none" }}>小尺寸</Box>
      <Box display={{ xs: "none", md: "block" }}>中尺寸</Box>
    </Container>
  );
};

export default Day2;
