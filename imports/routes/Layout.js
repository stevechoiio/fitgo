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
  } else {
    return (
      <Switch>
        <Route path="/" component={Welcome} />
        <Redirect from="*" to="/" />;
      </Switch>
    );
  }
};

export default withRouter(
  withTracker(() => {
    Meteor.subscribe("clients");
    Meteor.subscribe("trainers");
    const handles = [Meteor.subscribe("clients"), Meteor.subscribe("trainers")];
    const loading = handles.some(handle => !handle.ready());

    return {
      loading,
      currentUserId: Meteor.userId(),
      currentUser: Meteor.user(),
      client: Clients.find({ _id: Meteor.userId() }).fetch(),
      trainer: Trainers.find({ _id: Meteor.userId() }).fetch()
    };
  })(Layout)
);
