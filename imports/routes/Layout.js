import React from 'react';
import Profile from '../ui/pages/Profile/';
import Chat from '../components/Chat/Chat';
import Welcome from '../ui/pages/Welcome';
import Feature from '../ui/pages/Feature';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Welcome} />
        {/* <Route exact path='/chat' component={Chat} /> */}
        <Route exact path='/hello' component={Feature} />
        <Route exact path='/profile' component={Profile} />
      </div>
    </Router>
  );
};

export default Layout;
