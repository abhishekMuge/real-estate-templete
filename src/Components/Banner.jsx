import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import NestedDropDown from "./NestedDropDown";
import SliderComp from "./Slider";
import Slider from "@material-ui/core/Slider";
import RcDropDown from "react-dropdown";
import "react-dropdown/style.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useSpring, animated } from "react-spring";

export default function Banner({ amenities, propertySearch }) {
  const [advancedOpt, showAdvancedOpt] = useState(false);
  const [tabIndex, changeIndex] = useState("two");
  const [activeTab, setTabActive] = useState("property");
  const [dropPurposeno, setDropPurposeno] = useState(3);
  const [amenitiesKey, setAmenitiesKey] = useState("");
  const [amenitiesDropData, setAmenitiesDropData] = useState([amenities.data]);
  const [areaInputs, setArea] = useState({
    min: 0,
    max: 0,
  });
  const [priceInputs, setPrice] = useState({
    min: 0,
    max: 0,
  });
  const [selectedPurposeProps, setselectedPurposeProps] = useState([]);
  const [selectedamenitiesProps, setselectedamenitiesProps] = useState([]);
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  useEffect(() => {
    setAmenitiesDropData(amenities.data);
  }, [amenities.data]);

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

  const formatRangeValue = (number) => {
    setArea({
      min: number[0],
      max: number[1],
    });
  };

  const formatPriceValue = (min, max) => {
    setPrice({
      min: min,
      max: max,
    });
  };

  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      {/* Banner */}
      <div className={`banner-area banner-section banner-${tabIndex}`}>
        <div className="banner-slider">
          <div className="banner-slider-item">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container banner-top-container ">
                  <div
                    className="banner-content"
                    style={{
                      marginTop: tabIndex % 2 === 0 ? "" : "50px",
                    }}
                  >
                    {tabIndex === "one" && (
                      <h1>
                        {"Build Your Aspiration With Buildano".toLocaleUpperCase()}
                      </h1>
                    )}
                    {tabIndex === "two" && (
                      <h1>{"Find Your Dream Property".toLocaleUpperCase()}</h1>
                    )}
                    {tabIndex === "three" && (
                      <h1>{"rust Your Trustee".toLocaleUpperCase()}</h1>
                    )}
                    <div className="tab slides-category-list-tab">
                      <form>
                        <ul className="tabs banner-form-tag">
                          <li>
                            <a
                              href="/#"
                              className={`property-banner ${
                                activeTab === "property" ? "active-pill" : ""
                              }`}
                              onClick={() => handleTabs("two", "property", 3)}
                            >
                              Property
                            </a>
                          </li>
                          <li>
                            <a
                              href="/#"
                              className={`project-banner ${
                                activeTab === "project" ? "active-pill" : ""
                              }`}
                              onClick={() => handleTabs("one", "project", 5)}
                            >
                              Project
                            </a>
                          </li>
                          <li>
                            <a
                              href="/#"
                              className={`dealers-banner ${
                                activeTab === "dealers" ? "active-pill" : ""
                              }`}
                              onClick={() => handleTabs("three", "dealers", 7)}
                            >
                              Dealers
                            </a>
                          </li>
                        </ul>
                        <div className="tab_content">
                          <animated.div
                            className="tabs_item"
                            style={{
                              ...styles,
                            }}
                          >
                            <div className="banner-form-area">
                              <div className="row">
                                <div className="col-lg-3">
                                  <Dropdown
                                    forDrop="Purpose"
                                    data={[
                                      {
                                        value: "New Booking",
                                        label: "(New Launch)",
                                      },
                                      {
                                        value: "Pre Booking",
                                        label: "(Under Construction)",
                                      },
                                      {
                                        value: "Ready To Move",
                                        label: "",
                                      },
                                      {
                                        value: "Rent",
                                        label: "",
                                      },
                                      {
                                        value: "Leave",
                                        label: "",
                                      },
                                      {
                                        value: "Invesment",
                                        label: "",
                                      },
                                      {
                                        value: "Consultancy",
                                        label: "",
                                      },
                                    ]}
                                    dropListShowIndex={dropPurposeno}
                                    HandleChecks={setselectedPurposeProps}
                                    props={selectedPurposeProps}
                                  />
                                </div>

                                <div className="col-lg-3">
                                  <NestedDropDown
                                    OptionData={propertySearch.data}
                                  />
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
                              <div className="row mb-4">
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
                                        className="d-inline-flex align-items-center justify-content-between p-4 btn btn-default dropdown-toggle"
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
                                        {amenitiesDropData &&
                                          amenitiesDropData.map((item) => (
                                            <li
                                              style={{
                                                margin: "0 10px",
                                              }}
                                            >
                                              <FormControlLabel
                                                value={item}
                                                control={
                                                  <Checkbox
                                                    color="secondary"
                                                    onChange={(event) => {
                                                      if (
                                                        event.target.checked
                                                      ) {
                                                        setselectedamenitiesProps(
                                                          [
                                                            ...selectedamenitiesProps,
                                                            item,
                                                          ]
                                                        );
                                                      }
                                                    }}
                                                  />
                                                }
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
                                <div className="col-lg-5">
                                  <div className=" area-slider mt-3 mb-4">
                                    <div className="area-range">
                                      <div>
                                        <div className="card card-body text-left">
                                          <div className="area-slider text-left">
                                            <div className="d-flex flex-wrap">
                                              <div className="d-inline-flex align-items-center justify-content-between">
                                                <label
                                                  htmlFor="area"
                                                  style={{
                                                    marginRight: "10px",
                                                  }}
                                                >
                                                  Area
                                                </label>
                                                <div className="col-5">
                                                  <RcDropDown
                                                    options={[
                                                      "Sq.Yard",
                                                      "Sq.Feet",
                                                      "Sq.meter",
                                                      "Marla",
                                                      "Kanel",
                                                      "Acre",
                                                    ]}
                                                    value={"Area"}
                                                    placeholder="Select an option"
                                                  />
                                                </div>
                                                <div className="d-flex">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    style={{
                                                      width: "60px",
                                                      marginLeft: "5px",
                                                    }}
                                                    value={areaInputs.min}
                                                  />
                                                  <input
                                                    type="text"
                                                    className="col-1 form-control"
                                                    style={{
                                                      width: "60px",
                                                      marginLeft: "5px",
                                                    }}
                                                    value={areaInputs.max}
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <br />
                                            <div className="col">
                                              <Slider
                                                defaultValue={[100, 300]}
                                                aria-labelledby="renge-slider"
                                                valueLabelDisplay="auto"
                                                max={5000}
                                                min={100}
                                                onChangeCommitted={(
                                                  event,
                                                  number
                                                ) => formatRangeValue(number)}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-5">
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
                                            <SliderComp
                                              StateHandle={formatPriceValue}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
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
                          </animated.div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-table-cell"></div>
            </div>
          </div>
        </div>
      </div>
      {/* End Banner */}
    </div>
  );
}
