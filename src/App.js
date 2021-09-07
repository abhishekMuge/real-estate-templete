import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Page/Home";
import PropertyDeatils from "./Page/PropertDetails";
import AboutUs from "./Page/AboutUS";
import ContactMe from "./Page/ContactUs";
import Service from "./Page/Services";
import Blogs from "./Page/Blog";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ marginBottom: "50px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/property-details" component={PropertyDeatils} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/contact" component={ContactMe} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/blogs" component={Blogs} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
