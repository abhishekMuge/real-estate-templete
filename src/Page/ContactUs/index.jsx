import React from "react";

export default function ContactMe() {
  return (
    <div>
      <div>
        {/* Page Title */}
        <div className="page-title-area title-bg-five">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="title-content">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span>Contact</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title */}
        {/* Contact */}
        <div className="contact-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-8">
                <form id="contactForm">
                  <div className="section-title">
                    <h2>Get In Touch</h2>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required
                          data-error="Please enter your email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          placeholder="Phone"
                          required
                          data-error="Please enter your number"
                          className="form-control"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          placeholder="Subject"
                          required
                          data-error="Please enter your subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={8}
                          placeholder="Write message"
                          required
                          data-error="Write your message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault1"
                          >
                            I accept all{" "}
                            <a href="terms-conditions.html">
                              Terms &amp; Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center">
                        <button type="submit" className="btn common-btn">
                          Send Message
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="contact-info">
                  <h3>Contact Information:</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae laboriosam ratione dignissimos maxime
                  </p>
                  <ul className="info">
                    <li>
                      <i className="bx bx-current-location" />
                      <a href="/#">2750 Quadra Street, Victoria, Canada</a>
                      <a href="/#">345-659 Birmingham Street, England</a>
                    </li>
                    <li>
                      <i className="bx bx-mail-send" />
                      <a href="mailto:hello@snifty.com">hello@snifty.com</a>
                      <a href="mailto:info@snifty.com">info@snifty.com</a>
                    </li>
                    <li>
                      <i className="bx bx-phone-call" />
                      <a href="tel:+2534452431">+253-445-2431</a>
                      <a href="tel:+7524587571">+752-458-7571</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact */}
        {/* Map */}
        <div className="map-area">
          <div className="container-fluid p-0">
            <iframe
              title="Address Location map"
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59843174.53779285!2d62.17507173408571!3d23.728204508550363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sen!2sbd!4v1609758826622!5m2!1sen!2sbd"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
        {/* End Map */}
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
