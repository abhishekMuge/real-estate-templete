import React from "react";

export default function FormInput({ labelValue, placeholderValue }) {
  return (
    <div>
      <div className="">
        <div className="option-header">
          <label
            htmlFor="address"
            className="-mb-20 bold-text fs-4 text-uppercase text-bold"
          >
            {labelValue}
          </label>
        </div>
        <div className="d-flex align-items-center flex-wrap mt-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="adress"
              placeholder={placeholderValue}
              autoComplete={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
