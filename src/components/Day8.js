import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  makeStyles
} from "@material-ui/core";
import { lightGreen, pink } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles({
  clickBtn: {
    minWidth: 100,
    padding: 4,
    background: lightGreen[300],
    borderRadius: 10,
    "& :hover": {
      color: lightGreen[900]
    }
  },
  checked: {
    background: pink[500]
  }
});

const Day8 = () => {
  const classes = useStyles();
  // 這裡為了示範所以用useState來呈現，當然也可以換成其他的方式來整理
  const [checked, setChecked] = React.useState(true);
  const [green, setGreen] = React.useState(false);
  const [group, setGroup] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const groupChange = (event) => {
    setGroup({ ...group, [event.target.name]: event.target.checked });
  };
  const { gilad, jason, antoine } = group;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        m={2}
      >
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{
            "aria-label": "controlled Checkbox color 預設值是secondary的顏色"
          }}
        />
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "primary color Checkbox" }}
        />
        <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
        <Checkbox disabled inputProps={{ "aria-label": "disabled checkbox" }} />
        <Checkbox
          disabled
          checked
          inputProps={{ "aria-label": "disabled checked checkbox" }}
        />
        <Checkbox
          defaultChecked
          indeterminate
          inputProps={{ "aria-label": "indeterminate checkbox" }}
        />
        <Checkbox
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <Checkbox
          defaultChecked
          size="small"
          inputProps={{ "aria-label": "checkbox with small size" }}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        m={2}
      >
        <FormControlLabel
          control={<Checkbox style={{ display: "none" }} />}
          className={`${classes.clickBtn} ${green && classes.checked}`}
          label="替換按鈕"
          labelPlacement="top"
          checked={green}
          onChange={(e) => setGreen(e.target.checked)}
        />
      </Box>
      <FormControl required error={error} component="fieldset">
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={groupChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={groupChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={groupChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Day8;
