import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../../routes/Layout";
import { Clients } from "../../api/clients";
import { Trainers } from "../../api/trainers";
import { withTracker } from "meteor/react-meteor-data";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import theme from "../../theme";
import "./styles.css";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app-wrapper">
          <div className="container">
            <Router history={history}>
              <Layout />
            </Router>
            <h1 />
            <ul />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("clients");
  Meteor.subscribe("trainers");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({}).fetch(),
    trainers: Trainers.find({}).fetch()
  };
})(App);
