import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AddToQueue, FavoriteBorder } from "@material-ui/icons";
import "./style.css";
import "react-tabs/style/react-tabs.css";
export default class Wishlist extends Component {
  render() {
    return (
      <div>
        {/* Page Title */}
        <div className="page-title-area title-bg-two">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="title-content">
                  <h2>Property Right Sidebar</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span>Wishlist</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title */}
        <div className="container mt-100">
          <Tabs>
            <TabList>
              <Tab>Property</Tab>
              <Tab>Project</Tab>
              <Tab>Dealer</Tab>
              <Tab>Blogs</Tab>
            </TabList>
            <TabPanel>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span> New York </span>
                            <span>For Sell</span>
                            <img
                              src="assets/images/property/property1.jpg"
                              alt="Property"
                              className="property-item-img"
                            />
                            <div
                              className="
                  share-options
                  d-inline-flex
                  align-items-center
                  justify-content-around
                "
                            >
                              <i className="fas fa-phone-square-alt share-options-item" />
                              <i className="fab fa-whatsapp-square share-options-item" />
                              <i className="fas fa-envelope-square share-options-item" />
                            </div>
                          </div>
                          <div className="bottom text-left d-flex justify-content-between">
                            <div className="left-bottom">
                              <span>From $12,000.00</span>
                              <h3>
                                <a href="property-details.html">
                                  Sag Harbor Cottage
                                </a>
                              </h3>
                              <a className="location" href="/#">
                                <i className="bx bx-current-location" />
                                300 B 1st View Road, New York
                              </a>
                              <ul>
                                <li>5 BD</li>
                                <li>2 BA</li>
                                <li>1800 SF</li>
                                <li>6 RM</li>
                              </ul>
                            </div>
                            <div className="right-bottom">
                              <span>
                                <i
                                  className="far fa-heart"
                                  style={{ fontSize: "1.4rem" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span>New York</span>
                            <span>For Rent</span>
                            <img
                              src="assets/images/property/property2.jpg"
                              alt="Property"
                            />
                          </div>
                          <div className="bottom text-left d-flex justify-content-between">
                            <div className="left-bottom">
                              <span>$11,000.00/Month</span>
                              <h3>
                                <a href="property-details.html">
                                  Cascade Blocks Villa
                                </a>
                              </h3>
                              <a className="location" href="/#">
                                <i className="bx bx-current-location" />
                                300 B 1st View Road, New York
                              </a>
                              <ul>
                                <li>5 BD</li>
                                <li>2 BA</li>
                                <li>1800 SF</li>
                                <li>6 RM</li>
                              </ul>
                            </div>
                            <div className="right-bottom">
                              <span>
                                <i className="far fa-heart" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span>New York</span>
                            <span>For Rent</span>
                            <img
                              src="assets/images/property/property3.jpg"
                              alt="Property"
                            />
                          </div>
                          <div className="bottom text-left">
                            <span>$10,000.00/Month</span>
                            <h3>
                              <a href="property-details.html">
                                Extension Haven
                              </a>
                            </h3>
                            <a className="location" href="/#">
                              <i className="bx bx-current-location" />
                              300 B 1st View Road, New York
                            </a>
                            <ul>
                              <li>5 BD</li>
                              <li>2 BA</li>
                              <li>1800 SF</li>
                              <li>6 RM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span>New York</span>
                            <span>For Sell</span>
                            <img
                              src="assets/images/property/property4.jpg"
                              alt="Property"
                            />
                          </div>
                          <div className="bottom text-left">
                            <span>From $9,000.00</span>
                            <h3>
                              <a href="property-details.html">Titan House</a>
                            </h3>
                            <a className="location" href="/#">
                              <i className="bx bx-current-location" />
                              300 B 1st View Road , New York
                            </a>
                            <ul>
                              <li>5 BD</li>
                              <li>2 BA</li>
                              <li>1800 SF</li>
                              <li>6 RM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span>New York</span>
                            <span>For Sell</span>
                            <img
                              src="assets/images/property/property5.jpg"
                              alt="Property"
                            />
                          </div>
                          <div className="bottom text-left">
                            <span>From $8,000.00</span>
                            <h3>
                              <a href="property-details.html">Royal House</a>
                            </h3>
                            <a className="location" href="/#">
                              <i className="bx bx-current-location" />
                              300 B 1st View Road, New York
                            </a>
                            <ul>
                              <li>5 BD</li>
                              <li>2 BA</li>
                              <li>1800 SF</li>
                              <li>6 RM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span>New York</span>
                            <span>For Sell</span>
                            <img
                              src="assets/images/property/property6.jpg"
                              alt="Property"
                            />
                          </div>
                          <div className="bottom text-left">
                            <span>From $7,000.00</span>
                            <h3>
                              <a href="property-details.html">
                                Natural Cottage
                              </a>
                            </h3>
                            <a className="location" href="/#">
                              <i className="bx bx-current-location" />
                              300 B 1st View Road, New York
                            </a>
                            <ul>
                              <li>5 BD</li>
                              <li>2 BA</li>
                              <li>1800 SF</li>
                              <li>6 RM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span> New York </span>
                            <span>For Sell</span>
                            <img
                              src="assets/images/property/property1.jpg"
                              alt="Property"
                              className="property-item-img"
                            />
                            <div className="share-options d-inline-flex align-items-center justify-content-around">
                              <i className="fas fa-phone-square-alt share-options-item" />
                              <i className="fab fa-whatsapp-square share-options-item" />
                              <i className="fas fa-envelope-square share-options-item" />
                            </div>
                          </div>
                          <div className="bottom d-flex justify-content-between text-left">
                            <div className="left-bottom text-left">
                              <span>From $12,000.00</span>
                              <h3>
                                <a href="property-details.html">
                                  Sag Harbor Cottage
                                </a>
                              </h3>
                              <a className="location" href="/#">
                                <i className="bx bx-current-location" />
                                300 B 1st View Road, New York
                              </a>
                              <a className="unit fs-3" href="/#">
                                Unit: 120 Sq.feet
                              </a>
                              <br />
                              <a className="type fs-3" href="/#">
                                Residential Type: Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Suscipit ut illum,
                                tempore est asperiores, id totam explicabo
                              </a>
                            </div>
                            <div className="right-bottom">
                              <span>
                                <i
                                  className="far fa-heart"
                                  style={{ fontSize: "1.4rem" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span> New York </span>
                            <span>For Sell</span>
                            <img
                              src="assets/images/property/property1.jpg"
                              alt="Property"
                              className="property-item-img"
                            />
                            <div className="share-options d-inline-flex align-items-center justify-content-around">
                              <i className="fas fa-phone-square-alt share-options-item" />
                              <i className="fab fa-whatsapp-square share-options-item" />
                              <i className="fas fa-envelope-square share-options-item" />
                            </div>
                          </div>
                          <div className="bottom d-flex justify-content-between text-left">
                            <div className="left-bottom text-left">
                              <span>From $12,000.00</span>
                              <h3>
                                <a href="property-details.html">
                                  Sag Harbor Cottage
                                </a>
                              </h3>
                              <a className="location" href="/#">
                                <i className="bx bx-current-location" />
                                300 B 1st View Road, New York
                              </a>
                              <a className="unit fs-3" href="/#">
                                Unit: 120 Sq.feet
                              </a>
                              <br />
                              <a className="type fs-3" href="/#">
                                Residential Type: Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Suscipit ut illum,
                                tempore est asperiores, id totam explicabo
                              </a>
                            </div>
                            <div className="right-bottom">
                              <span>
                                <i
                                  className="far fa-heart"
                                  style={{ fontSize: "1.4rem" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span> New York </span>
                            <span>For Sell</span>
                            <img
                              src="assets/images/property/property1.jpg"
                              alt="Property"
                              className="property-item-img"
                            />
                            <div className="share-options d-inline-flex align-items-center justify-content-around">
                              <i className="fas fa-phone-square-alt share-options-item" />
                              <i className="fab fa-whatsapp-square share-options-item" />
                              <i className="fas fa-envelope-square share-options-item" />
                            </div>
                          </div>
                          <div className="bottom d-flex justify-content-between text-left">
                            <div className="left-bottom text-left">
                              <span>From $12,000.00</span>
                              <h3>
                                <a href="property-details.html">
                                  Sag Harbor Cottage
                                </a>
                              </h3>
                              <a className="location" href="/#">
                                <i className="bx bx-current-location" />
                                300 B 1st View Road, New York
                              </a>
                              <a className="unit fs-3" href="/#">
                                Unit: 120 Sq.feet
                              </a>
                              <br />
                              <a className="type fs-3" href="/#">
                                Residential Type: Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Suscipit ut illum,
                                tempore est asperiores, id totam explicabo
                              </a>
                            </div>
                            <div className="right-bottom">
                              <span>
                                <i
                                  className="far fa-heart"
                                  style={{ fontSize: "1.4rem" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span> New York </span>
                            <span>For Sell</span>
                            <img
                              src="assets/images/property/property1.jpg"
                              alt="Property"
                              className="property-item-img"
                            />
                            <div className="share-options d-inline-flex align-items-center justify-content-around">
                              <i className="fas fa-phone-square-alt share-options-item" />
                              <i className="fab fa-whatsapp-square share-options-item" />
                              <i className="fas fa-envelope-square share-options-item" />
                            </div>
                          </div>
                          <div className="bottom d-flex justify-content-between text-left">
                            <div className="left-bottom text-left">
                              <span>From $12,000.00</span>
                              <h3>
                                <a href="property-details.html">
                                  Sag Harbor Cottage
                                </a>
                              </h3>
                              <a className="location" href="/#">
                                <i className="bx bx-current-location" />
                                300 B 1st View Road, New York
                              </a>
                              <a className="unit fs-3" href="/#">
                                Unit: 120 Sq.feet
                              </a>
                              <br />
                              <a className="type fs-3" href="/#">
                                Residential Type: Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Suscipit ut illum,
                                tempore est asperiores, id totam explicabo
                              </a>
                            </div>
                            <div className="right-bottom">
                              <span>
                                <i
                                  className="far fa-heart"
                                  style={{ fontSize: "1.4rem" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="property-item">
                          <div className="top">
                            <span> New York </span>
                            <span>For Sell</span>
                            <img
                              src="assets/images/property/property1.jpg"
                              alt="Property"
                              className="property-item-img"
                            />
                            <div className="share-options d-inline-flex align-items-center justify-content-around">
                              <i className="fas fa-phone-square-alt share-options-item" />
                              <i className="fab fa-whatsapp-square share-options-item" />
                              <i className="fas fa-envelope-square share-options-item" />
                            </div>
                          </div>
                          <div className="bottom d-flex justify-content-between text-left">
                            <div className="left-bottom text-left">
                              <span>From $12,000.00</span>
                              <h3>
                                <a href="property-details.html">
                                  Sag Harbor Cottage
                                </a>
                              </h3>
                              <a className="location" href="/#">
                                <i className="bx bx-current-location" />
                                300 B 1st View Road, New York
                              </a>
                              <a className="unit fs-3" href="/#">
                                Unit: 120 Sq.feet
                              </a>
                              <br />
                              <a className="type fs-3" href="/#">
                                Residential Type: Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Suscipit ut illum,
                                tempore est asperiores, id totam explicabo
                              </a>
                            </div>
                            <div className="right-bottom">
                              <span>
                                <i
                                  className="far fa-heart"
                                  style={{ fontSize: "1.4rem" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="d-flex agents-list m-4 flex-wrap">
                <div
                  className="team-item item border"
                  style={{
                    width: "300px",
                    margin: "0 20px",
                  }}
                >
                  <div className="top">
                    <span
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <AddToQueue />
                    </span>
                    <span
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <FavoriteBorder />
                    </span>
                    <img src="assets/images/team1.jpg" alt="Team" />
                    <h3>OM SHIV INTERNATIONAL</h3>
                    <p>commercial leasing and consultant</p>
                    <ul>
                      <li>
                        <a href="/#" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="/#" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/#" target="_blank">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="/#" target="_blank">
                          <i className="bx bxl-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom">
                    <ul>
                      <li>
                        <a href="/#">
                          {" "}
                          A-1 Opposite Mahindra Aura, New Palam Vihar Sector
                          110A Gurugram
                        </a>
                      </li>
                      <li>
                        <i className="bx bx-mail-send" />
                        <a href="mailto:hello@snift.com">hipvtltd@gmail.com</a>
                      </li>
                      <li>
                        <i className="bx bx-phone-call" />
                        <a href="tel:+123456789">9999408076</a>
                        {"  /  "}
                        <a href="tel:+123456789">9999408076</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* 1item */}
                <div
                  className="team-item item border"
                  style={{
                    width: "300px",
                  }}
                >
                  <div className="top">
                    <span
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <AddToQueue />
                    </span>
                    <span
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <FavoriteBorder />
                    </span>
                    <img src="assets/images/team1.jpg" alt="Team" />
                    <h3>OM SHIV INTERNATIONAL</h3>
                    <p>commercial leasing and consultant</p>
                    <ul>
                      <li>
                        <a href="/#" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="/#" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/#" target="_blank">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="/#" target="_blank">
                          <i className="bx bxl-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom">
                    <ul>
                      <li>
                        <a href="/#">
                          {" "}
                          A-1 Opposite Mahindra Aura, New Palam Vihar Sector
                          110A Gurugram
                        </a>
                      </li>
                      <li>
                        <i className="bx bx-mail-send" />
                        <a href="mailto:hello@snift.com">hipvtltd@gmail.com</a>
                      </li>
                      <li>
                        <i className="bx bx-phone-call" />
                        <a href="tel:+123456789">9999408076</a>
                        {"  /  "}
                        <a href="tel:+123456789">9999408076</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <section className="blog-area pt-20 pb-70">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-sm-6 col-lg-6">
                          <div className="blog-item">
                            <div className="top">
                              <a href="blog-details.html">
                                <img
                                  src="assets/images/blog/blog1.jpg"
                                  alt="Blog"
                                />
                              </a>
                            </div>
                            <div className="bottom">
                              <span className="tips">Tips &amp; Trick</span>
                              <h3>
                                <a href="blog-details.html">
                                  Architecture Is Not Based On Concrete And
                                  Steel
                                </a>
                              </h3>
                              <ul>
                                <li>
                                  <i className="bx bxs-user" />
                                  <span>By:</span>
                                  <a href="/#">Admin</a>
                                </li>
                                <li>
                                  <i className="bx bx-calendar" />
                                  <span>October 19, 2021</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                          <div className="blog-item">
                            <div className="top">
                              <a href="blog-details.html">
                                <img
                                  src="assets/images/blog/blog2.jpg"
                                  alt="Blog"
                                />
                              </a>
                            </div>
                            <div className="bottom">
                              <span className="tips">Tips &amp; Trick</span>
                              <h3>
                                <a href="blog-details.html">
                                  A Digital Prescription For The Pharma Industry{" "}
                                </a>
                              </h3>
                              <ul>
                                <li>
                                  <i className="bx bxs-user" />
                                  <span>By:</span>
                                  <a href="/#">Admin</a>
                                </li>
                                <li>
                                  <i className="bx bx-calendar" />
                                  <span>October 20, 2021</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                          <div className="blog-item">
                            <div className="top">
                              <a href="blog-details.html">
                                <img
                                  src="assets/images/blog/blog3.jpg"
                                  alt="Blog"
                                />
                              </a>
                            </div>
                            <div className="bottom">
                              <span className="tips">Tips &amp; Trick</span>
                              <h3>
                                <a href="blog-details.html">
                                  Harvest Great Ideas From Your Company’s Best
                                  Assets
                                </a>
                              </h3>
                              <ul>
                                <li>
                                  <i className="bx bxs-user" />
                                  <span>By:</span>
                                  <a href="/#">Admin</a>
                                </li>
                                <li>
                                  <i className="bx bx-calendar" />
                                  <span>October 21, 2021</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                          <div className="blog-item">
                            <div className="top">
                              <a href="blog-details.html">
                                <img
                                  src="assets/images/blog/blog4.jpg"
                                  alt="Blog"
                                />
                              </a>
                            </div>
                            <div className="bottom">
                              <span className="tips">Tips &amp; Trick</span>
                              <h3>
                                <a href="blog-details.html">
                                  Retail Banks Wake Up To Digital Lending This
                                  Year
                                </a>
                              </h3>
                              <ul>
                                <li>
                                  <i className="bx bxs-user" />
                                  <span>By:</span>
                                  <a href="/#">Admin</a>
                                </li>
                                <li>
                                  <i className="bx bx-calendar" />
                                  <span>October 22, 2021</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                          <div className="blog-item">
                            <div className="top">
                              <a href="blog-details.html">
                                <img
                                  src="assets/images/blog/blog5.jpg"
                                  alt="Blog"
                                />
                              </a>
                            </div>
                            <div className="bottom">
                              <span className="tips">Tips &amp; Trick</span>
                              <h3>
                                <a href="blog-details.html">
                                  Strategic And Commercial Approach With Issues
                                </a>
                              </h3>
                              <ul>
                                <li>
                                  <i className="bx bxs-user" />
                                  <span>By:</span>
                                  <a href="/#">Admin</a>
                                </li>
                                <li>
                                  <i className="bx bx-calendar" />
                                  <span>October 23, 2021</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                          <div className="blog-item">
                            <div className="top">
                              <a href="blog-details.html">
                                <img
                                  src="assets/images/blog/blog6.jpg"
                                  alt="Blog"
                                />
                              </a>
                            </div>
                            <div className="bottom">
                              <span className="tips">Tips &amp; Trick</span>
                              <h3>
                                <a href="blog-details.html">
                                  Within The Construction Industry As Their
                                  Overdraft
                                </a>
                              </h3>
                              <ul>
                                <li>
                                  <i className="bx bxs-user" />
                                  <span>By:</span>
                                  <a href="/#">Admin</a>
                                </li>
                                <li>
                                  <i className="bx bx-calendar" />
                                  <span>October 24, 2021</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}
