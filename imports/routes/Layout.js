import React from "react";
import Profile from "../ui/pages/Profile";
import Welcome from "../ui/pages/Welcome";
import Feature from "../ui/pages/Feature";
import About from "../ui/pages/About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Onboard from "../ui/pages/Onboard";
import Onboard1 from "../ui/pages/Onboard/Onboard1";

///DO NOT ADD

const Layout = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/onboard" component={Onboard} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
};

export default Layout;
