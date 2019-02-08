import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../../routes/Layout";
import { Clients } from "../../api/clients";
import { withTracker } from "meteor/react-meteor-data";
import AccountsUIWrapper from "../../ui/components//AccountsWrapper/index";

///// DO NOT TOUCH
// import logo from '../../public/images/welcome.jpg';
import "./styles.css";
import theme from "../../theme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app-wrapper">
          <div className="login-wrapper">
            <AccountsUIWrapper />
          </div>
          <div className="container">
            <header>{/* <img src={logo} alt='logo' /> */}</header>
            <h1>
              {this.props.clients.map(a => (
                <h1>{a.name}</h1>
              ))}
            </h1>
            <Layout />
            <h1 />
            <ul />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withTracker(() => {
  return {
    clients: Clients.find().fetch()
  };
})(App);
