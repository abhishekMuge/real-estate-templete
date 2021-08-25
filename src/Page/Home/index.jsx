import React, { Component } from "react";
import axios from "axios";
import Banner from "../../Components/Banner";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      amenities: {},
      tagLine: {},
      property_type: {},
    };
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://ybxt58cet4.execute-api.ap-south-1.amazonaws.com/Stage/search-data"
    );
    console.log(response.data);
    this.setState({
      amenities: response.data[0],
      tagLine: response.data[1],
      property_type: response.data[3],
    });
  }
  render() {
    return (
      <div>
        <Banner
          tagLine={this.state.tagLine}
          amenities={this.state.amenities}
          propertySearch={this.state.property_type}
        />
      </div>
    );
  }
}
