import PostProperty from "./Page/PostProperty";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "react-sidebar";
import SideBarItems from "./Components/Navbar/Index";
import Register from "./Components/UserForm/Register";
import Home from "./Page/Home";
import Login from "./Components/UserForm/Login";
function App({ history }) {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const [userLoggedin, setUserLoggedin] = useState(false);
  const onSetSidebarOpen = () => {
    setsidebarOpen(!sidebarOpen);
  };

  const handleUserLoggin = () => {
    setUserLoggedin(!userLoggedin);
  };

  return (
    <div className="App">
      <Router>
        <Sidebar
          sidebar={<SideBarItems />}
          open={false}
          docked={userLoggedin}
          onSetOpen={onSetSidebarOpen}
          styles={{ sidebar: { background: "black" } }}
        >
          <Switch>
            <Route exact path="/">
              {!userLoggedin ? <Redirect to="/login" /> : <Home />}
            </Route>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login">
              <Login setUserLoggedin={handleUserLoggin} />
            </Route>
            <Route exact path="/post-property" component={PostProperty} />
          </Switch>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
