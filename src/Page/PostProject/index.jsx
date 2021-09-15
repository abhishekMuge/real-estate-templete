import React, { Component } from "react";
import axios from "axios";
import { Stepper } from "react-form-stepper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FormCheck from "../../Components/FormComponent/FormCheck";
import FormDropdown from "../../Components/FormComponent/FormDropdown";
import FormInput from "../../Components/FormComponent/FormInput";
import FormTextArea from "../../Components/FormComponent/FormTextArea";
import FormUpload from "../../Components/FormComponent/FormUpload";
import FormDropInput from "../../Components/FormComponent/FormDropInput";
import FormCheckGroup from "../../Components/FormComponent/FormCheckGroup";

export default class PostProject extends Component {
  constructor() {
    super();
    this.state = {
      formIndex: 1,
      amenities: [],
      starDate: new Date(),
      propertyType: "",
      areaType: "Fixed Area",
      specification: [
        {
          key: "Rooms",
          value: ["12"],
        },
      ],
      key: "",
      value: "",
    };
  }

  async componentDidMount() {
    const { data } = await axios.get("/search-data");
    this.setState({
      amenities: data[0].data,
    });
  }
  setStartDate = (date) => {
    this.setState({
      starDate: date,
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

  handlePropType = (e) => {
    this.setState({
      propertyType: e.target.name,
    });
  };
  handleDrop = (value) => {
    this.setState({
      areaType: value.value,
    });
  };
  addSepcKey = (e) => {
    let state = e.target.name;
    this.setState({
      [state]: e.target.value,
    });
  };

  addSpec = (key, value) => {
    let obj = {
      key,
      value: [value],
    };
    console.log(obj);
    this.setState({
      specification: [...this.state.specification, obj],
    });
  };

  render() {
    const areaOptions = [
      "Sq.Yard",
      "Sq. Feat",
      "Sq. meter",
      "Marla",
      "kanel",
      "Acers",
    ];
    return (
      <div
        style={{
          overflowY: "hidden",
        }}
      >
        <div className="header text-center mt-4">
          <h1 className="fs-3">Post Project</h1>
          <Stepper
            steps={[
              { label: "Select Project Type" },
              { label: "Fill project Location Details" },
              { label: "upload project media " },
              { label: "Add proejct Unit" },
            ]}
            activeStep={this.state.formIndex - 1}
          />
        </div>

        {this.state.formIndex === 1 && (
          <div>
            <div className="row" style={{ margin: "20px" }}>
              <div className="col d-inline-flex">
                <div className="header col-lg-3">
                  <h3 className="-mb-5 fs-4 text-uppercase">Project Type*</h3>
                  <span className="mt-2">Select the any one Options</span>
                </div>
                <div className="d-inline-flex">
                  <FormCheckGroup
                    groupItem={["Residential", "Commercial"]}
                    handleClick={this.handlePropType}
                    checkedValue={this.state.propertyType}
                  />
                </div>
              </div>
              {/* end of type */}
            </div>

            <div className="row" style={{ margin: "20px" }}>
              <div className="col-lg-5">
                <FormInput
                  labelValue={"Project Title Name*: "}
                  placeholderValue={"Enter Project Title"}
                />
              </div>
              <div className="col-lg-5 mt-4">
                <FormDropdown
                  optionList={
                    this.state.propertyType === "residential"
                      ? ["Luxuary", "Premium", "Affordable"]
                      : ["commercial"]
                  }
                  label={"Project Type: "}
                />
              </div>
              <div className="col-lg-7">
                <FormTextArea label={"Description and Highlight: "} />
              </div>
            </div>
            <div className="row" style={{ padding: "20px" }}>
              <div className="col">
                <FormCheck
                  item={"RERA Approved"}
                  checkedValue={"RERA Approved".toLowerCase()}
                />
              </div>
              <div className="col-lg-14 mt-4">
                <div className="option-header">
                  <h3 className="-mb-5 fs-2 text-uppercase">Amenities</h3>
                  <span className="mt-2">Click the Options to select</span>
                </div>
                <div className="d-flex flex-wrap mt-3 scroll-div">
                  {this.state.amenities &&
                    this.state.amenities.map((item, index) => (
                      <button
                        className="btn option-pill rounded-pill common-btn m-2"
                        key={index}
                        style={{ backgroundColor: "" }}
                      >
                        {item.toLocaleUpperCase()}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {this.state.formIndex === 2 && (
          <div
            className="row"
            style={{
              margin: "20px",
            }}
          >
            <div className="col-lg-7 mt-3">
              <FormInput
                labelValue={"Upload Video Link"}
                placeholderValue="Video Link"
              />
            </div>
            <div className="col-lg-7 mt-3">
              <FormInput
                labelValue={"Address"}
                placeholderValue="Type Address"
              />
            </div>
            <div className="col-lg-7 mt-3">
              <FormInput
                labelValue={"Map Link"}
                placeholderValue="Link for Map"
              />
            </div>
            <div className="col-lg-7 mt-3">
              <FormInput
                labelValue={"Embeded Map Link"}
                placeholderValue="Link for map"
              />
            </div>
          </div>
        )}

        {this.state.formIndex === 3 && (
          <div
            className="row"
            style={{
              margin: "20px",
            }}
          >
            <div className="col-lg-7 mt-3">
              <FormUpload label={"Uploade Image and Videos"} />
            </div>
            <div className="col-lg-7 mt-3">
              <FormUpload label={"Upload cover Images"} />
            </div>
            <div className="col-lg-7 mt-3">
              <FormUpload label={"Upload BROCHURE"} />
            </div>
            <div className="col-lg-7 mt-3">
              <FormUpload label={"Upload Payment Plan"} />
            </div>
          </div>
        )}

        {this.state.formIndex === 4 && (
          <div
            className="row"
            style={{
              margin: "20px",
            }}
          >
            <div className="col-lg-5">
              <FormDropdown
                label={"Area Type"}
                optionList={["Fixed Area", "Flexible Area"]}
                handleDrop={this.handleDrop}
              />
            </div>
            <div className="col-lg-5">
              <FormDropdown
                optionList={
                  this.state.propertyType === "residential"
                    ? [
                        "Residential Apartment",
                        "Penthouse",
                        "Services Apartment",
                        "Studio Apartment",
                        "Independent House/Villa",
                        "Independent/Builder Floor",
                        "Farm House",
                        "Residential Plot/Land",
                      ]
                    : [
                        "Ready to move office space",
                        "Bare Shell office space",
                        "Co-working office space",
                        "Commercial shops",
                        "Space in Retail Mall",
                        "Commercial Land/Inst. Land",
                        "Industrial Lands/Plots",
                        "Agricultural/Farm Land",
                        "Hotel/Resorts",
                        "Guest-House/Banquet-Halls",
                        "Ware House",
                        "Cold Storage",
                        "Factory",
                        "Manufacturing",
                      ]
                }
                label={"Type of property"}
              />
            </div>
            <div className="col-14">
              <FormInput
                labelValue={"Unit Title"}
                placeholderValue={"Enter Unit Title"}
              />
            </div>
            {this.state.areaType === "Fixed Area" ? (
              <div>
                <div className="col-14 mt-3">
                  <FormDropInput
                    optionList={areaOptions}
                    label={"Total Area"}
                  />
                </div>
                <div className="col-14 mt-3">
                  <FormDropInput
                    optionList={areaOptions}
                    label={"Build-up Area"}
                  />
                </div>
                <div className="col-14 mt-3">
                  <FormDropInput
                    optionList={areaOptions}
                    label={"Carpet Area"}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="col-14 mt-3">
                  <FormDropInput
                    optionList={areaOptions}
                    label={"Total Area"}
                  />
                </div>
              </div>
            )}
            <div className="col-14 mt-3">
              <FormInput
                labelValue={"Property Rate in above defined unit(*total area)"}
                placeholderValue={"Enter Value"}
              />
            </div>
            <div className="col-14 mt-3">
              <FormInput
                labelValue={"Property Price"}
                placeholderValue={"Enter Value"}
              />
            </div>
            <div className="col-14 mt-3 d-flex">
              <FormCheck item={"Includes all taxes"} />
              <FormCheck item={"Includes additional charges"} />
            </div>
            <div className="col-14 mt-3">
              <FormUpload label={"Add floor plan"} />
            </div>
            <div className="col-14 mt-3">
              <div className="option-header">
                <label
                  htmlFor="address"
                  className="-mb-20 bold-text fs-4 text-uppercase text-bold"
                >
                  Avabilities*
                </label>
              </div>
              <DatePicker
                className="form-control"
                selected={this.state.starDate}
                onChange={(date) => this.setStartDate(date)}
                showYearDropdown
              />
              <div className="d-flex">
                <FormCheck item={"Ready To move"} />
                <FormCheck item={"Within 3 Months"} />
              </div>
            </div>
            <div className="col-14">
              <div className="option-header">
                <label
                  htmlFor="address"
                  className="-mb-20 bold-text fs-4 text-uppercase text-bold"
                >
                  Specification*
                </label>
              </div>
              <div className="d-flex flex-wrap">
                <div className="col-5 m-3">
                  <input
                    type="text"
                    className="form-control"
                    name="key"
                    autoComplete={false}
                    placeholder="Enter Key"
                    onChange={this.addSepcKey}
                  />
                </div>
                <div className="col-5 m-3">
                  <input
                    type="text"
                    className="form-control"
                    name="value"
                    autoComplete={false}
                    placeholder="Enter Value"
                    onChange={this.addSepcKey}
                  />
                </div>
                <div className="col-5 m-3">
                  <button
                    className="btn common-btn"
                    onClick={() =>
                      this.addSpec(this.state.key, this.state.value)
                    }
                  >
                    ADD Key
                  </button>
                </div>
              </div>
            </div>
            <div className="col-14 d-flex flex-column categories widget-item">
              <ul>
                {this.state.specification &&
                  this.state.specification.map((item) => (
                    <li>
                      <a href="/#">
                        {item.key} {":"} {item.value}
                      </a>
                    </li>
                  ))}
              </ul>
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
