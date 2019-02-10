import React, { Component } from "react";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import {Clients} from "../../../../imports/api/clients";
import { Meteor } from "meteor/meteor";
import Typography from "@material-ui/core";

class Profile extends Component {
  render() {
    const { classes, clients } = this.props;
    console.log(clients[0])

    return (
      <div>
        {clients.map(client => {
          return <Typography>{client.name}</Typography>;
        })}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("clients"); // NEW!

  return {
    clients: Clients.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(Profile);
