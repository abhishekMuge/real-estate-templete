import React, { Component } from "react";
import SubcribtionForm from "../../Components/SubcribtionForm";

export default class BlogsDetails extends Component {
  render() {
    return (
      <div>
        {/* Page Title */}
        <div className="page-title-area title-bg-four">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="title-content">
                  <h2>Blog Details</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span>Blog Details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title */}
        {/* Blog Details */}
        <div className="blog-details-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="details-item">
                  <div className="common-img-details">
                    <span>Tips &amp; Trick</span>
                    <h2>Architecture Is Not Based On Concrete And Steel</h2>
                    <ul>
                      <li>
                        <i className="bx bxs-user" />
                        By:
                        <a href="/#">admin</a>
                      </li>
                      <li>
                        <i className="bx bx-calendar" />
                        October 19, 2021
                      </li>
                    </ul>
                  </div>
                  <img src="assets/images/blog/details1.jpg" alt="Details" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing
                  </p>
                  <div className="video-item">
                    <ul className="align-items-center">
                      <li>
                        <img
                          src="assets/images/blog/details2.jpg"
                          alt="Details"
                        />
                        <button
                          className="js-modal-btn"
                          data-video-id="Ynr4o0eOjdg"
                        >
                          <i className="bx bx-play" />
                        </button>
                      </li>
                      <li>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quibusdam esse cum iusto reprehenderit, qui
                          ducimus deleniti non animi, autem vitae assumenda
                          omnis distinctio voluptatum possimus similique
                          perspiciatis doloribus, dicta numquam.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <blockquote>
                    <i className="bx bxs-quote-left" />
                    “It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters”
                  </blockquote>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                  <div className="tags align-items-center">
                    <div className="left">
                      <ul>
                        <li>
                          <span>Share:</span>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="bx bxl-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <span>Tags:</span>
                        </li>
                        <li>
                          <a href="/#">#Home</a>
                        </li>
                        <li>
                          <a href="/#">#Apartment</a>
                        </li>
                        <li>
                          <a href="/#">#Cottage</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="comments">
                    <h3>Comments</h3>
                    <ul>
                      <li>
                        <img
                          src="assets/images/blog/comment1.jpg"
                          alt="Details"
                        />
                        <h4>Jenthen Benther</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. At porro provident ipsa esse velit omnis quos ut
                          cupiditate quasi non quidem vero tempore deserunt
                        </p>
                        <a href="/#">
                          <i className="bx bxs-heart" />
                          Likes
                        </a>
                        <a href="/#">
                          <i className="bx bxs-share" />
                          Reply
                        </a>
                        <span>15 days ago</span>
                      </li>
                      <li>
                        <img
                          src="assets/images/blog/comment2.jpg"
                          alt="Details"
                        />
                        <h4>Sharlin Alina</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. At porro provident ipsa esse velit omnis quos ut
                          cupiditate quasi non quidem vero tempore deserunt
                        </p>
                        <a href="/#">
                          <i className="bx bxs-heart" />
                          Likes
                        </a>
                        <a href="/#">
                          <i className="bx bxs-share" />
                          Reply
                        </a>
                        <span>14 days ago</span>
                      </li>
                      <li>
                        <img
                          src="assets/images/blog/comment3.jpg"
                          alt="Details"
                        />
                        <h4>Kerlos Bils</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. At porro provident ipsa esse velit omnis quos ut
                          cupiditate quasi non quidem vero tempore deserunt
                        </p>
                        <a href="/#">
                          <i className="bx bxs-heart" />
                          Likes
                        </a>
                        <a href="/#">
                          <i className="bx bxs-share" />
                          Reply
                        </a>
                        <span>13 days ago</span>
                      </li>
                    </ul>
                  </div>
                  <div className="common-details-contact">
                    <h3>Leave A Comment</h3>
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
                            Post A Comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget-area">
                  <div className="search widget-item">
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Here..."
                      />
                      <button type="submit" className="btn">
                        <i className="bx bx-search" />
                      </button>
                    </form>
                  </div>
                  <div className="popular widget-item">
                    <h3>News And Blog</h3>
                    <div className="inner">
                      <ul className="align-items-center">
                        <li>
                          <img
                            src="assets/images/services/details6.jpg"
                            alt="Details"
                          />
                        </li>
                        <li>
                          <h4>
                            <a href="/#">Extension Cottage Villa</a>
                          </h4>
                          <a className="location" href="/#">
                            <i className="bx bx-current-location" />
                            View, New York
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="inner">
                      <ul className="align-items-center">
                        <li>
                          <img
                            src="assets/images/services/details7.jpg"
                            alt="Details"
                          />
                        </li>
                        <li>
                          <h4>
                            <a href="/#">Sag Harbor Cottage And Resort</a>
                          </h4>
                          <a className="location" href="/#">
                            <i className="bx bx-current-location" />
                            6B, New York
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="inner">
                      <ul className="align-items-center">
                        <li>
                          <img
                            src="assets/images/services/details8.jpg"
                            alt="Details"
                          />
                        </li>
                        <li>
                          <h4>
                            <a href="/#">Construction Industry And Office</a>
                          </h4>
                          <a className="location" href="/#">
                            <i className="bx bx-current-location" />
                            6B, 1st View
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="categories widget-item">
                    <h3>Categories</h3>
                    <ul>
                      <li>
                        <a href="/#">
                          Resort And Villa
                          <span>(10)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          Modern Architect
                          <span>(02)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          Properties
                          <span>(20)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          Real Estate
                          <span>(18)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          Housing Company
                          <span>(07)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          Sell Or Rent
                          <span>(36)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          Apartments
                          <span>(10)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tags widget-item">
                    <h3>Tags</h3>
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
          </div>
        </div>
        {/* End Blog Details */}
        <SubcribtionForm />
      </div>
    );
  }
}
