import React, { Component } from "react";

export default class Property extends Component {
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
                      <span>Property Page</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title */}

        {/* Property */}
        <section className="properties-area three pt-100 pb-70">
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
                      <div className="bottom d-flex justify-content-between">
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
                      <div className="bottom d-flex justify-content-between">
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
                      <div className="bottom">
                        <span>$10,000.00/Month</span>
                        <h3>
                          <a href="property-details.html">Extension Haven</a>
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
                      <div className="bottom">
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
                      <div className="bottom">
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
                      <div className="bottom">
                        <span>From $7,000.00</span>
                        <h3>
                          <a href="property-details.html">Natural Cottage</a>
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
              <div className="col-lg-4">
                <div className="widget-area">
                  <div className="search widget-item">
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Here..."
                      />
                      <button type="submit" className="btn">
                        <i className="bx bx-search" />
                      </button>
                    </form>
                  </div>
                  <div className="categories widget-item">
                    <h3>Categories</h3>
                    <ul>
                      <li>
                        <a href="/#">Home For Sale</a>
                      </li>
                      <li>
                        <a href="/#">Home On Lease</a>
                      </li>
                      <li>
                        <a href="/#">Matching Buyer</a>
                      </li>
                      <li>
                        <a href="/#">Home For Buy</a>
                      </li>
                      <li>
                        <a href="/#">Home For Mortgage</a>
                      </li>
                      <li>
                        <a href="/#">Home For Rent</a>
                      </li>
                    </ul>
                  </div>
                  <div className="popular widget-item">
                    <h3>Popular Properties</h3>
                    <div className="inner">
                      <ul className="align-items-center">
                        <li>
                          <img
                            src="assets/images/services/details6.jpg"
                            alt="Details"
                          />
                        </li>
                        <li>
                          <h4>
                            <a href="/#">Extension Cottage Villa</a>
                          </h4>
                          <a className="location" href="/#">
                            <i className="bx bx-current-location" />
                            View, New York
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="inner">
                      <ul className="align-items-center">
                        <li>
                          <img
                            src="assets/images/services/details7.jpg"
                            alt="Details"
                          />
                        </li>
                        <li>
                          <h4>
                            <a href="/#">Sag Harbor Cottage And Resort</a>
                          </h4>
                          <a className="location" href="/#">
                            <i className="bx bx-current-location" />
                            6B, New York
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="inner">
                      <ul className="align-items-center">
                        <li>
                          <img
                            src="assets/images/services/details8.jpg"
                            alt="Details"
                          />
                        </li>
                        <li>
                          <h4>
                            <a href="/#">Construction Industry And Office</a>
                          </h4>
                          <a className="location" href="/#">
                            <i className="bx bx-current-location" />
                            6B, 1st View
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tags two widget-item">
                    <h3>Tags</h3>
                    <ul>
                      <li>
                        <a href="/#">Apartment</a>
                      </li>
                      <li>
                        <a href="/#">New Properties</a>
                      </li>
                      <li>
                        <a href="/#">House</a>
                      </li>
                      <li>
                        <a href="/#">Villa</a>
                      </li>
                      <li>
                        <a href="/#">Office</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Property */}
      </div>
    );
  }
}
