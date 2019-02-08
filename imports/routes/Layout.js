<<<<<<< HEAD
import React from 'react';
import Profile from '../ui/pages/Profile/';
import Welcome from '../ui/pages/Welcome';

import Feature from '../ui/pages/Feature';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
=======
import React from "react";

import Profile from "../ui/pages/Profile/";

import Welcome from "../ui/pages/Welcome";

import Feature from "../ui/pages/Feature";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
>>>>>>> bf47eea7fad200134795841be652b07c936cc889

///DO NOT ADD

const Layout = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Welcome} />
        {/* <Route exact path='/chat' component={Chat} /> */}
        <Route exact path='/feature' component={Feature} />
        <Route exact path='/profile' component={Profile} />
      </div>
    </Router>
  );
};

export default Layout;
