import React, { Component } from "react";
import { CheckCircle, Instagram, Facebook, Email } from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./agent.css";
export default class AgentDetails extends Component {
  state = {
    activeTabIndex: 0,
  };
  setParentTabIndex = (index) => {
    this.setState({
      activeTabIndex: index,
    });
  };
  render() {
    return (
      <div className="agent-banner container">
        {/* Agent Banner  */}
        <div className="row mt-4 d-flex align-items-center">
          <div className="col-lg-3">
            <img
              src="assets/images/team1.jpg"
              className="rounded-circle"
              alt="agent-banner"
              style={{
                width: "400px",
              }}
            />
          </div>
          <div className="col-lg-7">
            <div className="d-flex flex-column">
              <h2 className="-mb-20 fs-1">Eternity Home Exchange</h2>
              <h3
                className="fs-5"
                style={{
                  width: "400px",
                }}
              >
                The name you can Trust- Eternity Home Exchange
              </h3>
              <span className="fs-6 text-bold mb-2">
                <CheckCircle />
                503 Properties for sales
              </span>
              <span className="fs-6 text-bold mb-2">
                <CheckCircle />
                101 properties for rent
              </span>
              <div className="d-inline-flex mt-2">
                <div className="social-container ">
                  <Instagram style={{ fontSize: "20px", margin: "0 5px" }} />
                </div>
                <div className="social-container ">
                  <Facebook style={{ fontSize: "20px", margin: "0 5px" }} />
                </div>
                <div className="social-container ">
                  <Email style={{ fontSize: "20px", margin: "0 5px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Agent Banner Ends */}
        {/* Tab banner */}
        <CustomizedTabs setIndex={this.setParentTabIndex} />
        {/* overView Tab Banner */}
        {this.state.activeTabIndex === 0 && (
          <div className="row">
            <div className="col agent-overview-tab">
              <span className="header text-bold fs-5">
                ₹ 66 Lac 2 BHK, Independent/Builder Floor in Sector-82 Gurgaon
              </span>
              <hr />
              <div className="content d-flex flex-wrap">
                <div className="col-lg-3 d-flex flex-column align-items-center">
                  <img
                    className="agent-image-banner"
                    src="assets/images/team1.jpg"
                    alt=""
                  />
                  <span>
                    {<span className="text-bold">Dealer:</span>} Eternity Home
                    Exchange
                  </span>
                </div>
                <div className="col-lg-7">
                  <span>
                    {<span className="text-bold">Super built-up Area : </span>}{" "}
                    930 sq.ft. @ ₹7096 / sq.ft.
                  </span>
                  <br />
                  <br />
                  <span>
                    {<span className="text-bold">Society :</span>} Vatika Emilia
                    Floors
                  </span>
                  <br />
                  <br />
                  <span>
                    {<span className="text-bold">Highlights: </span>}Resale /
                    Ready to move / 5 to 10 years old / Freehold / Ground Floor
                    (out of 2) / Reserved Parking
                  </span>
                  <br />
                  <br />
                  <span>
                    {<span className="text-bold">Description :</span>} Vatika
                    emilia floors in sector-82 gurgaon, gurgaon by vatika group
                    is a residential project. The project offers flo..
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* overView Tab Banner Ends */}
        {/* {Property Tab Banner } */}
        {this.state.activeTabIndex === 1 && (
          <div className="row">
            <div className="col-sm-6 col-lg-4">
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
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="property-item">
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
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="property-item">
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
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="property-item">
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
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="property-item">
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
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="property-item">
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
            </div>
          </div>
        )}
        {/* property tab banner ends here */}
        {/* Tab Banner Ends */}
      </div>
    );
  }
}

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

// const StyledTabs = withStyles({
//   indicator: {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//     "& > span": {
//       maxWidth: 40,
//       width: "100%",
//       backgroundColor: "#635ee7",
//     },
//   },
// })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

// const StyledTab = withStyles((theme) => ({
//   root: {
//     textTransform: "none",
//     color: "#fff",
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     "&:focus": {
//       opacity: 1,
//     },
//   },
// }))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#2e1534",
  },
}));

function CustomizedTabs({ setIndex }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    await setIndex(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="OverView" />
          <AntTab label="Properties" />
          <AntTab label="Contact" />
          <AntTab label="More Info" />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
