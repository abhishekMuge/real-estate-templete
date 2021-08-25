import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/images/logo.png";
export default function Navbar() {
  return (
    <div>
      <div className="navbar-area sticky-top">
        {/* Menu For Mobile Device */}
        <div className="mobile-nav mean-container">
          <div className="mean-bar">
            <a
              href="#nav"
              className="meanmenu-reveal"
              style={{ background: "", color: "", right: 0, left: "auto" }}
            >
              <span>
                <span>
                  <span />
                </span>
              </span>
            </a>

            {/* <a
              href="#nav"
              className="meanmenu-reveal meanclose"
              style={{
                right: "0px",
                left: "auto",
                textAlign: "center",
                textIndent: "0px",
                fontSize: "18px",
              }}
            >
              X
            </a> */}

            <nav className="mean-nav">
              <ul className="navbar-nav" style={{ display: "none" }}>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle active">
                    Home <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li className="nav-item">
                      <a href="index.html" className="nav-link active">
                        Home Demo One
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Pages <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        Users <i className="bx bx-chevron-down" />
                      </a>
                      <ul className="dropdown-menu" style={{ display: "none" }}>
                        <li className="nav-item">
                          <a href="login.html" className="nav-link">
                            Login
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="register.html" className="nav-link">
                            Register
                          </a>
                        </li>
                      </ul>
                      <a
                        className="mean-expand"
                        href="#"
                        style={{ fontSize: "18px" }}
                      >
                        +
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="team.html" className="nav-link">
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="portfolio.html" className="nav-link">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="faq.html" className="nav-link">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="coming-soon.html" className="nav-link">
                        Coming Soon
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="404.html" className="nav-link">
                        404 Error Page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="privacy-policy.html" className="nav-link">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="terms-conditions.html" className="nav-link">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Services <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li className="nav-item">
                      <a href="services.html" className="nav-link">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="service-details.html" className="nav-link">
                        Service Details
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Properties <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li className="nav-item">
                      <a href="properties.html" className="nav-link">
                        Properties
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="property-right-sidebar.html"
                        className="nav-link"
                      >
                        Property Right Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="property-left-sidebar.html" className="nav-link">
                        Property Left Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="property-details.html" className="nav-link">
                        Property Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="apartments.html" className="nav-link">
                        Apartments
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Blog <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li className="nav-item">
                      <a href="blog.html" className="nav-link">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-left-sidebar.html" className="nav-link">
                        Blog Left Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-right-sidebar.html" className="nav-link">
                        Blog Right Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-details.html" className="nav-link">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item right-nav">
                  <a href="#" type="button" className="nav-link">
                    Tell Me your needs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" type="button" className="nav-link">
                    Sales Or Rent
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    More <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li className="nav-item">
                      <a href="index.html" className="nav-link active">
                        Wishlist
                      </a>
                    </li>
                    <li className="nav-item mean-last">
                      <a href="index.html" className="nav-link active">
                        Camparison
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <a href="index.html" className="logo">
            <img src="assets/images/logo-two.png" alt="Logo" />
          </a>
        </div>

        {/* Menu For Desktop Device */}
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle active">
                      Home <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/" className="nav-link active">
                          Home Demo One
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      Pages <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Users <i className="bx bx-chevron-down" />
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="login.html" className="nav-link">
                              Login
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="register.html" className="nav-link">
                              Register
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="team.html" className="nav-link">
                          Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="portfolio.html" className="nav-link">
                          Portfolio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">
                          Coming Soon
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="404.html" className="nav-link">
                          404 Error Page
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="terms-conditions.html" className="nav-link">
                          Terms &amp; Conditions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/post-property" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      Services <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="services.html" className="nav-link">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="service-details.html" className="nav-link">
                          Service Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      Properties <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="properties.html" className="nav-link">
                          Properties
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="property-right-sidebar.html"
                          className="nav-link"
                        >
                          Property Right Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="property-left-sidebar.html"
                          className="nav-link"
                        >
                          Property Left Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="property-details.html" className="nav-link">
                          Property Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="apartments.html" className="nav-link">
                          Apartments
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      Blog <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog.html" className="nav-link">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-left-sidebar.html" className="nav-link">
                          Blog Left Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-right-sidebar.html" className="nav-link">
                          Blog Right Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-details.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item right-nav">
                    <a href="#" type="button" className="nav-link">
                      Tell Me your needs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" type="button" className="nav-link">
                      Sales Or Rent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      More <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link active">
                          Wishlist
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index.html" className="nav-link active">
                          Camparison
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
