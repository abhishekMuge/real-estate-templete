import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./Redux";
import { Provider } from "react-redux";
import Home from "./Page/Home";
import PropertyDeatils from "./Page/PropertDetails";
import AboutUs from "./Page/AboutUS";
import ContactMe from "./Page/ContactUs";
import Service from "./Page/Services";
import Blogs from "./Page/Blog";
import Agent from "./Page/Agent";
import AgentDetails from "./Page/Agent/AgentDetails";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/property-details"
                component={PropertyDeatils}
              />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/contact" component={ContactMe} />
              <Route exact path="/service" component={Service} />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/agents" component={Agent} />
              <Route exact path="/agents-details" component={AgentDetails} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
