import React from "react";
import Dropdown from "react-dropdown";

export default function FormDropdown({ optionList, label, handleDrop }) {
  return (
    <div>
      <div className="d-flex align-items-center m-4">
        <span className="fs-4 bold-text" style={{ marginRight: "20px" }}>
          {label}
        </span>
        <Dropdown
          options={optionList}
          label={label}
          placeholder="Select an option"
          onChange={(state) => handleDrop(state)}
        />
      </div>
    </div>
  );
}
