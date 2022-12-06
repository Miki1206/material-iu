import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment
} from "@material-ui/core";
import React, { useRef, useState } from "react";

const Day10 = () => {
  const inputRef = useRef(null);
  const [control, setControl] = useState("");
  const [muti, setMuti] = useState("");

  const onClick = (e) => {
    let mutiNew =
      muti.slice(0, inputRef.current.selectionStart) +
      e.target.innerText +
      muti.slice(inputRef.current.selectionStart);
    setMuti(mutiNew);
  };

  return (
    <Box m={2}>
      <Typography variant="h6">Text Field</Typography>
      <Box mb={3}>
        {/* 基本套入 */}
        <TextField id="textfield" label="Standard" />
        {/* controlled */}
      </Box>
      <Box mb={3}>
        <TextField
          value={control}
          onChange={(e) => setControl(e.target.value)}
          label="controlled"
        />
      </Box>
      <Box mb={3}>
        <TextField
          label="加入前綴"
          id="standard-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
      </Box>
      <Box mb={3}>
        <TextField
          label="加入後綴"
          id="standard-start-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>
          }}
        />
      </Box>
      <Box mb={3}>
        <TextField
          label="Dense"
          helperText="改變內層的padding"
          margin="dense"
          variant="outlined"
          style={{ margin: 2 }}
        />
        <TextField
          label="Normal"
          helperText="改變內層的padding"
          margin="normal"
          variant="outlined"
          style={{ margin: 2 }}
        />
      </Box>
      <Box mb={3}>
        <TextField
          label="充滿"
          style={{ margin: 8 }}
          placeholder="請輸入..."
          helperText="Full width + label 恆定打開"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
      </Box>
      <Box mb={3}>
        <TextField
          id="muti"
          label="muti"
          multiline
          rows={3}
          ref={inputRef}
          onBlur={(e) => {
            const { selectionStart, selectionEnd } = e.target;
            const newValue =
              muti.substring(0, selectionStart) + muti.substring(selectionEnd);
            setMuti(newValue);
            if (inputRef.current) {
              inputRef.current.value = newValue;
              inputRef.current.selectionStart = inputRef.current.selectionEnd = selectionStart;
            }
          }}
          value={muti}
          onChange={(e) => setMuti(e.target.value)}
        />
        <Button onClick={onClick} variant="outlined">
          加入的文字
        </Button>
      </Box>
    </Box>
  );
};

export default Day10;
