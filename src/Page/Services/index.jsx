import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function Service() {
  return (
    <div>
      <div>
        {/* Page Title */}
        <div className="page-title-area title-bg-two">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="title-content">
                  <h2>Service Details</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span>Service Details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title */}
        {/* Service Details */}
        <div className="service-details-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="details-item">
                  <OwlCarousel
                    className="service-details-slider owl-theme"
                    loop
                    nav={false}
                    items={1}
                  >
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details1.jpg"
                        alt="Service"
                      />
                    </div>
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details2.jpg"
                        alt="Service"
                      />
                    </div>
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details3.jpg"
                        alt="Service"
                      />
                    </div>
                  </OwlCarousel>
                  <h3>Advisory {"&"} Transaction Services</h3>
                  <p>
                    We deliver customized solutions for occupiers – whether on a
                    portfolio or one-off basis – and help investors to position
                    their properties for success
                  </p>
                  <div className="list">
                    <div className="left">
                      <ul>
                        <li>
                          <i className="bx bx-check" />
                          Advisory {"&"} Transaction Services | Investor Leasing
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <i className="bx bx-check" />
                          Advisory {"&"} Transaction Services | Occupier
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details4.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details5.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-item">
                  <OwlCarousel
                    className="service-details-slider owl-theme"
                    loop
                    nav={false}
                    items={1}
                  >
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details1.jpg"
                        alt="Service"
                      />
                    </div>
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details2.jpg"
                        alt="Service"
                      />
                    </div>
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details3.jpg"
                        alt="Service"
                      />
                    </div>
                  </OwlCarousel>
                  <h3>Capital Markets</h3>
                  <p>
                    We provide unparalleled knowledge and experience for better
                    real estate performance. Through investment sales, debt and
                    structured finance, entity level corporate finance and
                    investment banking, we align deep insight of real estate
                    assets with unrivaled access to global capital sources
                    across all asset types
                  </p>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details4.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details5.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-item">
                  <OwlCarousel
                    className="service-details-slider owl-theme"
                    loop
                    nav={false}
                    items={1}
                  >
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details1.jpg"
                        alt="Service"
                      />
                    </div>
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details2.jpg"
                        alt="Service"
                      />
                    </div>
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details3.jpg"
                        alt="Service"
                      />
                    </div>
                  </OwlCarousel>
                  <h3>Global Workplace Solutions</h3>
                  <p>
                    We deliver industry-leading facilities and project
                    management, transaction and portfolio services, and
                    consulting that drive bottom-line impact and streamlined
                    workplaces across all asset types.
                  </p>
                  <div className="list">
                    <div className="left">
                      <ul>
                        <li>
                          <i className="bx bx-check" />
                          Enterprise Facilities Management
                        </li>
                        <br />
                        <li>
                          <i className="bx bx-check" />
                          Workplace
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <i className="bx bx-check" />
                          Enterprise Facilities Management
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details4.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details5.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-item">
                  <OwlCarousel
                    className="service-details-slider owl-theme"
                    loop
                    nav={false}
                    items={1}
                  >
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details1.jpg"
                        alt="Service"
                      />
                    </div>
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details2.jpg"
                        alt="Service"
                      />
                    </div>
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details3.jpg"
                        alt="Service"
                      />
                    </div>
                  </OwlCarousel>
                  <h3>Property Management</h3>
                  <p>
                    We help building owners enhance the value of their
                    investments. With comprehensive management strategies and
                    property management services across all property types, we
                    streamline operations, reduce costs, minimize risk and drive
                    quantifiable financial performance.
                  </p>
                  <div className="list">
                    <div className="left">
                      <ul>
                        <li>
                          <i className="bx bx-check" />
                          Sustainability
                        </li>
                        <br />
                      </ul>
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <i className="bx bx-check" />
                          Property Mangement
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details4.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details5.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-item">
                  <OwlCarousel
                    className="service-details-slider owl-theme"
                    loop
                    nav={false}
                    items={1}
                  >
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details1.jpg"
                        alt="Service"
                      />
                    </div>
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details2.jpg"
                        alt="Service"
                      />
                    </div>
                    <div className="slider-item item">
                      <img
                        src="assets/images/services/details3.jpg"
                        alt="Service"
                      />
                    </div>
                  </OwlCarousel>
                  <h3>Residential</h3>
                  <p>
                    We offer residential real estate services around the globe,
                    including investment advisement, property development,
                    project marketing, leasing, sales and valuation.
                  </p>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details4.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details5.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-item">
                  <h3>Valuation {"&"} Advisory Services</h3>
                  <p>
                    Leveraging the industry’s most powerful valuations platform,
                    we offer clients uniquely informed perspectives on global
                    real estate valuations and help them make the right
                    decisions about their investment strategies. Learn more
                  </p>
                </div>
                <div className="details-item">
                  <h3>Services for Investors</h3>
                  <p>Services for property owners and investors worldwide.</p>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details4.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="img">
                        <img
                          src="assets/images/services/details5.jpg"
                          alt="Details"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="common-details-contact">
                  <h3>Contact Us</h3>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            id="your-message"
                            rows={8}
                            className="form-control"
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn common-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
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
                  <div className="tags widget-item">
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
        </div>
        {/* End Service Details */}
        {/* Subscribe */}
        <div className="subscribe-area ptb-100">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">Subscribe To Our Newsletter</span>
              <h2>
                Sign Up For Newsletter And Get The Latest News And Updates
              </h2>
            </div>
            <div className="subscribe-content">
              <form className="newsletter-form" data-toggle="validator">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="EMAIL"
                  required
                  autoComplete="off"
                />
                <button className="btn common-btn" type="submit">
                  Subscribe
                  <i className="bx bxs-paper-plane" />
                </button>
                <div id="validator-newsletter" className="form-result" />
              </form>
              <img src="assets/images/subscribe-main1.png" alt="Subscribe" />
            </div>
          </div>
        </div>
        {/* End Subscribe */}
      </div>
    </div>
  );
}
