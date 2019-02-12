import React, { Component } from "react";
import styles from "./styles";
import { Clients } from "../../../api/clients";
import { Trainers } from "../../../api/trainers";
import { withTracker } from "meteor/react-meteor-data";

class Profile extends Component {
  render() {
    const { classes, clients } = this.props;

    return (
      <div className="profile">
           {clients.map(client => (
             <div key={client._id}>
             <h1>Name: {client.name}</h1>
            <h2>Email: {client.email}</h2>
            <h2>Education: {client.education}</h2>
            <h2>Languages: {client.languages.join(", ")}</h2>
            <h2>Skills: {client.skills.join(", ")}</h2>
             </div>
            ))}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("clients"); // NEW!
  Meteor.subscribe("trainers");

  return {
    trainers: Trainers.find({user: Meteor.username}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({user: Meteor.username}).fetch()
  };
})(Profile);
