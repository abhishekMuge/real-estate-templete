import React from "react";
import Dropdown from "react-dropdown";
import FormCheckGroup from "../../Components/FormComponent/FormCheckGroup";

export default function FormTwo({
  Possession,
  areaOptions,
  PropertyAge,
  renderAvability,
  activeAvability,
  handleClick,
  views,
  setPropType,
  setGroupPropType,
  ownerShipProp,
  facingProp,
  viewsProps,
  selectedUnit,
  totalArea,
  carpetArea,
  buildUpArea,
}) {
  return (
    <div>
      <div className="step-form step-form-2 mt-3">
        <div className="container-fluid border">
          <div className="m-4">
            <div className="purpose-option-header">
              <h3 className="-mb-5 fs-2 text-uppercase">Availability*</h3>
              <span className="mt-2">Click the Options to select</span>
            </div>
            <div className="d-flex flex-wrap mt-3">
              <button
                className="btn option-pill rounded-pill common-btn m-2"
                name="Under_Construction"
                onClick={renderAvability}
              >
                Under Construction
              </button>
              <button
                className="btn option-pill rounded-pill common-btn m-2"
                name="Ready_To_Move"
                onClick={renderAvability}
              >
                Ready To Move
              </button>
            </div>
            <div className="d-inline-flex  flex-column align-item-center text-black">
              <span className="fs-4 mt-4">
                {activeAvability === "Ready_To_Move" ? "Age Of Property*" : ""}
                {activeAvability === "Under_Construction"
                  ? "Possession time*"
                  : ""}
              </span>
              <br />
              {activeAvability === "Under_Construction" && (
                <Dropdown
                  className=""
                  options={Possession}
                  value={Possession[0]}
                  placeholder="Select an option"
                  onChange={(selected) =>
                    setPropType("viewTime", selected.value)
                  }
                />
              )}
              {activeAvability === "Ready_To_Move" && (
                <Dropdown
                  className=""
                  options={PropertyAge}
                  value={PropertyAge[0]}
                  placeholder="Select an option"
                  onChange={(selected) =>
                    setPropType("viewTime", selected.value)
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="conatiner-fluid border mt-4">
          <div className="m-4 ">
            <div className="purpose-option-header">
              <h3 className="-mb-5 fs-2 text-uppercase">OwnerShip*</h3>
              <span className="mt-2">Click the Options to select</span>
            </div>
            <div className="d-flex flex-wrap mt-3">
              <FormCheckGroup
                groupItem={["free-hold", "lease-hold", "co-operative soc"]}
                checkedValue={ownerShipProp}
                handleClick={(event) => {
                  console.log(event.target.value);
                  setPropType("ownerShip", event.target.name);
                }}
              />
            </div>
          </div>
        </div>

        <div className="conatiner-fluid border mt-4">
          <div className="m-4 ">
            <div className="purpose-option-header">
              <h3 className="-mb-5 fs-2 text-uppercase">Facing*</h3>
              <span className="mt-2">Click the Options to select</span>
            </div>
            <div className="d-flex flex-wrap mt-3">
              {[
                "North",
                "east",
                "west",
                "south",
                "north-east",
                "north-west",
                "south-east",
                "south-west",
              ].map((item) => (
                <button
                  className="btn option-pill rounded-pill common-btn m-2"
                  name={item}
                  style={{
                    backgroundColor: facingProp.includes(item)
                      ? "red"
                      : "black",
                  }}
                  onClick={() => {
                    setGroupPropType("facing", item);
                  }}
                >
                  {item.toLocaleUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="conatiner-fluid border mt-4">
          <div className="m-4 ">
            <div className="purpose-option-header">
              <h3 className="-mb-5 fs-2 text-uppercase">Views*</h3>
              <span className="mt-2">Click the Options to select</span>
            </div>
            <div className="d-flex flex-wrap mt-3">
              {views &&
                views.map((item) => (
                  <button
                    className="btn option-pill rounded-pill common-btn m-2"
                    name="unconstState"
                    style={{
                      backgroundColor: viewsProps.includes(item)
                        ? "red"
                        : "black",
                    }}
                    onClick={() => {
                      setGroupPropType("views", item);
                    }}
                  >
                    {item.toLocaleUpperCase()}
                  </button>
                ))}
            </div>
          </div>
        </div>

        <div className="conatiner-fluid border mt-4">
          <div className="m-4 row ">
            <div className="purpose-option-header">
              <label htmlFor="totalarea" className=" fs-3 text-uppercase">
                Total Area*
              </label>
            </div>
            <div className="d-flex align-items-center flex-wrap mt-3">
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="totalarea"
                  value={totalArea}
                  placeholder="Enter Total area"
                  onChange={(event) => {
                    setPropType("totalArea", event.target.value);
                  }}
                />
              </div>
              <div className="col-1">
                <Dropdown
                  options={areaOptions}
                  value={areaOptions[selectedUnit]}
                  placeholder="Select an option"
                  onChange={(selected) => {
                    setPropType(
                      "selectedUnit",
                      areaOptions.indexOf(selected.value)
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className="m-4 row ">
            <div className="purpose-option-header">
              <label htmlFor="totalarea" className=" fs-3 text-uppercase">
                Built-up Area*
              </label>
            </div>
            <div className="d-flex align-items-center flex-wrap mt-3">
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="buildarea"
                  placeholder="Enter Built-up Area"
                  value={buildUpArea}
                  onChange={(event) => {
                    setPropType("buildUpArea", event.target.value);
                  }}
                />
              </div>
              <div className="col-1">
                <Dropdown
                  className=""
                  options={areaOptions}
                  value={areaOptions[selectedUnit]}
                  placeholder="Select an option"
                  onChange={(selected) => {
                    setPropType(
                      "selectedUnit",
                      areaOptions.indexOf(selected.value)
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className="m-4 row ">
            <div className="purpose-option-header">
              <label htmlFor="totalarea" className=" fs-3 text-uppercase">
                Carpet Area*
              </label>
            </div>
            <div className="d-flex align-items-center flex-wrap mt-3">
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="carpetarea"
                  placeholder="Enter Carpet Area"
                  value={carpetArea}
                  onChange={(event) => {
                    setPropType("carpetArea", event.target.value);
                  }}
                />
              </div>
              <div className="col-1">
                <Dropdown
                  className=""
                  options={areaOptions}
                  value={areaOptions[selectedUnit]}
                  placeholder="Select an option"
                  onChange={(selected) => {
                    setPropType(
                      "selectedUnit",
                      areaOptions.indexOf(selected.value)
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="conatiner-fluid border mt-4">
          <div className="m-4 ">
            <div className="purpose-option-header">
              <h3 className="-mb-5 fs-2 text-uppercase">
                Special/ Unique Property Features*
              </h3>
              <span className="mt-2">(if any)</span>
            </div>
            <div className="mt-3">
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(event) => {
                    setPropType("specialDesc", event.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
