import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assests/images/logo.png";
export default function Navbar() {
  const [Mmenu, setMmenu] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  return (
    <div>
      <div className="navbar-area sticky-top">
        {/* Menu For Mobile Device */}
        <div className="mobile-nav mean-container">
          <div className="mean-bar">
            <a
              href="/#"
              className="meanmenu-reveal"
              style={{ background: "", color: "", right: 0, left: "auto" }}
              onClick={() => {
                setMmenu(!Mmenu);
              }}
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
              <ul
                className="navbar-nav"
                style={{ display: Mmenu ? "block" : "none" }}
              >
                <li className="nav-item">
                  <a href="/#" className="nav-link dropdown-toggle active">
                    Home <i className="bx bx-chevron-down" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About Us
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => setOpenMenu("services")}
                >
                  <a href="/#" className="nav-link">
                    Services
                    <i className="bx bx-chevron-down" />
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{
                      display: openMenu === "services" ? "block" : "none",
                    }}
                  >
                    <li className="nav-item">
                      <a href="/#" className="nav-link">
                        Business Lines
                        <i className="bx bx-chevron-down" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#" className="nav-link">
                        Industries {"&"} Specialities
                        <i className="bx bx-chevron-down" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#" className="nav-link">
                        Services for Investors
                        <i className="bx bx-chevron-down" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#" className="nav-link">
                        Services for Occupiers
                        <i className="bx bx-chevron-down" />
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="/#"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => setOpenMenu("property")}
                >
                  <a href="/#" className="nav-link dropdown-toggle">
                    Properties <i className="bx bx-chevron-down" />
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{
                      display: openMenu === "property" ? "block" : "none",
                    }}
                  >
                    <li className="nav-item">
                      <Link to="/properties" className="nav-link">
                        Properties
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/property-details" className="nav-link">
                        Property Details
                      </Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="/#"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#" className="nav-link dropdown-toggle">
                    Blog <i className="bx bx-chevron-down" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item right-nav">
                  <a href="/#" type="button" className="nav-link">
                    Tell Me your needs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#" type="button" className="nav-link">
                    Sales Or Rent
                  </a>
                </li>
                <li className="nav-item" onClick={() => setOpenMenu("more")}>
                  <a href="/#" className="nav-link dropdown-toggle">
                    More <i className="bx bx-chevron-down" />
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{ display: openMenu === "more" ? "block" : "none" }}
                  >
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
                    href="/#"
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
            <nav
              className="navbar navbar-expand-md navbar-light d-flex justify-content-center"
              style={{
                position: "fixed",
                width: "100%",
              }}
            >
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav text-center">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about-us" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      Services
                      <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          Business Lines
                          <i className="bx bx-chevron-down" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          style={{
                            overflowY: "scroll",
                          }}
                        >
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Advisory {"&"} Transaction Services
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Capital Markets
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Global Workplace Solutions
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Property Management
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Residential
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Valuation {"&"} Advisory Services
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          Industries {"&"} Specialities
                          <i className="bx bx-chevron-down" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          style={{
                            overflowY: "scroll",
                          }}
                        >
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Office
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Retail
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Industrial {"&"} Logistics
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Alternative Invesments
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Data Centers
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Financial Services
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Government Practice
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Healthcare
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Life Sciences
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Hostel
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Residential
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Sustainability
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Flexible Workspace
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          Services for Investors
                          <i className="bx bx-chevron-down" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          style={{
                            overflowY: "scroll",
                          }}
                        >
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Capital Markets
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Consulting
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Host
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Investment Accounting {"&"}
                              <br />
                              Reporting Solutions
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Investment Risk Monitoring
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Leasing {"&"} Advisory
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Masterplanning
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Property Management
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Valuation {"&"} Advisory Services
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Hostel
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Residential
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Sustainability
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Flexible Workspace
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          Services for Occupiers
                          <i className="bx bx-chevron-down" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          style={{
                            overflowY: "scroll",
                          }}
                        >
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Consulting
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Enterprise Facilities Management
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Host
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Leasing {"&"} Advisory
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Portfolio Services
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Project Management
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Transaction Management
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Valuation {"&"} Advisory Services
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/#" className="nav-link">
                              Workplace
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/#" class="nav-link dropdown-toggle">
                      Properties <i class="bx bx-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/properties" className="nav-link">
                          Properties
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/property-details" className="nav-link">
                          Property Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/#" class="nav-link dropdown-toggle">
                      Blog <i class="bx bx-chevron-down"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/blogs" className="nav-link">
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/blog-details" className="nav-link">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item right-nav">
                    <Link
                      to="/tell-me-your-needs"
                      type="button"
                      className="nav-link"
                    >
                      Tell Me your needs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/#" type="button" className="nav-link">
                      Sales Or Rent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link dropdown-toggle">
                      More <i className="bx bx-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/comparison" className="nav-link ">
                          Comparison
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/wishlist" className="nav-link active">
                          Wishlist
                        </Link>
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
