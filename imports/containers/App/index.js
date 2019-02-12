<<<<<<< HEAD
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../../routes/Layout';
import { Clients } from '../../api/clients';
import { withTracker } from 'meteor/react-meteor-data';
import ClientsProvider from '../../ui/context/ClientsProvider';
=======
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../../routes/Layout";
import { Clients } from "../../api/clients";
import { Trainers } from "../../api/trainers";
import { withTracker } from "meteor/react-meteor-data";
>>>>>>> master
// import AccountsUIWrapper from '../../ui/components//AccountsWrapper/index';
///// DO NOT TOUCH
// import logo from '../../public/images/welcome.jpg';
import "./styles.css";
import theme from "../../theme";
import MenuBar from "../../ui/components/MenuBar";

class App extends Component {
  render() {
    console.log(this.props);
    return (
<<<<<<< HEAD
      <ClientsProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app-wrapper'>
            {/* <div className="login-wrapper">
            <AccountsUIWrapper />
          </div> */}
            <div className='container'>
              {/* <h1>
=======
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app-wrapper">
          {/* <div className="login-wrapper">
            <AccountsUIWrapper />
          </div> */}
          <div className="container">
            <header>{/* <img src={logo} alt='logo' /> */}</header>
            {/* <h1>
>>>>>>> master
                {this.props.clients.map(a => (
                  <h1 key={a._id}>{a.name}</h1>
                ))}
              </h1> */}
<<<<<<< HEAD
              <MenuBar />
              <Layout />
              <h1 />
              <ul />
            </div>
=======
            <MenuBar />
            <Layout />
            <h1 />
            <ul />
>>>>>>> master
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withTracker(() => {
<<<<<<< HEAD
  Meteor.subscribe('clients'); // NEW!
=======
  Meteor.subscribe("clients"); // NEW!
  Meteor.subscribe("trainers"); // NEW!
>>>>>>> master

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({}).fetch(),
    trainers: Trainers.find({}).fetch()
  };
})(App);
