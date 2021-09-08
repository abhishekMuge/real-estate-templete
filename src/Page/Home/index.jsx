import React, { Component } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Banner from "../../Components/Banner";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      amenities: {},
      tagLine: {},
      property_type: {},
    };
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://ybxt58cet4.execute-api.ap-south-1.amazonaws.com/Stage/search-data"
    );
    console.log(response.data);
    this.setState({
      amenities: response.data[0],
      tagLine: response.data[1],
      property_type: response.data[3],
    });
  }
  render() {
    return (
      <div clasName="container">
        <div className="row">
          <Banner
            tagLine={this.state.tagLine}
            amenities={this.state.amenities}
            propertySearch={this.state.property_type}
          />
        </div>
        {/* Apartment start here */}
        <section className="apartment-area pt-100 pb-70">
          <div className="container-fluid">
            <div className="section-title">
              <span className="sub-title">Featured Apartment For You</span>
              <h2>Recommended Apartment For You</h2>
            </div>
            <OwlCarousel
              className="apartment-slider owl-theme"
              loop
              margin={10}
              nav
              dots={false}
              responsive={{
                0: {
                  items: 1,
                },
                768: {
                  items: 3,
                },
                992: {
                  items: 4,
                },
              }}
            >
              <div className="apartment-item item">
                <img
                  src="assets/images/apartment/apartment1.jpg"
                  alt="Apartment"
                />
                <div className="inner">
                  <h3>
                    <a href="property-details.html">Apartment With Furniture</a>
                  </h3>
                  <span>$12,000.00</span>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                  </ul>
                </div>
                <div className="property-btn">
                  <a className="common-btn" href="property-details.html">
                    View Details
                    <i className="bx bx-chevron-right" />
                  </a>
                </div>
              </div>
              <div className="apartment-item item">
                <img
                  src="assets/images/apartment/apartment2.jpg"
                  alt="Apartment"
                />
                <div className="inner">
                  <h3>
                    <a href="property-details.html">Modern Apartment</a>
                  </h3>
                  <span>$13,000.00</span>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                  </ul>
                </div>
                <div className="property-btn">
                  <a className="common-btn" href="property-details.html">
                    View Details
                    <i className="bx bx-chevron-right" />
                  </a>
                </div>
              </div>
              <div className="apartment-item item">
                <img
                  src="assets/images/apartment/apartment3.jpg"
                  alt="Apartment"
                />
                <div className="inner">
                  <h3>
                    <a href="property-details.html">Elegant Studio Flat</a>
                  </h3>
                  <span>$14,000.00</span>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                  </ul>
                </div>
                <div className="property-btn">
                  <a className="common-btn" href="property-details.html">
                    View Details
                    <i className="bx bx-chevron-right" />
                  </a>
                </div>
              </div>
              <div className="apartment-item item">
                <img
                  src="assets/images/apartment/apartment4.jpg"
                  alt="Apartment"
                />
                <div className="inner">
                  <h3>
                    <a href="property-details.html">The Tenement House</a>
                  </h3>
                  <span>$15,000.00</span>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                  </ul>
                </div>
                <div className="property-btn">
                  <a className="common-btn" href="property-details.html">
                    View Details
                    <i className="bx bx-chevron-right" />
                  </a>
                </div>
              </div>
              <div className="apartment-item item">
                <img
                  src="assets/images/apartment/apartment5.jpg"
                  alt="Apartment"
                />
                <div className="inner">
                  <h3>
                    <a href="property-details.html">The Royal House</a>
                  </h3>
                  <span>$16,000.00</span>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                  </ul>
                </div>
                <div className="property-btn">
                  <a className="common-btn" href="property-details.html">
                    View Details
                    <i className="bx bx-chevron-right" />
                  </a>
                </div>
              </div>
              <div className="apartment-item item">
                <img
                  src="assets/images/apartment/apartment6.jpg"
                  alt="Apartment"
                />
                <div className="inner">
                  <h3>
                    <a href="property-details.html">Apartment With Sofa</a>
                  </h3>
                  <span>$17,000.00</span>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                  </ul>
                </div>
                <div className="property-btn">
                  <a className="common-btn" href="property-details.html">
                    View Details
                    <i className="bx bx-chevron-right" />
                  </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        {/* apartment ends here */}
        {/* Choose */}
        <section className="choose-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">Why Choose Us</span>
              <h2>We Offer Perfect Real Estate Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur reprehenderit illum ducimus a, nisi laborum magni
                expedita ullam accusantium quae
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="choose-item">
                  <i className="flaticon-location" />
                  <h3>Find Perfect Home</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    hic pariatur inventore
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="choose-item">
                  <i className="flaticon-real-estate-agent" />
                  <h3>Experience Agent</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    hic pariatur inventore
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="choose-item">
                  <i className="flaticon-key" />
                  <h3>Buy A Home</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    hic pariatur inventore
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="choose-item">
                  <i className="flaticon-sale" />
                  <h3>Sell Your Property</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    hic pariatur inventore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Choose */}
        {/* Project */}
        <section className="project-area pb-70">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">What We Build</span>
              <h2>
                Our Recent Projects On Real Estate Which We Done Successfully
              </h2>
              <div className="counter-item">
                <h3>
                  <span className="odometer" data-count={129}>
                    00
                  </span>
                  <span className="target">+</span>
                </h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-6">
                <div className="project-item">
                  <a href="property-details.html">
                    <img
                      src="assets/images/projects/project1.jpg"
                      alt="Project"
                    />
                  </a>
                  <div className="inner">
                    <h3>
                      <a href="property-details.html">Modern Apartment</a>
                    </h3>
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="project-item">
                  <a href="property-details.html">
                    <img
                      src="assets/images/projects/project2.jpg"
                      alt="Project"
                    />
                  </a>
                  <div className="inner">
                    <h3>
                      <a href="property-details.html">Villa And Resort</a>
                    </h3>
                    <span>Australia</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="project-item">
                  <a href="property-details.html">
                    <img
                      src="assets/images/projects/project3.jpg"
                      alt="Project"
                    />
                  </a>
                  <div className="inner">
                    <h3>
                      <a href="property-details.html">Elegant Villa</a>
                    </h3>
                    <span>Canada</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="project-item">
                  <a href="property-details.html">
                    <img
                      src="assets/images/projects/project4.jpg"
                      alt="Project"
                    />
                  </a>
                  <div className="inner">
                    <h3>
                      <a href="property-details.html">City Center</a>
                    </h3>
                    <span>New Zealand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Project */}
        {/* Find */}
        <section className="find-area ptb-100">
          <div className="container">
            <div className="find-content">
              <h2>
                Find Your Dream Home. Make A Free Schedule, No Obligation
                Appointment
              </h2>
              <a className="common-btn" href="/#">
                Get A Full Quote
                <i className="bx bxs-quote-right" />
              </a>
              <a className="common-btn find-btn" href="/#">
                Find An Agent
                <i className="bx bxs-user" />
              </a>
            </div>
          </div>
        </section>
        {/* End Find */}
        {/* Services */}
        <section className="services-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">What You Need</span>
              <h2>We Provide Best Services From Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur reprehenderit illum ducimus a, nisi laborum magni
                expedita ullam accusantium quae
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3 p-0">
                <div className="services-item">
                  <i className="flaticon-modern-house" />
                  <h3>
                    <a href="service-details.html">Modern House</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    hic pariatur inventore
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 p-0">
                <div className="services-item">
                  <i className="flaticon-apartment" />
                  <h3>
                    <a href="service-details.html">Apartment</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    hic pariatur inventore
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 p-0">
                <div className="services-item">
                  <i className="flaticon-town" />
                  <h3>
                    <a href="service-details.html">Town House</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    hic pariatur inventore
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 p-0">
                <div className="services-item right-border">
                  <i className="flaticon-mansion" />
                  <h3>
                    <a href="service-details.html">Luxury Home</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    hic pariatur inventore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services */}
        {/* City */}
        <section className="city-area pb-70">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">Find Properties</span>
              <h2>Browse Our Neighborhood Exclusive Listing</h2>
              <div className="counter-item">
                <h3>
                  <span className="odometer" data-count={15}>
                    00
                  </span>
                  <span className="target">+</span>
                </h3>
                <p>Neighborhood Countries</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="city-item">
                  <div className="top">
                    <img src="assets/images/city/city1.jpg" alt="City" />
                    <a className="common-btn" href="property-details.html">
                      12 Properties
                      <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                  <div className="bottom">
                    <h3>Wroclaw</h3>
                    <span>Wroclaw, Poland</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="city-item">
                  <div className="top">
                    <img src="assets/images/city/city2.jpg" alt="City" />
                    <a className="common-btn" href="property-details.html">
                      11 Properties
                      <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                  <div className="bottom">
                    <h3>Bangkok</h3>
                    <span>Bangkok, Thailand</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="city-item">
                  <div className="top">
                    <img src="assets/images/city/city3.jpg" alt="City" />
                    <a className="common-btn" href="property-details.html">
                      10 Properties
                      <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                  <div className="bottom">
                    <h3>Hong Kong</h3>
                    <span>Hong Kong</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="city-item">
                  <div className="top">
                    <img src="assets/images/city/city4.jpg" alt="City" />
                    <a className="common-btn" href="property-details.html">
                      9 Properties
                      <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                  <div className="bottom">
                    <h3>Palm Springs</h3>
                    <span>Palm Springs, CA, USA</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="city-item">
                  <div className="top">
                    <img src="assets/images/city/city5.jpg" alt="City" />
                    <a className="common-btn" href="property-details.html">
                      8 Properties
                      <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                  <div className="bottom">
                    <h3>Miami Beach</h3>
                    <span>Miami Beach, FL, USA</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="city-item">
                  <div className="top">
                    <img src="assets/images/city/city6.jpg" alt="City" />
                    <a className="common-btn" href="property-details.html">
                      7 Properties
                      <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                  <div className="bottom">
                    <h3>Sydney</h3>
                    <span>Sydney, Australia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End City */}
        {/* start Property  */}
        <section className="properties-area pt-100 pb-70">
          <div className="container-fluid">
            <div className="section-title">
              <span className="sub-title">Properties For Sell And Rent</span>
              <h2>Check Our Listing Properties For Sell And Rent</h2>
            </div>
            <OwlCarousel
              className="property-slider owl-theme"
              loop
              dots={false}
              nav
              margin={10}
              responsive={{
                0: {
                  items: 1,
                },
                768: {
                  items: 3,
                },
                992: {
                  items: 4,
                },
              }}
            >
              <div className="property-item">
                <div className="top">
                  <span>New York</span>
                  <span>For Sell</span>
                  <img
                    src="assets/images/property/property1.jpg"
                    alt="Property"
                  />
                </div>
                <div className="bottom">
                  <span>From $12,000.00</span>
                  <h3>
                    <a href="property-details.html">Sag Harbor Cottage</a>
                  </h3>
                  <a className="location" href="/#">
                    <i className="bx bx-current-location" />
                    300 B 1st View Road, New York
                  </a>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                    <li>6 RM</li>
                  </ul>
                </div>
              </div>
              <div className="property-item item">
                <div className="top">
                  <span>New York</span>
                  <span>For Rent</span>
                  <img
                    src="assets/images/property/property2.jpg"
                    alt="Property"
                  />
                </div>
                <div className="bottom">
                  <span>$11,000.00/Month</span>
                  <h3>
                    <a href="property-details.html">Cascade Blocks Villa</a>
                  </h3>
                  <a className="location" href="/#">
                    <i className="bx bx-current-location" />
                    300 B 1st View Road, New York
                  </a>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                    <li>6 RM</li>
                  </ul>
                </div>
              </div>
              <div className="property-item item">
                <div className="top">
                  <span>New York</span>
                  <span>For Rent</span>
                  <img
                    src="assets/images/property/property3.jpg"
                    alt="Property"
                  />
                </div>
                <div className="bottom">
                  <span>$10,000.00/Month</span>
                  <h3>
                    <a href="property-details.html">Extension Haven</a>
                  </h3>
                  <a className="location" href="/#">
                    <i className="bx bx-current-location" />
                    300 B 1st View Road, New York
                  </a>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                    <li>6 RM</li>
                  </ul>
                </div>
              </div>
              <div className="property-item item">
                <div className="top">
                  <span>New York</span>
                  <span>For Sell</span>
                  <img
                    src="assets/images/property/property4.jpg"
                    alt="Property"
                  />
                </div>
                <div className="bottom">
                  <span>From $9,000.00</span>
                  <h3>
                    <a href="property-details.html">Titan House</a>
                  </h3>
                  <a className="location" href="/#">
                    <i className="bx bx-current-location" />
                    300 B 1st View Road, New York
                  </a>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                    <li>6 RM</li>
                  </ul>
                </div>
              </div>
              <div className="property-item item">
                <div className="top">
                  <span>New York</span>
                  <span>For Sell</span>
                  <img
                    src="assets/images/property/property5.jpg"
                    alt="Property"
                  />
                </div>
                <div className="bottom">
                  <span>From $8,000.00</span>
                  <h3>
                    <a href="property-details.html">Royal House</a>
                  </h3>
                  <a className="location" href="/#">
                    <i className="bx bx-current-location" />
                    300 B 1st View Road, New York
                  </a>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                    <li>6 RM</li>
                  </ul>
                </div>
              </div>
              <div className="property-item item">
                <div className="top">
                  <span>New York</span>
                  <span>For Sell</span>
                  <img
                    src="assets/images/property/property6.jpg"
                    alt="Property"
                  />
                </div>
                <div className="bottom">
                  <span>From $7,000.00</span>
                  <h3>
                    <a href="property-details.html">Natural Cottage</a>
                  </h3>
                  <a className="location" href="/#">
                    <i className="bx bx-current-location" />
                    300 B 1st View Road, New York
                  </a>
                  <ul>
                    <li>5 BD</li>
                    <li>2 BA</li>
                    <li>1800 SF</li>
                    <li>6 RM</li>
                  </ul>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        {/* End Property */}
        {/* Team */}
        <section className="team-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">Meet Our Agent</span>
              <h2>Our Expert Team Will Give You Best Support Always</h2>
              <div className="counter-item">
                <h3>
                  <span className="odometer" data-count={54}>
                    00
                  </span>
                  <span className="target">+</span>
                </h3>
                <p>Experienced Agents</p>
              </div>
            </div>
            <OwlCarousel
              className="team-slider owl-theme"
              loop
              margin={10}
              dots={false}
              nav
              responsive={{
                0: {
                  items: 1,
                },
                768: {
                  items: 3,
                },
                992: {
                  items: 4,
                },
              }}
            >
              <div className="team-item item">
                <div className="top">
                  <span>New York</span>
                  <span>Level 5</span>
                  <img src="assets/images/team1.jpg" alt="Team" />
                  <h3>Martine Gaptil</h3>
                  <p>CEO And Founder</p>
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
                      <i className="bx bx-mail-send" />
                      <a href="mailto:hello@snift.com">hello@snift.com</a>
                    </li>
                    <li>
                      <i className="bx bx-phone-call" />
                      <a href="tel:+123456789">+123-456-789</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-item item">
                <div className="top">
                  <span>Spain</span>
                  <span>Level 5</span>
                  <img src="assets/images/team2.jpg" alt="Team" />
                  <h3>Genelia Simran</h3>
                  <p>Manager</p>
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
                      <i className="bx bx-mail-send" />
                      <a href="mailto:info@snift.com">info@snift.com</a>
                    </li>
                    <li>
                      <i className="bx bx-phone-call" />
                      <a href="tel:+478562482">+478-562-482</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-item item">
                <div className="top">
                  <span>Dubai</span>
                  <span>Level 5</span>
                  <img src="assets/images/team3.jpg" alt="Team" />
                  <h3>Denris Angelina</h3>
                  <p>Agent</p>
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
                      <i className="bx bx-mail-send" />
                      <a href="mailto:info@snift.com">info@snift.com</a>
                    </li>
                    <li>
                      <i className="bx bx-phone-call" />
                      <a href="tel:+752364471">+752-364-471</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-item item">
                <div className="top">
                  <span>Australia</span>
                  <span>Level 5</span>
                  <img src="assets/images/team4.jpg" alt="Team" />
                  <h3>Tom Henry</h3>
                  <p>Staff</p>
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
                      <i className="bx bx-mail-send" />
                      <a href="mailto:hello@snift.com">hello@snift.com</a>
                    </li>
                    <li>
                      <i className="bx bx-phone-call" />
                      <a href="tel:+458785455">+458-785-455</a>
                    </li>
                  </ul>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        {/* End Team */}
        <div>
          {/* Partner */}
          <div className="partner-area ptb-100">
            <div className="container">
              <div className="partner-slider owl-theme owl-carousel">
                <div className="partner-item">
                  <img src="assets/images/partner/partner1.png" alt="Partner" />
                </div>
                <div className="partner-item">
                  <img src="assets/images/partner/partner2.png" alt="Partner" />
                </div>
                <div className="partner-item">
                  <img src="assets/images/partner/partner3.png" alt="Partner" />
                </div>
                <div className="partner-item">
                  <img src="assets/images/partner/partner4.png" alt="Partner" />
                </div>
                <div className="partner-item">
                  <img src="assets/images/partner/partner5.png" alt="Partner" />
                </div>
                <div className="partner-item">
                  <img src="assets/images/partner/partner6.png" alt="Partner" />
                </div>
                <div className="partner-item">
                  <img src="" alt="Partner" />
                </div>
              </div>
            </div>
          </div>
          {/* End Partner */}
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
}
