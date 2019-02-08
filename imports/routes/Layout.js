import React from 'react';
import Profile from '../ui/pages/Profile';
import Chat from '../components/Chat/chat';
import Welcome from '../ui/pages/Welcome/Welcome';
import Main from '../ui/pages/Main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/chat' component={Chat} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/profile' component={Profile} />
      </div>
    </Router>
  );
};

export default Layout;
