import PostProperty from "./Page/PostProperty";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";
import Store from "./Redux_config";
import Sidebar from "react-sidebar";
import SideBarItems from "./Components/Navbar/Index";
import Register from "./Components/UserForm/Register";
import Home from "./Page/Home";
import Login from "./Components/UserForm/Login";
import PostProject from "./Page/PostProject";
import Marketing from "./Page/Marketing";
import OrderData from "./Page/OrderData";
import UserEdit from "./Page/EditProfile";

const mql = window.matchMedia(`(min-width: 800px)`);
function App() {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [sidebarDocked, setsidebarDocked] = useState(mql.matches);
  const onSetSidebarOpen = () => {
    setsidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    mql.addListener(mediaQueryChanged);
  });

  const mediaQueryChanged = () => {
    setsidebarDocked(mql.matches);
    setsidebarOpen(false);
  };

  return (
    <div className="App">
      <Provider store={Store}>
        <Router>
          <Sidebar
            sidebar={<SideBarItems />}
            open={sidebarOpen}
            docked={sidebarDocked}
            onSetOpen={onSetSidebarOpen}
            styles={{ sidebar: { background: "black" } }}
          >
            <Switch>
              <Route exact path="/">
                {!localStorage.getItem("userStatus") ? (
                  <Redirect to="/login" />
                ) : (
                  <Redirect to="/dashboard" />
                )}
              </Route>
              <Route path="/dashboard">
                <Home setsidebarOpen={setsidebarOpen} navStaus={sidebarOpen} />
              </Route>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/post-property">
                <PostProperty />
              </Route>
              <Route path="/marketing" component={Marketing} />
              <Route exact path="/post-project" component={PostProject} />
              <Route exact path="/order-data" component={OrderData} />
              <Route exact path="/user-edit" component={UserEdit} />
            </Switch>
          </Sidebar>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
