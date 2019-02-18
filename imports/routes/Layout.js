import React, { Fragment } from 'react';
import Profile from '../ui/pages/Profile';
import Welcome from '../ui/pages/Welcome';
import Feature from '../ui/pages/Feature';
import About from '../ui/pages/About';
import { Redirect, Route, Switch } from 'react-router';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router';
import MenuBar from '../../imports/ui/components/MenuBar';
import MenuBarWelcome from '../../imports/ui/components/MenuBarWelcome';
import { Clients } from '../api/clients';
import { Trainers } from '../api/trainers';
import Onboard from '../ui/pages/Onboard';
import FullScreenLoader from '../ui/components/FullScreenLoader';

const Layout = ({ currentUser, currentUserId, client, trainer }) => {
  console.log(client);
  if (currentUserId) {
    if (!currentUser) {
      return <FullScreenLoader />;
    }
    return (
      <Fragment>
        {client.length > 0 || trainer.length > 0 ? (
          <Fragment>
            <MenuBar />
            <Switch>
              <Route exact path='/feature' component={Feature} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/about' component={About} />
              {/* <Redirect from='*' to='/feature' /> */}
            </Switch>
          </Fragment>
        ) : (
          <Fragment>
            <MenuBarWelcome />
            <Switch>
              <Route exact path='/onboard' component={Onboard} />
              <Redirect from='*' to='/onboard' />
            </Switch>
          </Fragment>
        )}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <MenuBarWelcome />
        <Switch>
          <Route path='/' component={Welcome} />
          <Redirect from='*' to='/' />;
        </Switch>
      </Fragment>
    );
  }
};

export default withRouter(
  withTracker(() => {
    Meteor.subscribe('clients');
    Meteor.subscribe('trainers');
    console.log(Meteor.user());
    return {
      currentUserId: Meteor.userId(),
      currentUser: Meteor.user(),
      client: Clients.find({ _id: Meteor.userId() }).fetch(),
      trainer: Trainers.find({ _id: Meteor.userId() }).fetch()
    };
  })(Layout)
);
