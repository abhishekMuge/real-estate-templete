import React from "react";
import NestedPropertyOpt from "./NestedPropertyOpt";
import FormCheckGroup from "../../Components/FormComponent/FormCheckGroup";
export default function FormOne({
  handleClick,
  optionsList,
  purposeTypeCheckValue,
  handleCheckGroup,
  setPropType,
}) {
  return (
    <div>
      <div className="step-form step-form-1">
        <div className="=option mb-4 mt-4">
          <div className="d-inline-flex flex-wrap align-items-center">
            <div className="purpose-option-header">
              <h3 className="fs-4 -mb-5 text-uppercase">Purpose*</h3>
              <span>Click the Options to select</span>
            </div>
            <div
              className="d-flex flex-wrap mt-2"
              style={{ marginLeft: "40px" }}
            >
              <FormCheckGroup
                groupItem={["Rent", "Sale"]}
                handleClick={handleCheckGroup}
                checkedValue={purposeTypeCheckValue}
              />
            </div>
          </div>
        </div>
        {optionsList && (
          <NestedPropertyOpt
            setPropType={(event) => setPropType("propertyType", event)}
            option={optionsList.data["property-type"]}
          />
        )}
      </div>
    </div>
  );
}
