import React from "react";

export default function FormCheckGroup({
  groupItem,
  handleClick,
  checkedValue,
}) {
  return (
    <div className="d-flex">
      {groupItem.map((item) => (
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineFormCheck"
            name={item.toLowerCase()}
            onClick={handleClick}
            checked={checkedValue === item.toLowerCase()}
          />
          <label
            className="form-check-label bold-text"
            htmlFor="inlineFormCheck"
          >
            {item.toLocaleUpperCase()}
          </label>
        </div>
      ))}
    </div>
  );
}
