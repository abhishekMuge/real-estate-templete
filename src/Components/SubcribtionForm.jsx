import React, { Component } from "react";

export default class SubcribtionForm extends Component {
  render() {
    return (
      <div>
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
    );
  }
}
