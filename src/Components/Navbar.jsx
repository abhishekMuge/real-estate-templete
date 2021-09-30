import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { animated, useTransition, config } from "react-spring";

export default function Navbar() {
  const [Mmenu, setMmenu] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  return (
    <div>
      <div className="navbar-area sticky-top">
        {/* Menu For Mobile Device */}
        <MemorizedNav />

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
                  <li className="nav-item">
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
                        <Link to="/wishlist" className="nav-link">
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

export function MobileNav() {
  const [Mmenu, setMmenu] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  const transitions = useTransition(Mmenu, {
    from: { opacity: 0, transform: "translateY(-100px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-10000px)" },
    reverse: Mmenu,
    config: config.molasses,
    // onRest: () => setMmenu(!Mmenu),
  });

  const showMenu = (e) => {
    e.preventDefault();
    setMmenu(!Mmenu);
  };

  return (
    <div className="mobile-nav mean-container">
      <div className="mean-bar">
        <a
          href="/#"
          className="meanmenu-reveal"
          style={{ background: "", color: "", right: 0, left: "auto" }}
          onClick={showMenu}
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

        {transitions((styles, item, key) => {
          return (
            item && (
              <animated.nav className="mean-nav" style={styles} key={key}>
                <ul
                  className="navbar-nav"
                  // style={{ display: Mmenu ? "block" : "none" }}
                >
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home <i className="bx bx-chevron-down" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about-us" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setOpenMenu("services")}
                  >
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
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
                        <Link to="/service" className="nav-link">
                          Business Lines
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/service" className="nav-link">
                          Industries {"&"} Specialities
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/service" className="nav-link">
                          Services for Investors
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/service" className="nav-link">
                          Services for Occupiers
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
                  <li
                    className="nav-item"
                    onClick={() => setOpenMenu("property")}
                  >
                    <a
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
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
                    <Link to="/blogs" className="nav-link dropdown-toggle">
                      Blog <i className="bx bx-chevron-down" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item right-nav">
                    <Link to="/tell-me-your-needs" className="nav-link">
                      Tell Me your needs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#" className="nav-link">
                      Sales Or Rent
                    </Link>
                  </li>
                  <li className="nav-item" onClick={() => setOpenMenu("more")}>
                    <a
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-animateda dropdown-toggle"
                    >
                      More <i className="bx bx-chevron-down" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      style={{
                        display: openMenu === "more" ? "block" : "none",
                      }}
                    >
                      <li className="nav-item">
                        <Link to="/wishlist" className="nav-link active">
                          Wishlist
                        </Link>
                      </li>
                      <li className="nav-item mean-last">
                        <Link to="/comparison" className="nav-link active">
                          Camparison
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
                </ul>
              </animated.nav>
            )
          );
        })}
      </div>
      <a href="index.html" className="logo">
        <img src="assets/images/logo-two.png" alt="Logo" />
      </a>
    </div>
  );
}

export const MemorizedNav = React.memo(MobileNav);
