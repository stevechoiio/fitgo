<<<<<<< HEAD
import React, { Fragment, Component } from "react";
import Profile from "../ui/pages/Profile";
import Welcome from "../ui/pages/Welcome";
import Feature from "../ui/pages/Feature";
import About from "../ui/pages/About";
import { Redirect, Route, Switch } from "react-router";
import { withTracker } from "meteor/react-meteor-data";
import { withRouter } from "react-router";
import { Clients } from "../api/clients";
import { Trainers } from "../api/trainers";
import Onboard1 from "../ui/pages/Onboard";
import FullScreenLoader from "../ui/components/FullScreenLoader";

const Layout = ({ currentUser, currentUserId, client, trainer, loading }) => {
=======
import React, { Fragment, Component } from 'react';
import Profile from '../ui/pages/Profile';
import Welcome from '../ui/pages/Welcome';
import Feature from '../ui/pages/Feature';
import About from '../ui/pages/About';
import { Redirect, Route, Switch } from 'react-router';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router';
<<<<<<< HEAD
import { Clients } from '../api/clients';
import { Trainers } from '../api/trainers';
import Onboard1 from '../ui/pages/Onboard';
import FullScreenLoader from '../ui/components/FullScreenLoader';
import MenuBar from '../../imports/ui/components/MenuBar';
import MenuBarWelcome from '../../imports/ui/components/MenuBarWelcome';
=======
import { Clients } from "../api/clients";
import { Trainers } from "../api/trainers";
import Onboard from '../ui/pages/Onboard';
import FullScreenLoader from "../ui/components/FullScreenLoader"
>>>>>>> 4e8e34ad5c904d75893a2bba47ad5388f92d79f4

///DO NOT ADD

const Layout = ({ currentUser, currentUserId, client, trainer }) => {
  console.log(client);
>>>>>>> fc54ad9ee182ac179576cb29af3b8296879175a0
  if (currentUserId) {
    if (loading) {
      return <FullScreenLoader />;
    } else {
      return (
        <Fragment>
          {client.length > 0 || trainer.length > 0 ? (
            <Switch>
              <Route exact path="/feature" component={Feature} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/about" component={About} />
              <Redirect from="*" to="/feature" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/onboard" component={Onboard1} />

              <Redirect from="*" to="/onboard" />
            </Switch>
          )}
        </Fragment>
      );
    }
<<<<<<< HEAD
=======
    return (
      <Fragment>
        {client.length > 0 || trainer.length > 0 ? (
          <Fragment>
            <MenuBar />
            <Switch>
              <Route exact path='/feature' component={Feature} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/about' component={About} />
              <Redirect from='*' to='/feature' />
            </Switch>
          </Fragment>
        ) : (
<<<<<<< HEAD
          <Fragment>
            <MenuBarWelcome />
            <Switch>
              <Route exact path='/onboard' component={Onboard1} />
              <Redirect from='*' to='/onboard' />
            </Switch>
          </Fragment>
=======
          <Switch>
            <Route exact path="/onboard" component={Onboard} />
            <Redirect from="*" to="/onboard" />
          </Switch>
>>>>>>> 4e8e34ad5c904d75893a2bba47ad5388f92d79f4
        )}
      </Fragment>
    );
>>>>>>> fc54ad9ee182ac179576cb29af3b8296879175a0
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
<<<<<<< HEAD
    Meteor.subscribe("clients");
    Meteor.subscribe("trainers");
    const handles = [Meteor.subscribe("clients"), Meteor.subscribe("trainers")];
    const loading = handles.some(handle => !handle.ready());

=======
    Meteor.subscribe('clients');
    Meteor.subscribe('trainers');
    console.log(Meteor.user());
>>>>>>> fc54ad9ee182ac179576cb29af3b8296879175a0
    return {
      loading,
      currentUserId: Meteor.userId(),
      currentUser: Meteor.user(),
      client: Clients.find({ _id: Meteor.userId() }).fetch(),
      trainer: Trainers.find({ _id: Meteor.userId() }).fetch()
    };
  })(Layout)
);
