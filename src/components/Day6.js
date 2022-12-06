import { Box, Button, IconButton } from "@material-ui/core";
import { FiCamera } from "react-icons/fi";
import React from "react";




const Day6 = () => {
  return (
    <div>
      <Box //包装组件来使用
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        m={2}
      >
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        m={2}
      >
        {/*  去除 contained 陰影 */}
        <Button variant="contained" color="pirmary" disableElevation>
          去除 contained 陰影
        </Button>
        <Button variant="text" onClick={() => alert("嗨～")}>
          加上click fn()
        </Button>
      </Box>
      <Box>
        {/* 上傳檔案的部分可以用 label 替代 , 我地計設個button replace 佢 */}
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="contained-button-file"
          multiple
          type="file"
        />
        {/*  我地計設個button replace for 上傳檔案 */}
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <FiCamera />
          </IconButton>
        </label>
       
     
      </Box>
    </div>
  );
};

export default Day6;
