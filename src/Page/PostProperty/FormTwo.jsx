import React from "react";
import Dropdown from "react-dropdown";

export default function FormTwo({
  Possession,
  areaOptions,
  PropertyAge,
  renderAvability,
  activeAvability,
  handleClick,
  views,
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
                name="underconst"
                onClick={renderAvability}
              >
                Under Construction
              </button>
              <button
                className="btn option-pill rounded-pill common-btn m-2"
                name="rtm"
                onClick={renderAvability}
              >
                Ready To Move
              </button>
            </div>
            <div className="d-inline-flex  flex-column align-item-center text-black">
              <span className="fs-4 mt-4">
                {activeAvability === "rtm" ? "Age Of Property*" : ""}
                {activeAvability === "underconst" ? "Possession time*" : ""}
              </span>
              <br />
              {activeAvability === "underconst" && (
                <Dropdown
                  className=""
                  options={Possession}
                  value={Possession[0]}
                  placeholder="Select an option"
                />
              )}
              {activeAvability === "rtm" && (
                <Dropdown
                  className=""
                  options={PropertyAge}
                  value={PropertyAge[0]}
                  placeholder="Select an option"
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
              {["free-hold", "lease-hold", "co-operative soc"].map((item) => (
                <button
                  className="btn option-pill rounded-pill common-btn m-2"
                  name="unconstState"
                  style={{ backgroundColor: "" }}
                  onClick={handleClick}
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
                  name="unconstState"
                  style={{ backgroundColor: "" }}
                  onClick={handleClick}
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
                    style={{ backgroundColor: "" }}
                    onClick={handleClick}
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
                  placeholder="Enter Total area"
                />
              </div>
              <div className="col-1">
                <Dropdown
                  className=""
                  options={areaOptions}
                  value={areaOptions[0]}
                  placeholder="Select an option"
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
                  id="totalarea"
                  placeholder="Enter Built-up Area"
                />
              </div>
              <div className="col-1">
                <Dropdown
                  className=""
                  options={areaOptions}
                  value={areaOptions[0]}
                  placeholder="Select an option"
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
                  id="totalarea"
                  placeholder="Enter Carpet Area"
                />
              </div>
              <div className="col-1">
                <Dropdown
                  className=""
                  options={areaOptions}
                  value={areaOptions[0]}
                  placeholder="Select an option"
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
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
