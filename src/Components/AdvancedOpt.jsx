import React from "react";
import RcDropdown from "react-dropdown";

export default function AdvancedOpt() {
  return (
    <div className="row">
      <div className="col-lg-5 mt-3">
        <div className="area-slider mt-3">
          <div className="area-range">
            <div>
              <div className="card card-body text-left">
                <div className="area-slider text-left">
                  <div className="d-inline-flex align-items-center justify-content-between mb-3">
                    <label htmlFor="area" style={{ marginRight: "20px" }}>
                      Area
                    </label>
                    <RcDropDown
                      options={[
                        "Sq.Yard",
                        "Sq.Feet",
                        "Sq.meter",
                        "Marla",
                        "Kanel",
                        "Acre",
                      ]}
                      value={"Sq.Yard"}
                      placeholder="Select an option"
                    />
                    <br />
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control"
                        style={{
                          width: "100px",
                          marginLeft: "10px",
                        }}
                        value={areaInputs.min}
                      />
                      <input
                        type="text"
                        className="col-1 form-control"
                        style={{
                          width: "100px",
                          marginLeft: "10px",
                        }}
                        value={areaInputs.max}
                      />
                    </div>
                  </div>
                  <br />
                  <Slider
                    defaultValue={[100, 300]}
                    aria-labelledby="renge-slider"
                    valueLabelDisplay="auto"
                    max={5000}
                    min={100}
                    onChangeCommitted={(event, number) =>
                      formatRangeValue(number)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-5 mt-3">
        <div className="price-slider mb-4 mt-3">
          <div className="price-range">
            <div>
              <div className="card card-body text-left">
                <div className="price-slider text-left">
                  <div className="d-inline-flex align-items-center justify-content-between mb-3">
                    <label htmlFor="price" style={{ marginRight: "20px" }}>
                      Price
                    </label>
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control"
                        style={{
                          width: "100px",
                          marginLeft: "10px",
                        }}
                        value={priceInputs.min}
                      />
                      <input
                        type="text"
                        className="col-1 form-control"
                        style={{
                          width: "100px",
                          marginLeft: "10px",
                        }}
                        value={priceInputs.max}
                      />
                    </div>
                    <br />
                  </div>
                  <SliderComp StateHandle={formatPriceValue} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-2 mt-3">
        <div className=" d-flex justify-content-end align-items-center">
          <button
            className="btn hide-btn btn-custom px-4 py-2"
            onClick={displayAdvancedOption}
          >
            <i className="far fa-window-close" />
          </button>
        </div>

        <div>
          <div className="dropdown">
            <button
              className="d-inline-flex align-items-center justify-content-between px-5 p-4 btn btn-default dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              <a href="/#">Amenities</a>
            </button>
            <ul
              className="dropdown-menu amenities-opt-conatiner"
              id="amenities-optionList"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <li className="m-2">
                <input
                  className="form-control"
                  type="text"
                  value={amenitiesKey}
                  onChange={filter}
                  autoComplete="off"
                  id="amenities-optionList-input"
                />
              </li>
              {amenities &&
                amenitiesDropData.map((item) => (
                  <li
                    style={{
                      margin: "0 10px",
                    }}
                  >
                    <FormControlLabel
                      value={item}
                      control={<Checkbox color="secondary" />}
                      label={item}
                      labelPlacement="end"
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* //amenities-dropdown */}
      </div>
    </div>
  );
}
