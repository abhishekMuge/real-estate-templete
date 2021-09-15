import React, { Component } from "react";
import "react-dropdown/style.css";
import { Stepper } from "react-form-stepper";
import { connect } from "react-redux";
import {
  getSearchData,
  loginUser,
  getPropertyID,
} from "../../Redux_config/Actions/propertyAction";
//libraries
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
class PostProperty extends Component {
  constructor() {
    super();
    this.state = {
      amenities: [],
      view: [],
      dataOptions: [],
      customeKey: [],
      customeKeyName: "",
      customeKeyVal: "",
      rentView: false,
      formIndex: 1,
      activeAvability: "",
      purposeType: "",
      propertyType: "",
      viewTime: "",
      ownerShip: "",
      facing: [],
      views: [],
      selectedUnit: 0,
      totalArea: "",
      carpetArea: "",
      buildUpArea: "",
      amenitiesSelected: [],
    };
  }
  async componentDidMount() {
    await this.props.getSearchData();
    await this.setState({ dataOptions: this.props.searchData });
  }

  // async createID() {
  //   const res = await axios.get("/property", {
  //     headers: { "Access-Control-Allow-Origin": "*" },
  //   });
  //   console.log(res);
  // }

  handlePropSubmit = () => {
    const dataObj = {
      purpose: this.state.purposeType,
      property_type: this.state.propertyType,
      avability: this.state.activeAvability,
      timeProp: this.state.viewTime,
      ownership: this.state.ownerShip,
      facing: this.state.facing,
      views: this.state.views,
      areaUnitParam: "Sq.Yard",
      totalArea: this.state.totalArea,
      buildUpArea: this.state.buildUpArea,
      carpetArea: this.state.carpetArea,
      specialDescription: this.state.specialDesc,
      rentPerArea: this.state.rate,
      totalPrice: this.state.totalArea * this.state.rate,
      includeAllTaxes: this.state.include_all_taxes
        ? this.state.include_all_taxes
        : "false",
      priceNegotiable: this.state.price_negotiable
        ? this.state.price_negotiable
        : "false",
      reraApprovedProperty: this.state.rera_approved_property
        ? this.state.rera_approved_property
        : "false",
      amenities: this.state.amenitiesSelected,
    };
    let data = JSON.parse(JSON.stringify(dataObj));
    console.log(data);

    //req
    this.props.loginUser();
    this.props.getPropertyID();
  };

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

  handlePurposeType = (e) => {
    this.setState({
      purposeType: e.target.name,
    });
  };

  setPropType = (forObj, value) => {
    this.setState({
      [forObj]: value,
    });
  };
  setGroupPropType = (forObj, value) => {
    this.setState({
      [forObj]: [...this.state[forObj], value],
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
        {this.props.searchData && (
          <div>
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
                purposeTypeCheckValue={this.state.purposeType}
                handleCheckGroup={this.handlePurposeType}
                setPropType={this.setPropType}
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
                views={this.state.dataOptions[2].data}
                setPropType={this.setPropType}
                ownerShipProp={this.state.ownerShip}
                setGroupPropType={this.setGroupPropType}
                facingProp={this.state.facing}
                viewsProps={this.state.views}
                selectedUnit={this.state.selectedUnit}
                totalArea={this.state.totalArea}
                carpetArea={this.state.carpetArea}
                buildUpArea={this.state.buildUpArea}
              />
            )}
            {this.state.formIndex === 3 && (
              <FormThree
                amenities={this.state.dataOptions[0].data}
                handleFilter={this.handleFilter}
                handleClick={this.handleClick}
                customeKey={this.state.customeKey}
                customeKeyName={this.state.customeKeyName}
                customeKeyVal={this.state.customeKeyVal}
                addCustomKey={this.addCustomKey}
                rentView={this.state.rentView}
                setPropType={this.setPropType}
                amenitiesSelected={this.state.amenitiesSelected}
                setGroupPropType={this.setGroupPropType}
              />
            )}
            {this.state.formIndex === 4 && <FormFour />}
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn m-4 common-btn" onClick={this.handleBack}>
                {this.state.formIndex === 1 ? "Cancel Property" : "Back"}
              </button>

              <button
                className="btn m-4 common-btn"
                onClick={
                  this.state.formIndex === 4
                    ? this.handlePropSubmit
                    : this.handleNext
                }
              >
                {this.state.formIndex === 4 ? "Submit Property" : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchData: state.property.searchData,
});
export default connect(mapStateToProps, {
  loginUser,
  getSearchData,
  getPropertyID,
})(PostProperty);
