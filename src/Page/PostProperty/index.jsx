import axios from "axios";
import React, { Component } from "react";
import "react-dropdown/style.css";
import { Stepper } from "react-form-stepper";
import FormFour from "./FormFour";
//libraries

import FormOne from "./FormOne";
import FormThree from "./FormThree";
import FormTwo from "./FormTwo";
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
      formIndex: 1,
      activeAvability: "",
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
      <div className="container-fluid">
        <br />
        <br />
        <div className="container-fluid post-property-area text-center">
          <h2 className="mt-2">Post Property</h2>
          <Stepper
            steps={[
              { label: "Select Property Type" },
              { label: "Fill Property Overviews" },
              { label: "Fill Property Infomation" },
              { label: "Upload Property Photos" },
            ]}
            activeStep={this.state.formIndex - 1}
          />
        </div>{" "}
        {/* Header Text

        {/* form start here */}
        {this.state.formIndex === 1 && (
          <FormOne
            handleClick={this.handleClick}
            optionsList={this.state.dataOptions[3]}
          />
        )}
        {this.state.formIndex === 2 && (
          <FormTwo
            PropertyAge={PropertyAge}
            areaOptions={areaOptions}
            Possession={Possession}
            renderAvability={this.renderAvability}
            activeAvability={this.state.activeAvability}
            handleClick={this.handleClick}
            views={this.state.view}
          />
        )}
        {this.state.formIndex === 3 && (
          <FormThree
            amenities={this.state.amenities}
            handleFilter={this.handleFilter}
            handleClick={this.handleClick}
            customeKey={this.state.customeKey}
            customeKeyName={this.state.customeKeyName}
            customeKeyVal={this.state.customeKeyVal}
            addCustomKey={this.addCustomKey}
            rentView={this.state.rentView}
          />
        )}
        {this.state.formIndex === 4 && <FormFour />}
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
