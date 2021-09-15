import React from "react";
import Dropdown from "react-dropdown";

export default function FormDropInput({ optionList, label }) {
  return (
    <div>
      <div className="purpose-option-header">
        <label htmlFor="totalarea" className=" fs-3 text-uppercase  bold-text">
          {label}*
        </label>
      </div>
      <div className="d-flex align-items-center flex-wrap">
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            id="totalarea"
            placeholder="Enter Built-up Area"
          />
        </div>
        <div>
          <Dropdown
            className=""
            options={optionList}
            placeholder="Select an option"
          />
        </div>
      </div>
    </div>
  );
}
