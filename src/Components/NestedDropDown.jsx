import React, { Component } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
export default class NestedDropDown extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      listOptions: [],
      residential: "none",
      commercial: "none",
      agricultural: "none",
      institutional: "none",
      industrial: "none",
      apartment_floor: "none",
      house: "none",
      home: "none",
      advanced_luxury: "none",
      classic_luxury: "none",
      plot: "none",
      shared: "none",
      island: "none",
      office: "none",
      retail: "none",
      hospitality: "none",
      others: "none",
    };
  }

  handleInput = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  showOption = (e) => {
    let keyName = e.target.value;
    if (this.state[keyName] === "block") {
      this.setState({
        [keyName]: "none",
      });
    } else {
      this.setState({
        [keyName]: "block",
      });
    }
  };

  render() {
    const { OptionData } = this.props;
    return (
      <div>
        <div className="dropdown dropdown-lg parent-container">
          <button
            className="btn d-inline-flex align-items-center justify-content-between px-2 btn-default dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            <a href="/#">Property Type</a>
          </button>
          <ul
            className="dropdown-menu"
            style={{
              overflowY: "scroll",
            }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <li className="m-2">
              <input
                className="form-control"
                type="text"
                defaultValue
                autoComplete="off"
                onkeyup="filterProperty()"
                id="property-type-optionList-input"
                value={this.state.inputText}
                onChange={this.handleInput}
              />
            </li>
            <div className="filter-list" />
            <div className="main-list">
              {OptionData &&
                OptionData["property-type"].map((item, index) => {
                  return (
                    <li
                      className="main-drop-menu"
                      style={{
                        margin: "0 10px",
                      }}
                      key={item + index}
                    >
                      <FormControlLabel
                        value={item.title.toLowerCase()}
                        control={<Checkbox color="secondary" />}
                        label={item.title.toLocaleUpperCase()}
                        labelPlacement="end"
                        onChange={(event) => this.showOption(event)}
                      />
                      <ul>
                        {item.data &&
                          item.data.map((subItem, index) => {
                            return (
                              <li
                                className="sub-drop-menu"
                                style={{
                                  display: this.state[item.title.toLowerCase()],
                                }}
                                key={subItem + index}
                              >
                                {/* <div className="form-check">
                                  <input
                                    className="form-check-input property-type"
                                    type="checkbox"
                                    name={subItem.title
                                      .toLowerCase()
                                      .replaceAll("/", "_")
                                      .replaceAll(" ", "_")}
                                    id={subItem.title.toLowerCase()}
                                    onClick={this.showOption}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckIndeterminate"
                                  >
                                    <span>{subItem.title}</span>
                                  </label>
                                </div> */}
                                <FormControlLabel
                                  value={subItem.title
                                    .toLowerCase()
                                    .replaceAll("/", "_")}
                                  control={<Checkbox color="secondary" />}
                                  label={subItem.title.toLocaleUpperCase()}
                                  labelPlacement="end"
                                  onChange={(event) => {
                                    console.log(event.target.value);
                                    this.showOption(event);
                                  }}
                                />
                                <ul>
                                  {subItem.data &&
                                    subItem.data.map((childItem) => {
                                      return (
                                        <li
                                          className="child-drop-menu"
                                          style={{
                                            display:
                                              this.state[
                                                subItem.title
                                                  .toLowerCase()
                                                  .replaceAll("/", "_")
                                                  .replaceAll(" ", "_")
                                              ],
                                          }}
                                          key={childItem + index}
                                        >
                                          <FormControlLabel
                                            value={childItem
                                              .toLowerCase()
                                              .replaceAll("/", "_")
                                              .replaceAll(" ", "_")}
                                            control={
                                              <Checkbox color="secondary" />
                                            }
                                            label={childItem.toLocaleUpperCase()}
                                            labelPlacement="end"
                                            onChange={(event) => {
                                              this.showOption(event);
                                            }}
                                          />
                                          <ul></ul>
                                        </li>
                                      );
                                    })}
                                </ul>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                })}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
