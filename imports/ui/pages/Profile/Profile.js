import React from "react";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Clients } from "../../../../imports/api/clients";
import { Meteor } from "meteor/meteor";
// import { Typography } from "@material-ui/core";
const Profile = props => {
  console.log("from the profile page");
  console.log(props.clients[0]);

  return <div />;
};

export default withTracker(() => {
  Meteor.subscribe("clients"); // NEW!

  return {
    clients: Clients.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(Profile);
