import axios from "axios";
import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default class PostProperty extends Component {
  constructor() {
    super();
    this.state = {
      dataOptions: [],
      residential: [],
      commercial: [],
      industrial: [],
      institutional: [],
      agricultural: [],
      amenities: [],
      view: [],
      customeKey: [],
      customeKeyName: "",
      customeKeyVal: "",
      rentView: false,
      formIndex: 2,
      activeAvability: "rtm",
    };
  }
  async componentDidMount() {
    const { data } = await axios.get("/search-data");
    this.setState({ dataOptions: data });
    this.setState({
      residential: data[3].data["property-type"][0].data,
      commercial: data[3].data["property-type"][1].data,
      industrial: data[3].data["property-type"][2].data[0].data,
      institutional: data[3].data["property-type"][3].data[0].data,
      agricultural: data[3].data["property-type"][4].data[0].data,
      view: data[2].data,
      amenities: data[0].data,
    });
    // console.log(this.state.industrial);
  }
  handleRentView = () => {
    this.setState({
      rentView: !this.state.rentView,
    });
  };
  handleBack = (e) => {
    if (this.state.formIndex === 1) {
      e.target.disabled = "true";
    } else {
      this.setState({
        formIndex: this.state.formIndex - 1,
      });
    }
  };
  handleNext = (e) => {
    if (this.state.formIndex === 4) {
      e.target.disabled = "true";
    } else {
      this.setState({
        formIndex: this.state.formIndex + 1,
      });
    }
  };

  handleClick = (e) => {
    if (e.target.name === "rent") {
      this.handleRentView();
    }
    if (e.target.style["background-color"] === "black") {
      e.target.style["background-color"] = "";
    } else {
      e.target.style["background-color"] = "black";
    }
  };

  addCustomKey = () => {
    let name = this.state.customeKeyName;
    let val = this.state.customeKeyVal;
    let key = {
      name,
      val,
    };
    console.log(key);
    this.setState({
      customeKey: [...this.state.customeKey, key],
    });
  };
  handleKeyChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleFilter = (e) => {
    let keyWord = e.target.value;
    let amenities = this.state.amenities;
    if (keyWord !== "") {
      let result = amenities.filter((item) => {
        return item.toLowerCase().startsWith(keyWord.toLowerCase());
      });
      this.setState({
        amenities: result,
      });
    } else {
      this.setState({
        amenities: this.state.dataOptions[0].data,
      });
    }
  };

  renderAvability = (e) => {
    this.setState({
      activeAvability: e.target.name,
    });
  };

  render() {
    const Possession = [
      "within 3 months",
      "within 6 months",
      "within 1 years",
      "within 2 years",
      "within 3 years",
      "within 5 years",
      "within 10 years",
    ];
    const PropertyAge = [
      "new Construction",
      "less than 1 year",
      "less than 5 year",
      "less than 10 year",
      "less than 20 year",
      "less than 50 year",
      "more than 50 year",
    ];
    const areaOptions = [
      "Sq.Yard",
      "Sq. Feat",
      "Sq. meter",
      "Marla",
      "kanel",
      "Acers",
    ];
    return (
      <div>
        <br />
        <br />
        <div className="container-fluid post-property-area">
          <h2 className="mt-4">Post Property</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a href="/#">Post-Property</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a href="/#">{this.state.formIndex}</a>
              </li>
            </ol>
          </nav>
        </div>{" "}
        {/* Header Text

        {/* form start here */}
        {this.state.formIndex === 1 && (
          <div className="step-form">
            <div className="container-fluid border option  mt-4">
              <div className=" m-4">
                <div className="purpose-option-header text-white">
                  <h3 className="-mb-5 fs-2 text-uppercase">Purpose*</h3>
                  <span className="mt-2">Click the Options to select</span>
                </div>
                <div className="d-flex flex-wrap mt-3">
                  <button
                    className="btn option-pill rounded-pill common-btn m-3"
                    style={{ backgroundColor: "" }}
                    name="rent"
                    onClick={this.handleClick}
                  >
                    Rent
                  </button>
                  <button
                    className="btn option-pill rounded-pill common-btn m-3"
                    style={{ backgroundColor: "" }}
                    onClick={this.handleClick}
                  >
                    For Sales
                  </button>
                  <button
                    className="btn option-pill rounded-pill common-btn m-3"
                    style={{ backgroundColor: "" }}
                    onClick={this.handleClick}
                  >
                    New Booking
                  </button>
                  <button
                    className="btn option-pill rounded-pill common-btn m-3"
                    style={{ backgroundColor: "" }}
                    onClick={this.handleClick}
                  >
                    Pre Booking
                  </button>
                  <button
                    className="btn option-pill rounded-pill common-btn m-3"
                    style={{ backgroundColor: "" }}
                    onClick={this.handleClick}
                  >
                    Ready To Move
                  </button>
                  <button
                    className="btn option-pill rounded-pill common-btn m-3"
                    style={{ backgroundColor: "" }}
                    onClick={this.handleClick}
                  >
                    Invesment
                  </button>
                  <button
                    className="btn option-pill rounded-pill common-btn m-3"
                    style={{ backgroundColor: "" }}
                    onClick={this.handleClick}
                  >
                    Consultancy
                  </button>
                </div>
              </div>
            </div>

            <div className="conatiner-fluid property-type m-4">
              <div className="property-option-header mb-3">
                <h3 className="-mb-5 fs-2 text-uppercase">Property Type*</h3>
                <span className="mt-2">Click the Options to select</span>
              </div>
              <div className="scroll-div border p-4">
                <div className="property-option-header mt-3">
                  <h3 className=" fs-5 text-capitalize">Residential*</h3>
                </div>
                <div className="d-inline-flex flex-wrap">
                  {this.state.residential &&
                    this.state.residential.length > 0 &&
                    this.state.residential.map((item, index) => {
                      return (
                        <div>
                          <button
                            key={item.id}
                            className="btn option-pill rounded-pill btn-main common-btn m-3"
                            style={{ backgroundColor: "" }}
                            onClick={this.handleClick}
                          >
                            {item.title}
                          </button>
                          {item.data.map((data, index) => (
                            <button
                              key={index}
                              className="btn option-pill rounded-pill common-btn m-3"
                              style={{ backgroundColor: "" }}
                              onClick={this.handleClick}
                            >
                              {data}
                            </button>
                          ))}
                          <hr />
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="scroll-div border p-4 mt-3">
                <div className="property-option-header mt-3">
                  <h3 className=" fs-5 text-capitalize">Commercial*</h3>
                </div>
                <div className="d-flex flex-wrap">
                  {this.state.commercial &&
                    this.state.commercial.length > 0 &&
                    this.state.commercial.map((item, index) => {
                      return (
                        <div>
                          <button
                            key={item.id}
                            className="btn btn-main option-pill rounded-pill common-btn m-3"
                            style={{ backgroundColor: "" }}
                            onClick={this.handleClick}
                          >
                            {item.title}
                          </button>
                          {item.data.map((data, index) => (
                            <button
                              key={index}
                              className="btn option-pill rounded-pill common-btn m-3"
                              style={{ backgroundColor: "" }}
                              onClick={this.handleClick}
                            >
                              {data}
                            </button>
                          ))}
                          <hr />
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className=" border p-4 mt-3">
                <div className="property-option-header mt-3">
                  <h3 className=" fs-5 text-capitalize">Industrial*</h3>
                </div>
                <div className="d-flex flex-wrap">
                  {this.state.industrial &&
                    this.state.industrial.map((item, index) => {
                      return (
                        <div>
                          <button
                            key={index}
                            className="btn option-pill rounded-pill common-btn m-3"
                            style={{ backgroundColor: "" }}
                            onClick={this.handleClick}
                          >
                            {item}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className=" border p-4 mt-3">
                <div className="property-option-header mt-3">
                  <h3 className=" fs-5 text-capitalize">Agriculture*</h3>
                </div>
                <div className="d-flex flex-wrap">
                  {this.state.agricultural &&
                    this.state.agricultural.map((item, index) => {
                      return (
                        <div>
                          <button
                            key={index}
                            className="btn option-pill rounded-pill  common-btn m-3"
                            style={{ backgroundColor: "" }}
                            onClick={this.handleClick}
                          >
                            {item}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className=" border p-4 mt-3">
                <div className="property-option-header mt-3">
                  <h3 className=" fs-5 text-capitalize">Institutional*</h3>
                </div>
                <div className="d-flex flex-wrap">
                  {this.state.institutional &&
                    this.state.institutional.map((item, index) => {
                      return (
                        <div>
                          <button
                            key={index}
                            className="btn option-pill rounded-pill common-btn m-3"
                            style={{ backgroundColor: "" }}
                            onClick={this.handleClick}
                          >
                            {item}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        )}
        {this.state.formIndex === 2 && (
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
                    onClick={this.renderAvability}
                  >
                    Under Construction
                  </button>
                  <button
                    className="btn option-pill rounded-pill common-btn m-2"
                    name="rtm"
                    onClick={this.renderAvability}
                  >
                    Ready To Move
                  </button>
                </div>
                <div className="d-inline-flex  flex-column align-item-center text-black">
                  <span className="fs-4 mt-4">
                    {this.state.activeAvability === "rtm"
                      ? "Age Of Property*"
                      : ""}
                    {this.state.activeAvability === "underconst"
                      ? "Possession time*"
                      : ""}
                  </span>
                  <br />
                  {this.state.activeAvability === "underconst" && (
                    <Dropdown
                      className=""
                      options={Possession}
                      onChange={this._onSelect}
                      value={Possession[0]}
                      placeholder="Select an option"
                    />
                  )}
                  {this.state.activeAvability === "rtm" && (
                    <Dropdown
                      className=""
                      options={PropertyAge}
                      onChange={this._onSelect}
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
                  {["free-hold", "lease-hold", "co-operative soc"].map(
                    (item) => (
                      <button
                        className="btn option-pill rounded-pill common-btn m-2"
                        name="unconstState"
                        style={{ backgroundColor: "" }}
                        onClick={this.handleClick}
                      >
                        {item.toLocaleUpperCase()}
                      </button>
                    )
                  )}
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
                      onClick={this.handleClick}
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
                  {this.state.view &&
                    this.state.view.map((item) => (
                      <button
                        className="btn option-pill rounded-pill common-btn m-2"
                        name="unconstState"
                        style={{ backgroundColor: "" }}
                        onClick={this.handleClick}
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
                      onChange={this._onSelect}
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
                      onChange={this._onSelect}
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
                      onChange={this._onSelect}
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
        )}
        {this.state.formIndex === 3 && (
          <div className="step-form step-form-3">
            <div className="container-fluid">
              <div className="m-4 row">
                <div className="purpose-option-header">
                  <label htmlFor="areaRate" className=" fs-3 text-uppercase">
                    {this.state.rentView ? "Rent Rate*" : "Rate Per Sq. Yard*"}
                  </label>
                </div>
                <div className="d-flex align-items-center flex-wrap mt-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="areaRate"
                      data-for={this.state.rentView ? "rent" : "rate"}
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
                    <label
                      className="form-check-label"
                      htmlFor="inlineFormCheck"
                    >
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
                <div>
                  <label htmlFor="key">Enter Key</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customeKeyName"
                    placeholder="Enter Key Name"
                    value={this.state.customeKeyName}
                    onChange={this.handleKeyChange}
                  />
                </div>
                <div>
                  <label htmlFor="key">Enter Key</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customeKeyVal"
                    placeholder="Enter Key Value"
                    value={this.state.customeKeyVal}
                    onChange={this.handleKeyChange}
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
                    onChange={this._onSelect}
                    placeholder="Select an option"
                  />
                </div>
                <div className="d-flex align-items-center m-4">
                  <span className="fs-4 mr-2" style={{ marginRight: "20px" }}>
                    BedRoom
                  </span>
                  <Dropdown
                    options={Array.from(Array(10).keys())}
                    onChange={this._onSelect}
                    placeholder="Select an option"
                  />
                </div>
                <div className="d-flex align-items-center m-4">
                  <span className="fs-4 mr-2" style={{ marginRight: "20px" }}>
                    Servent Room
                  </span>
                  <Dropdown
                    options={Array.from(Array(10).keys())}
                    onChange={this._onSelect}
                    placeholder="Select an option"
                  />
                </div>
                <div className="d-flex align-items-center m-4">
                  <span className="fs-4 mr-2" style={{ marginRight: "20px" }}>
                    Balcony
                  </span>
                  <Dropdown
                    options={Array.from(Array(5).keys())}
                    onChange={this._onSelect}
                    placeholder="Select an option"
                  />
                </div>
                <div className="d-flex align-items-center m-4">
                  <span className="fs-4 mr-2" style={{ marginRight: "20px" }}>
                    On Floor
                  </span>
                  <Dropdown
                    options={Array.from(Array(50).keys())}
                    onChange={this._onSelect}
                    placeholder="Select an option"
                  />
                </div>
                {this.state.customeKey &&
                  this.state.customeKey.map((item) => (
                    <div className="d-flex align-items-center m-4 common-btn">
                      <span>{item.name} :</span>
                      <span>{item.val}</span>
                    </div>
                  ))}
                <div className="d-flex align-items-center m-4">
                  <button
                    className="btn common-btn"
                    onClick={this.addCustomKey}
                  >
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
                      onChange={this.handleFilter}
                    />
                  </div>
                </div>
                <div className="d-flex flex-wrap mt-3 scroll-div">
                  {this.state.amenities &&
                    this.state.amenities.map((item, index) => (
                      <button
                        className="btn option-pill rounded-pill common-btn m-2"
                        key={index}
                        style={{ backgroundColor: "" }}
                        onClick={this.handleClick}
                      >
                        {item.toLocaleUpperCase()}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {this.state.formIndex === 4 && (
          <div>
            <div className="container-fluid m-5 ">
              <div className="row">
                <div className="purpose-option-header">
                  <h3 className="-mb-5 fs-2 text-uppercase">Upload Photos*</h3>
                  <span className="mt-2">Upload Property photos</span>
                </div>
                <div className="mt-3 col-lg-10">
                  <input
                    type="file"
                    className="form-control custom-file-input"
                  ></input>
                </div>
              </div>
              <div className="row mt-4">
                <div className="purpose-option-header">
                  <h3 className="-mb-5 fs-2 text-uppercase">
                    Upload Cover Photos*
                  </h3>
                  <span className="mt-2">Upload Cover photos</span>
                </div>
                <div className="mt-3 col-lg-10">
                  <input
                    type="file"
                    className="form-control custom-file-input"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn m-4 common-btn" onClick={this.handleBack}>
            back
          </button>

          <button className="btn m-4 common-btn" onClick={this.handleNext}>
            next
          </button>
        </div>
      </div>
    );
  }
}
