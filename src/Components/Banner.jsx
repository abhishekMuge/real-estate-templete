import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function Banner({ amenities }) {
  const [advancedOpt, showAdvancedOpt] = useState(false);
  const [tabIndex, changeIndex] = useState("one");
  const [activeTab, setTabActive] = useState("project");
  const [dropPurposeno, setDropPurposeno] = useState(3);
  const [amenitiesKey, setAmenitiesKey] = useState("");
  const [amenitiesDropData, setAmenitiesDropData] = useState(amenities.data);

  const displayAdvancedOption = (e) => {
    e.preventDefault();
    showAdvancedOpt(!advancedOpt);
  };

  const handleTabs = (tabIndex, tabName, no) => {
    changeIndex(tabIndex);
    setTabActive(tabName);
    setDropPurposeno(no);
  };

  const filter = (e) => {
    let keyWord = e.target.value;
    setAmenitiesKey(keyWord);
    if (keyWord !== "") {
      let result = amenitiesDropData.filter((item) => {
        return item.toLowerCase().startsWith(keyWord.toLowerCase());
      });
      setAmenitiesDropData(result);
    } else {
      setAmenitiesDropData(amenities.data);
    }
  };

  return (
    <div>
      {/* Banner */}
      <div className={`banner-area banner-${tabIndex}`}>
        <div className="banner-slider">
          <div className="banner-slider-item">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-content">
                    <h1>
                      {tabIndex == "one" &&
                        "uild Your Aspiration With Buildano".toUpperCase()}
                      {tabIndex == "two" &&
                        "Find Your Dream Property".toUpperCase()}
                      {tabIndex == "three" && "rust Your Trustee".toUpperCase()}
                    </h1>
                    <div className="tab slides-category-list-tab">
                      <form>
                        <ul className="tabs banner-form-tag">
                          <li>
                            <a
                              className={`property-banner ${
                                activeTab == "property" ? "active-pill" : ""
                              }`}
                              onClick={() => handleTabs("two", "property", 3)}
                            >
                              Property
                            </a>
                          </li>
                          <li>
                            <a
                              className={`project-banner ${
                                activeTab == "project" ? "active-pill" : ""
                              }`}
                              onClick={() => handleTabs("one", "project", 5)}
                            >
                              Project
                            </a>
                          </li>
                          <li>
                            <a
                              className={`dealers-banner ${
                                activeTab == "dealers" ? "active-pill" : ""
                              }`}
                              onClick={() => handleTabs("three", "dealers", 7)}
                            >
                              Dealers
                            </a>
                          </li>
                        </ul>
                        <div className="tab_content">
                          <div className="tabs_item">
                            <div className="banner-form-area">
                              <div className="row">
                                <div className="col-lg-3">
                                  <Dropdown
                                    forDrop="Purpose"
                                    data={[
                                      "New Booking(New Launch)",
                                      "Pre Booking(Under Construction)",
                                      "Ready To Move",
                                      "Rent",
                                      "Leave",
                                      "Invesment",
                                      "Consultancy",
                                    ]}
                                    dropListShowIndex={dropPurposeno}
                                  />
                                </div>

                                <div className="col-lg-3">
                                  <Dropdown forDrop="Property Type" />
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>
                                      <i className="bx bxs-paper-plane" />
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Type City Or Area"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="button-area">
                                <button
                                  type="submit"
                                  className="btn common-btn"
                                >
                                  <i className="flaticon-search-1" />
                                  Search
                                </button>
                              </div>
                            </div>

                            {advancedOpt ? (
                              <div className="row">
                                <div className="col-lg-5 mt-3">
                                  <div className="area-slider mt-3">
                                    <div className="area-range">
                                      <div>
                                        <div className="card card-body text-left">
                                          <div className="area-slider text-left">
                                            <div className="d-inline-flex align-items-center justify-content-between mb-3">
                                              <label
                                                htmlFor="area"
                                                style={{ marginRight: "20px" }}
                                              >
                                                Area
                                              </label>
                                              <select>
                                                <option value="square metre">
                                                  square metre
                                                </option>
                                                <option value="square metre">
                                                  acre
                                                </option>
                                                <option value="square metre">
                                                  square metre
                                                </option>
                                              </select>
                                              <div
                                                style={{ marginLeft: "20px" }}
                                              >
                                                <span>
                                                  <b>Min: </b>
                                                </span>
                                                <span className="min-span-area" />
                                                <span className="ml-2">
                                                  <b>Max: </b>
                                                </span>
                                                <span className="max-span-area mb-6" />
                                              </div>
                                              <br />
                                            </div>
                                            <input
                                              id="area-value"
                                              type="number"
                                              defaultValue={5000}
                                              min={0}
                                              max={120000}
                                              readOnly
                                            />
                                            <input
                                              id="area-value"
                                              type="number"
                                              defaultValue={50000}
                                              min={0}
                                              max={120000}
                                              readOnly
                                            />
                                            <br />
                                            <input
                                              id="area-ranger"
                                              defaultValue={150}
                                              min={0}
                                              max={5000}
                                              step={50}
                                              type="range"
                                            />
                                            <input
                                              id="area-ranger"
                                              defaultValue={150}
                                              min={0}
                                              max={5000}
                                              step={50}
                                              type="range"
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
                                              <label
                                                htmlFor="price"
                                                style={{ marginRight: "20px" }}
                                              >
                                                Price
                                              </label>
                                              <div
                                                style={{ marginLeft: "20px" }}
                                              >
                                                <span>
                                                  <b>Min: </b>
                                                </span>
                                                <span className="min-span-price">
                                                  $0
                                                </span>
                                                <span className="ml-2">
                                                  <b>Max: </b>
                                                </span>
                                                <span className="max-span-price mb-6">
                                                  $0
                                                </span>
                                              </div>
                                              <br />
                                            </div>
                                            {/* <label for="price">Price</label> */}
                                            <br />
                                            <input
                                              id="price-value"
                                              type="number"
                                              defaultValue={5000}
                                              min={0}
                                              max={120000}
                                              readOnly
                                            />
                                            <input
                                              id="price-value"
                                              type="number"
                                              defaultValue={50000}
                                              min={0}
                                              max={120000}
                                              readOnly
                                            />
                                            <br />
                                            <input
                                              id="price-ranger"
                                              defaultValue={25000}
                                              min={0}
                                              max={120000}
                                              step={500}
                                              type="range"
                                            />
                                            <input
                                              id="price-ranger"
                                              defaultValue={50000}
                                              min={0}
                                              max={1200000}
                                              step={500}
                                              type="range"
                                            />
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
                                        <a>Amenities</a>
                                      </button>
                                      <ul
                                        className="dropdown-menu amenities-opt-conatiner"
                                        id="amenities-optionList"
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
                                        {amenitiesDropData &&
                                          amenitiesDropData.map((item) => (
                                            <li>
                                              <div
                                                className="form-check"
                                                data-item-id="new booking"
                                              >
                                                <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  defaultValue="New_Booking"
                                                  id="purpose-check"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="purpose-check"
                                                >
                                                  <span>{item}</span>
                                                </label>
                                              </div>
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  </div>
                                  {/* //amenities-dropdown */}
                                </div>
                              </div>
                            ) : null}
                            {advancedOpt ? (
                              ""
                            ) : (
                              <div className="advanced-option">
                                <div className="row d-flex align-items-center justify-content-end">
                                  <div className="col-lg-4 mt-3">
                                    <button
                                      className="btn d-inline-flex align-items-center justify-content-evenly p-4 btn-default price-btn advanced-option-btn"
                                      type="button"
                                      onClick={displayAdvancedOption}
                                    >
                                      <i className="fas fa-th mr-6" />
                                      <span>Show More Option</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Banner */}
    </div>
  );
}
