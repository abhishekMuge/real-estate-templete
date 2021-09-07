import React from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useCallback, useEffect } from "react";

import "../assests/CustomStyle/Range.css";
export default function RangeSlider({ min, max, onChange }) {
  // Creating the state variables
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);

  const getPercent = useCallback(
    (value) => {
      Math.round(((value - min) / (max - min)) * 100);
    },
    [min, max]
  );

  // Set width of the range to change from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to change from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const range = useRef(null);
  return (
    <>
      <div ref={range} className="slider__range" />
      <div className="slider__left-value">{minVal}</div>
      <div className="slider__right-value">{maxVal}</div>
      <div className="slider__left-value">{minVal}</div>
      <div className="slider__right-value">{maxVal}</div>
      <div className="slider">
        <div className="slider__track" style={{ display: "none" }} />
        <div className="slider__range" />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />
    </>
  );
}
RangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
