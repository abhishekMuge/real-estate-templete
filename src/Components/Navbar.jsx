import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assests/images/logo.png";
export default function Navbar() {
  const [Mmenu, setMmenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
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
                <li className="nav-item">
                  <a href="/#" className="nav-link dropdown-toggle">
                    Services <i className="bx bx-chevron-down" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#" className="nav-link dropdown-toggle">
                    Properties <i className="bx bx-chevron-down" />
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
                <li className="nav-item" onClick={() => setOpenMenu(!openMenu)}>
                  <a href="/#" className="nav-link dropdown-toggle">
                    More <i className="bx bx-chevron-down" />
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{ display: openMenu ? "block" : "none" }}
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
                    <Link to="/service" className="nav-link">
                      Services
                    </Link>
                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          Service Details
                        </a>
                      </li>
                    </ul> */}
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
                      {/* <li className="nav-item">
                        <a href="/#" className="nav-link">
                          Apartments
                        </a>
                      </li> */}
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
                    <a href="/#" type="button" className="nav-link">
                      Tell Me your needs
                    </a>
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
                        <a href="/#" className="nav-link active">
                          Wishlist
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/#" className="nav-link active">
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
