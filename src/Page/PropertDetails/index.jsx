import React, { Component } from "react";
import "./propertydetails.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Suggestion from "./Suggestion";
import AddIconButton from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function ButtonIcon() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIconButton />}
      >
        Add to Wishlist
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIconButton />}
      >
        Compare
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </div>
  );
}

export default class PropertyDeatils extends Component {
  render() {
    const images = [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ];
    return (
      <div>
        {/* Page Title */}
        <div className="page-title-area row">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="gallery">
                <div className="gallery__item gallery__item--1">
                  <img
                    src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="gallery__img"
                    alt="Item 1"
                  />
                </div>
                <div className="gallery__item gallery__item--2">
                  <img
                    src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="gallery__img"
                    alt="Item 2"
                  />
                </div>
                <div className="gallery__item gallery__item--3">
                  <img
                    src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="gallery__img"
                    alt="Item 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title */}

        <div>
          {/* Property Details */}
          <div className="property-details-area ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-10">
                  <div className="details-item">
                    <div className="common-img-details">
                      <span>Dubai</span>
                      <h2>Cascade Blocks Villa</h2>
                      <ul>
                        <li>
                          <i className="bx bx-calendar" />
                          October 19, 2021
                        </li>
                        <li>
                          <i className="bx bx-current-location" />
                          <a href="/#">300 B 1st View Road, New York</a>
                        </li>
                        <li>
                          <i className="bx bx-phone-call" />
                          <a href="/#">1234567890</a>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex mb-4">
                      <ButtonIcon />
                    </div>
                    <ImageGallery
                      items={images}
                      showPlayButton={false}
                      lazyLoad={true}
                      showNav={false}
                      showFullscreenButton={false}
                    />
                    <h1>Property Deatils</h1>
                    <div className="tables">
                      <div className="table1">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Broad Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Type of Properties</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Availability</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Ownership</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Pacing</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Total Area</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Rera Approved</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Price Range</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Address</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Locality</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Contact</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">View</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table2">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Additional Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Type of Properties</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Availability</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Ownership</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Pacing</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Total Area</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Rera Approved</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Price Range</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Address</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Locality</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Contact</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">View</th>
                              <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="mb-100">
                      <h2 className="text-left">Amenities</h2>
                      <br />
                      <br />
                      <div className="d-flex">
                        <div className="d-flex flex-column text-center m-2">
                          <i className="bx bx-square" />
                          <span>Guys Service</span>
                        </div>
                        <div className="d-flex flex-column text-center m-2">
                          <i className="bx bx-square" />
                          <span>Beach View</span>
                        </div>
                        <div className="d-flex flex-column text-center m-2">
                          <i className="bx bx-square" />
                          <span>Highway</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1>Property Description</h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged
                      </p>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing
                      </p>
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

                    <div className="suggestion-box">
                      <h1>Related Properties</h1>
                      <Suggestion />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Property Details */}
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
