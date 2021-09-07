import React from "react";

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-logo">
                  <div className="top">
                    <a className="logo" href="index.html">
                      <img src="assets/images/logo.png" alt="Logo" />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet perspiciatis sit voluptas quae
                    </p>
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
                        <a href="/#" target="_blank">
                          <i className="bx bxl-instagram" />
                          <img
                            src="assets/images/instagram1.jpg"
                            alt="Instagram"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#" target="_blank">
                          <i className="bx bxl-instagram" />
                          <img
                            src="assets/images/instagram2.jpg"
                            alt="Instagram"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#" target="_blank">
                          <i className="bx bxl-instagram" />
                          <img
                            src="assets/images/instagram3.jpg"
                            alt="Instagram"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-links">
                  <h3>Quick Links</h3>
                  <div className="top">
                    <div className="left">
                      <ul>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="services.html">Our Services</a>
                        </li>
                        <li>
                          <a href="properties.html">Properties</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="/#">Buy Home</a>
                        </li>
                        <li>
                          <a href="/#">Sell Or Rent</a>
                        </li>
                        <li>
                          <a href="apartments.html">Apartments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bottom">
                    <h4>Popular Search</h4>
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
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-blog">
                  <h3>News And Blog</h3>
                  <div className="inner">
                    <ul className="align-items-center">
                      <li>
                        <img src="assets/images/footer1.jpg" alt="Blog" />
                      </li>
                      <li>
                        <a href="/#">Retail Banks Wake Up To Digital</a>
                        <span>01 June 2021</span>
                      </li>
                    </ul>
                  </div>
                  <div className="inner">
                    <ul className="align-items-center">
                      <li>
                        <img src="assets/images/footer2.jpg" alt="Blog" />
                      </li>
                      <li>
                        <a href="/#">Strategic And Commercial</a>
                        <span>02 June 2021</span>
                      </li>
                    </ul>
                  </div>
                  <div className="inner">
                    <ul className="align-items-center">
                      <li>
                        <img src="assets/images/footer3.jpg" alt="Blog" />
                      </li>
                      <li>
                        <a href="/#">Our Latest Furniture Of Apartment</a>
                        <span>03 June 2021</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-contact">
                  <h3>Contact Information</h3>
                  <div className="top">
                    <ul>
                      <li>
                        <i className="bx bx-current-location" />
                        <a href="/#">300 BR Road, Nevis, USA</a>
                        <span>Meet Us In Office</span>
                      </li>
                      <li>
                        <i className="bx bx-mail-send" />
                        <a href="mailto:hello@snifty.com">hello@snifty.com</a>
                        <span>Drop Us A Line</span>
                      </li>
                      <li>
                        <i className="bx bxs-hourglass" />
                        <p>9 AM - 5 PM (Sun-Thur)</p>
                        <span>Office Hour</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom">
                    <i className="bx bx-phone-call" />
                    <a href="tel:+123456789">+123-456-789</a>
                    <span>Make A Call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>
              Copyright <i className="bx bx-copyright" />
              2021 Snifty. Designed By
              <a
                href="https://hibootstrap.com/"
                target="_blank"
                rel="noreferrer"
              >
                HiBootstrap
              </a>
            </p>
          </div>
        </div>
      </footer>
      {/* End Footer */}
      {/* Go Top */}
      <div className="go-top">
        <i className="bx bxs-arrow-to-top" />
        <i className="bx bxs-arrow-to-top" />
      </div>
      {/* End Go Top */}
    </div>
  );
}
