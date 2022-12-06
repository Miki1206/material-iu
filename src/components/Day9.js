import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";

const Day9 = () => {
  const [value, setValue] = useState({
    normal: "",
    placeTag: "",
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true
  });
  const normalChange = (e) => {
    setValue({
      ...value,
      normal: e.target.value
    });
  };
  const placeTagChange = (e) => {
    setValue({
      ...value,
      placeTag: e.target.value
    });
  };

  const switchChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.checked });
  };

  return (
    <Container fixed>
      <Typography variant="h5">Radio</Typography>
      <Box mb={3}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value.normal}
            onChange={normalChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box mb={3}>
        <FormControl component="fieldset">
          <FormLabel component="legend">labelPlacement</FormLabel>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
            value={value.placeTag}
            onChange={placeTagChange}
          >
            <FormControlLabel
              value="top"
              control={<Radio color="primary" />}
              label="Top"
              labelPlacement="top"
            />
            <FormControlLabel
              value="start"
              control={<Radio color="primary" />}
              label="Start"
              labelPlacement="start"
            />
            <FormControlLabel
              value="bottom"
              control={<Radio color="primary" />}
              label="Bottom"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="end"
              control={<Radio color="primary" />}
              label="End"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <Switch
          checked={value.checkedA}
          onChange={switchChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Switch
          checked={value.checkedB}
          onChange={switchChange}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Switch inputProps={{ "aria-label": "primary checkbox" }} />
        <Switch disabled inputProps={{ "aria-label": "disabled checkbox" }} />
        <Switch
          disabled
          checked
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Switch
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={value.checkedC}
                onChange={switchChange}
                name="checkedC"
              />
            }
            label="Secondary"
          />
          <FormControlLabel
            control={
              <Switch
                checked={value.checkedD}
                onChange={switchChange}
                name="checkedD"
                color="primary"
              />
            }
            label="Primary"
          />
        </FormGroup>
      </Box>
    </Container>
  );
};

export default Day9;
