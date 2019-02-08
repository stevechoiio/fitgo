import React from "react";
<<<<<<< HEAD
import Profile from "../ui/pages/Profile/";

import Welcome from "../ui/pages/Welcome";
=======
import Profile from "../ui/pages/Profile";
import Welcome from "../ui/pages/Welcome/Welcome";
>>>>>>> cbb217ce3aa00dab576ede18be1e18c5235610b6
import Feature from "../ui/pages/Feature";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Layout = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Welcome} />
        {/* <Route exact path='/chat' component={Chat} /> */}
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
};

export default Layout;
