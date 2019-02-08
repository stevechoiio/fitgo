import React from "react";
import Profile from "./Profile/profile";
import Chat from "./Chat/chat";
import Welcome from "./Welcome/welcome";
import Map from "./Map/map";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Layout = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
};

export default Layout;
