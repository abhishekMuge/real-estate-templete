import React from "react";

export default function FormCheck({ item, handleClick, checkedValue }) {
  return (
    <div>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineFormCheck"
          name={item.toLowerCase()}
          onClick={handleClick ? handleClick : null}
          checked={checkedValue === item.toLowerCase()}
        />
        <label className="form-check-label bold-text" htmlFor="inlineFormCheck">
          {item.toLocaleUpperCase()}
        </label>
      </div>
    </div>
  );
}
