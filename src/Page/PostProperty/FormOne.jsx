import React from "react";
import NestedPropertyOpt from "./NestedPropertyOpt";
export default function FormOne({ handleClick, optionsList }) {
  return (
    <div>
      <div className="step-form step-form-1">
        <div className="=option mb-4 mt-4">
          <div className="d-inline-flex align-items-center">
            <div className="purpose-option-header">
              <h3 className="fs-4 -mb-5 text-uppercase">Purpose*</h3>
              <span>Click the Options to select</span>
            </div>
            <div
              className="d-flex flex-wrap mt-2"
              style={{ marginLeft: "40px" }}
            >
              <button
                className="btn option-pill rounded-pill common-btn"
                style={{ backgroundColor: "", marginRight: "30px" }}
                name="rent"
                onClick={handleClick}
              >
                Rent
              </button>
              <button
                className="btn option-pill rounded-pill common-btn"
                style={{ backgroundColor: "", marginRight: "30px" }}
                onClick={handleClick}
              >
                For Sales
              </button>
            </div>
          </div>
        </div>
        {optionsList && (
          <NestedPropertyOpt option={optionsList.data["property-type"]} />
        )}
      </div>
    </div>
  );
}
