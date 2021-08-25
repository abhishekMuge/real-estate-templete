import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Page/Home";
import PropertySubmit from "./Page/PropertySubmit";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ marginBottom: "50px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post-property" component={PropertySubmit} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
