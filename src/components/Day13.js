import React from "react";
import { Box, makeStyles, Slider, Typography } from "@material-ui/core";

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

const marks = [
  {
    value: 0,
    label: "0°C"
  },
  {
    value: 20,
    label: "20°C"
  },
  {
    value: 37,
    label: "37°C"
  },
  {
    value: 100,
    label: "100°C"
  }
];

const Day13 = () => {
  const classes = useStyles();
  const [sliderVal, setSliderVal] = React.useState(20);

  const sliderValChange = (e, newVal) => {
    setSliderVal(newVal);
  };

  return (
    <div className={classes.wrapSpacing}>
      <Typography className={classes.title}>Hollow Material UI</Typography>
      <Slider value={sliderVal} onChange={sliderValChange} />
      <Slider
        defaultValue={30}
        step={5}
        min={10}
        max={60}
        valueLabelDisplay="auto"
      />
      <Slider
        defaultValue={20}
        step={2}
        min={10}
        max={60}
        valueLabelDisplay="auto"
        marks
      />
      <Slider defaultValue={10} valueLabelDisplay="auto" marks={marks} />
      <Box style={{ height: 200 }}>
        <Slider
          defaultValue={10}
          orientation="vertical"
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  );
};

export default Day13;
