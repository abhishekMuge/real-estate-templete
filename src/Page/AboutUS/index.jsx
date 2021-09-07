import React from "react";

export default function AboutUs() {
  return (
    <div>
      {/* Page Title */}
      <div className="page-title-area title-bg-one">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-content">
                <h2>About Us</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <span>About Us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title */}
      <div>
        {/* About */}
        <div className="about-area pt-100 pb-70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-img">
                  <img src="assets/images/about-main1.jpg" alt="About" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-title">About Us</span>
                    <h2>
                      We Have Long Experience And Get Better Result From Lower
                      Fees
                    </h2>
                    <p className="about-p">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled
                    </p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English
                    </p>
                  </div>
                  <ul>
                    <li>
                      <h3>20</h3>
                      <span>Years Experience</span>
                    </li>
                    <li>
                      <img src="assets/images/about-main2.jpg" alt="About" />
                      <button
                        className="js-modal-btn"
                        data-video-id="Ynr4o0eOjdg"
                      >
                        <i className="bx bx-play" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About */}
        {/* Services */}
        <section className="services-area two pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="services-item">
                  <i className="flaticon-search" />
                  <h3>
                    <a href="service-details.html">Find Home First</a>
                  </h3>
                  <p>
                    LorLorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod quia itaque rem cum quo? Eveniet animi sunt cum
                    distinctio
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="services-item">
                  <i className="flaticon-building" />
                  <h3>
                    <a href="service-details.html">Ready Flat For Rent</a>
                  </h3>
                  <p>
                    LorLorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod quia itaque rem cum quo? Eveniet animi sunt cum
                    distinctio
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="services-item">
                  <i className="flaticon-real-estate" />
                  <h3>
                    <a href="service-details.html">Reach Buyers Faster</a>
                  </h3>
                  <p>
                    LorLorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod quia itaque rem cum quo? Eveniet animi sunt cum
                    distinctio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services */}
        {/* Provide */}
        <div className="provide-area two pb-70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="provide-content">
                  <div className="section-title">
                    <span className="sub-title">Why Choose Us</span>
                    <h2>We Are Always Dedicated To Do Our Work</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque reiciendis voluptatem sint a ea, quis tempore magni
                      quasi nemo, obcaecati similique non nihil alias culpa
                      ducimus. Quia placeat officiis rem
                    </p>
                  </div>
                  <div className="inner">
                    <div className="left">
                      <ul>
                        <li>
                          <i className="flaticon-world-grid" />
                          <h3>Worldwide Company</h3>
                        </li>
                        <li>
                          <i className="flaticon-life-insurance" />
                          <h3>Property Insurance</h3>
                        </li>
                        <li>
                          <i className="flaticon-commission" />
                          <h3>Lowest Commission</h3>
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <i className="flaticon-real-estate-agent" />
                          <h3>Experience Agent</h3>
                        </li>
                        <li>
                          <i className="flaticon-fast-delivery" />
                          <h3>Fastest Service</h3>
                        </li>
                        <li>
                          <i className="flaticon-sales" />
                          <h3>Largest Real Estate</h3>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="provide-img">
                  <img src="assets/images/provide-main.jpg" alt="Provide" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Provide */}
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
