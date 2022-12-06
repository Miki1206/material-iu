import {
  makeStyles,
  Box,
  Container,
  Button,
  Typography
} from "@material-ui/core";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Day1 from "./components/Day1";
import Day10 from "./components/Day10";
import Day11 from "./components/Day11";
import Day13 from "./components/Day13";
import Day14 from "./components/Day14";
import Day15 from "./components/Day15";
import Day17 from "./components/Day17";
import Day18 from "./components/Day18";
import Day2 from "./components/Day2";
import Day3 from "./components/Day3";
import Day4 from "./components/Day4";
import Day5 from "./components/Day5";
import Day6 from "./components/Day6";
import Day7 from "./components/Day7";
import Day8 from "./components/Day8";
import Day9 from "./components/Day9";

const useStyles = makeStyles({
  title: {
    fontWeight: 700,
    letterSpacing: 5,
    color: "#f59846"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Container fixed>
        <Typography className={classes.title}>Ｍaterial IT幫</Typography>
        <Box
          p={2}
          w={1}
          bgcolor="#EEE"
          borderRadius={20}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
        >
          <Button component={Link} to={`/day1`}>
            Day 1
          </Button>
          <Button component={Link} to={`/day2`}>
            Day 2
          </Button>
          <Button component={Link} to={`/day3`}>
            Day 3
          </Button>
          <Button component={Link} to={`/day4`}>
            Day 4
          </Button>
          <Button component={Link} to={`/day5`}>
            Day 5
          </Button>
          <Button component={Link} to={`/day6`}>
            Day 6
          </Button>
          <Button component={Link} to={`/day7`}>
            Day 7
          </Button>
          <Button component={Link} to={`/day8`}>
            Day 8
          </Button>
          <Button component={Link} to={`/day9`}>
            Day 9
          </Button>
          <Button component={Link} to={`/day10`}>
            Day 10
          </Button>
          <Button component={Link} to={`/day11`}>
            Day 11
          </Button>
          <Button component={Link} to={`/day13`}>
            Day 13
          </Button>
          <Button component={Link} to={`/day14`}>
            Day 14
          </Button>
          <Button component={Link} to={`/day15`}>
            Day 15
          </Button>
          <Button component={Link} to={`/day17`}>
            Day 17
          </Button>
          <Button component={Link} to={`/day18`}>
            Day 18
          </Button>
        </Box>
      </Container>
      <Switch>
        <Route path="/day1" component={Day1} />
        <Route path="/day2" component={Day2} />
        <Route path="/day3" component={Day3} />
        <Route path="/day4" component={Day4} />
        <Route path="/day5" component={Day5} />
        <Route path="/day6" component={Day6} />
        <Route path="/day7" component={Day7} />
        <Route path="/day8" component={Day8} />
        <Route path="/day9" component={Day9} />
        <Route path="/day10" component={Day10} />
        <Route path="/day11" component={Day11} />
        <Route path="/day13" component={Day13} />
        <Route path="/day14" component={Day14} />
        <Route path="/day15" component={Day15} />
        <Route path="/day17" component={Day17} />
        <Route path="/day18" component={Day18} />
      </Switch>
    </BrowserRouter>
  );
}
