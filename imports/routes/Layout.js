import React, { Fragment, Component } from 'react';
import Profile from '../ui/pages/Profile';
import Welcome from '../ui/pages/Welcome';
import Feature from '../ui/pages/Feature';
import About from '../ui/pages/About';
import { Redirect, Route, Switch } from 'react-router';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router';
import Onboard1 from '../ui/pages/Onboard';

///DO NOT ADD

const Layout = ({ loggedOut, currentUser }) => {
  if (!loggedOut) {
    return (
      <Fragment>
        {currentUser ? (
          <Switch>
            <Route exact path='/onboard' component={Onboard1} />
            <Route exact path='/feature' component={Feature} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/about' component={About} />
            <Redirect from='*' to='/feature' />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/onboard' component={Onboard} />
            <Redirect from='*' to='/onboard' />
          </Switch>
        )}
      </Fragment>
    );
  } else {
    return (
      <Switch>
        <Route path='/' component={Welcome} />
        <Redirect from='*' to='/' />;
      </Switch>
    );
  }
};

export default withRouter(
  withTracker(() => {
    return {
      currentUser: Meteor.user(),
      currentUserId: Meteor.userId(),
      loggedOut: !Meteor.user()
    };
  })(Layout)
);
