import React from "react";
import Dropdown from "react-dropdown";
export default function FormThree({
  amenities,
  handleClick,
  handleFilter,
  rentView,
  customeKey,
  customeKeyName,
  customeKeyVal,
  addCustomKey,
}) {
  return (
    <div>
      <div className="step-form step-form-3">
        <div className="container-fluid">
          <div className="m-4 row">
            <div className="purpose-option-header">
              <label htmlFor="areaRate" className=" fs-3 text-uppercase">
                {rentView ? "Rent Rate*" : "Rate Per Sq. Yard*"}
              </label>
            </div>
            <div className="d-flex align-items-center flex-wrap mt-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="areaRate"
                  data-for={rentView ? "rent" : "rate"}
                  placeholder="Enter Carpet Area"
                />
              </div>
            </div>
          </div>

          <div className="m-4 row">
            <div className="purpose-option-header">
              <label htmlFor="total-Price" className=" fs-3 text-uppercase">
                Total Price
              </label>
            </div>
            <div className="d-flex align-items-center flex-wrap mt-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="total-price"
                  placeholder="Enter Carpet Area"
                />
              </div>
            </div>
          </div>

          <div className="d-inline-flex m-4">
            {[
              "Include all taxes",
              "price negotiable",
              "rera approved property",
            ].map((item) => (
              <div className="form-check mb-2 mr-sm-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineFormCheck"
                />
                <label className="form-check-label" htmlFor="inlineFormCheck">
                  {item.toLocaleUpperCase()}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="container-fluid">
          <div className="m-4 row">
            <div className="purpose-option-header">
              <label htmlFor="location" className=" fs-3 text-uppercase">
                Location
              </label>
            </div>
            <div className="d-flex align-items-center flex-wrap mt-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Search Location"
                />
              </div>
            </div>
          </div>
          <div className="m-4 row">
            <div className="purpose-option-header">
              <label htmlFor="address" className=" fs-3 text-uppercase">
                Address
              </label>
            </div>
            <div className="d-flex align-items-center flex-wrap mt-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="adress"
                  placeholder="Enter Address"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid m-4">
          <div className="purpose-option-header">
            <label className=" fs-3 text-uppercase">
              Details(more Specification)
            </label>
          </div>
          <div className="d-flex flex-wrap">
            <div className="m-2">
              <label htmlFor="key">Enter Key</label>
              <input
                type="text"
                className="form-control"
                name="customeKeyName"
                placeholder="Enter Key Name"
                value={customeKeyName}
              />
            </div>
            <div className="m-2">
              <label htmlFor="key">Enter Key</label>
              <input
                type="text"
                className="form-control"
                name="customeKeyVal"
                placeholder="Enter Key Value"
                value={customeKeyVal}
              />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            <div className="d-flex align-items-center m-4">
              <span className="fs-4 mr-2" style={{ marginRight: "20px" }}>
                Washrooms
              </span>
              <Dropdown
                options={Array.from(Array(5).keys())}
                placeholder="Select an option"
              />
            </div>
            <div className="d-flex align-items-center m-4">
              <span className="fs-4 mr-2" style={{ marginRight: "20px" }}>
                BedRoom
              </span>
              <Dropdown
                options={Array.from(Array(10).keys())}
                placeholder="Select an option"
              />
            </div>
            <div className="d-flex align-items-center m-4">
              <span className="fs-4 mr-2" style={{ marginRight: "20px" }}>
                Servent Room
              </span>
              <Dropdown
                options={Array.from(Array(10).keys())}
                placeholder="Select an option"
              />
            </div>
            <div className="d-flex align-items-center m-4">
              <span className="fs-4 mr-2" style={{ marginRight: "20px" }}>
                Balcony
              </span>
              <Dropdown
                options={Array.from(Array(5).keys())}
                placeholder="Select an option"
              />
            </div>
            <div className="d-flex align-items-center m-4">
              <span className="fs-4 mr-2" style={{ marginRight: "20px" }}>
                On Floor
              </span>
              <Dropdown
                options={Array.from(Array(50).keys())}
                placeholder="Select an option"
              />
            </div>
            {customeKey &&
              customeKey.map((item) => (
                <div className="d-flex align-items-center m-4 common-btn">
                  <span>{item.name} :</span>
                  <span>{item.val}</span>
                </div>
              ))}
            <div className="d-flex align-items-center m-4">
              <button className="btn common-btn" onClick={addCustomKey}>
                Add More Values
              </button>
            </div>
          </div>
        </div>
        <div className="conatiner-fluid  m-4">
          <div className="m-4 ">
            <div className="purpose-option-header">
              <h3 className="-mb-5 fs-2 text-uppercase">Amenities</h3>
              <span className="mt-2">Click the Options to select</span>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="amenities"
                  placeholder="Search amenities"
                  onChange={handleFilter}
                />
              </div>
            </div>
            <div className="d-flex flex-wrap mt-3 scroll-div">
              {amenities &&
                amenities.map((item, index) => (
                  <button
                    className="btn option-pill rounded-pill common-btn m-2"
                    key={index}
                    style={{ backgroundColor: "" }}
                    onClick={handleClick}
                  >
                    {item.toLocaleUpperCase()}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
