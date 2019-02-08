import React, { Component } from "react";
import Layout from "../ui/pages/Layout";
import { Clients } from "../api/clients";
import { withTracker } from "meteor/react-meteor-data";
class App extends Component {
  render() {
    console.log("from the");
    console.log(this.props);
    return (
      <div className="container">
        <header>
          <h1>fitGO</h1>
        </header>

        <Layout />
        <h1 />
        <ul />
      </div>
    );
  }
}

export default withTracker(() => {
  console.log(Clients.find().fetch());
  return {
    clients: Clients.find().fetch()
  };
})(App);
