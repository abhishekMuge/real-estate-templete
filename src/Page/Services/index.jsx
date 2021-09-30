import React from "react";
import BGImg from "../../assests/images/services/details1.jpg";
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
              <div className="col-lg-12">
                <div className="details-item">
                  <OwlCarousel
                    className="service-details-slider owl-theme"
                    loop
                    nav={false}
                    items={1}
                  >
                    <div className="slider-item item">
                      <img src={BGImg} alt="Service" />
                    </div>
                    <div className="slider-item item">
                      <img src={BGImg} alt="Service" />
                    </div>
                    <div className="slider-item item">
                      <img src={BGImg} alt="Service" />
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
