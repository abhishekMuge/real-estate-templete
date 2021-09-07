import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const followersMarks = [
  {
    value: 0,
    scaledValue: 1000,
    // label: "1k",
  },
  {
    value: 10,
    scaledValue: 5000,
    // label: "5k",
  },
  {
    value: 20,
    scaledValue: 10000,
    // label: "10k",
  },
  {
    value: 30,
    scaledValue: 50000,
    // label: "50k",
  },
  {
    value: 45,
    scaledValue: 100000,
    // label: "1LHK",
  },
  {
    value: 60,
    scaledValue: 200000,
    // label: "2LHK",
  },
  {
    value: 75,
    scaledValue: 500000,
    // label: "5LHK",
  },
  {
    value: 92,
    scaledValue: 1000000,
    // label: "10LHK",
  },
  {
    value: 113,
    scaledValue: 2000000,
    // label: "20LHK",
  },
  {
    value: 132,
    scaledValue: 5000000,
    // label: "50LHK",
  },
  {
    value: 148,
    scaledValue: 10000000,
    // label: "1CR",
  },
  {
    value: 162,
    scaledValue: 100000000,
    // label: "10CR",
  },
  {
    value: 180,
    scaledValue: 10000000000,
    // label: "100CR",
  },
  {
    value: 199,
    scaledValue: 100000000000,
    // label: "100CR+",
  },
];

const labelMarks = [
  {
    value: 0,
    scaledValue: 1000,
    label: "1k",
  },
  {
    value: 10,
    scaledValue: 5000,
    label: "5k",
  },
  {
    value: 20,
    scaledValue: 10000,
    label: "10k",
  },
  {
    value: 30,
    scaledValue: 50000,
    label: "50k",
  },
  {
    value: 45,
    scaledValue: 100000,
    label: "1LHK",
  },
  {
    value: 60,
    scaledValue: 200000,
    label: "2LHK",
  },
  {
    value: 75,
    scaledValue: 500000,
    label: "5LHK",
  },
  {
    value: 92,
    scaledValue: 1000000,
    label: "10LHK",
  },
  {
    value: 113,
    scaledValue: 2000000,
    label: "20LHK",
  },
  {
    value: 132,
    scaledValue: 5000000,
    label: "50LHK",
  },
  {
    value: 148,
    scaledValue: 10000000,
    label: "1CR",
  },
  {
    value: 162,
    scaledValue: 100000000,
    label: "10CR",
  },
  {
    value: 180,
    scaledValue: 10000000000,
    label: "100CR",
  },
  {
    value: 199,
    scaledValue: 100000000000,
    label: "1000CR",
  },
];

const scaleValues = (valueArray) => {
  return [scale(valueArray[0]), scale(valueArray[1])];
};
const scale = (value) => {
  if (value === undefined) {
    return undefined;
  }
  const previousMarkIndex = Math.floor(value / 25);
  const previousMark = followersMarks[previousMarkIndex];
  const remainder = value % 25;
  if (remainder === 0) {
    return previousMark.scaledValue;
  }
  const nextMark = followersMarks[previousMarkIndex + 1];
  const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
  return remainder * increment + previousMark.scaledValue;
};

// const numFormatter = (num) => {
//   console.log(num);
//   if (num > 999 && num < 1000000) {
//     return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
//   } else if (num >= 1000000) {
//     return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
//   } else if (num < 900) {
//     return num; // if value < 1000, nothing to do
//   }
// };

export default function SliderComp({ StateHandle }) {
  const [value, setValue] = React.useState([1, 25]);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const setPriceRangeValue = (newValue) => {
    let min = labelMarks.filter((item) => item.value <= newValue[0]);
    let max = labelMarks.filter((item) => item.value <= newValue[1]);
    StateHandle(min[min.length - 1].label, max[max.length - 1].label);
  };
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Slider
          value={value}
          min={0}
          step={1}
          max={210}
          // valueLabelFormat={numFormatter}
          marks={followersMarks}
          scale={scaleValues}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
          onChangeCommitted={(event, values) => setPriceRangeValue(values)}
        />
      </div>
    </React.Fragment>
  );
}
