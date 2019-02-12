import React, { Component } from "react";
import styles from "./styles";
import { Clients } from "../../../api/clients";
import { Trainers } from "../../../api/trainers";
import { withTracker } from "meteor/react-meteor-data";

class Profile extends Component {
  componentDidMount() {
    // const trainers = this.props.trainers.filter((trainer) => trainer.username === currentUser.username)
    // console.log(trainers);
  }

  render() {
    const { classes, clients, currentUser } = this.props;

    const trainers = this.props.trainers.filter(
      trainer => trainer.username === currentUser.username
    );
    console.log(trainers);

    return (
      <div className="profile">
        {trainers.map(trainer => (
          <div key={trainer._id}>
            <h1>Name: {trainer.name}</h1>
            <h2>Email: {trainer.email}</h2>
            <h2>Education: {trainer.education}</h2>
            <h2>Languages: {trainer.languages.join(", ")}</h2>
            <h2>Skills: {trainer.skills.join(", ")}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("clients"); // NEW!
  Meteor.subscribe("trainers");
  console.log(Meteor.user());
  return {
    trainers: Trainers.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({}).fetch()
  };
})(Profile);
