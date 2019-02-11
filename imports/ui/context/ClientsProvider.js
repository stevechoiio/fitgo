import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Clients } from "../../api/clients";

export const ClientsContext = React.createContext();

class ClientsProvider extends Component {
  render() {
    const { clients } = this.props;
    return (
      <ClientsContext.Provider
        value={{
          clients
        }}
      >
        {this.props.children}
      </ClientsContext.Provider>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("clients");
  return {
    clients: Clients.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
  };
})(ClientsProvider);
