import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import { withTracker } from "meteor/react-meteor-data";
import { Clients } from "../../../api/clients";

class UnlikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: this.props.client[0].trainers.includes(this.props.trainerID)
    };
  }

  deleteClientTrainerMatch = async () => {
    const { trainerID, currentUserId } = this.props;

    await Meteor.call(
      "trainers.removeClientsFromTrainers",
      currentUserId,
      trainerID
    );
    await Meteor.call(
      "clients.deleteTrainersfromClients",
      trainerID,
      currentUserId
    );
  };

  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.deleteClientTrainerMatch();
            console.log("deleting");
          }}
          variant="outlined"
          size="small"
          color="secondary"
        >
          Unlike Trainer
        </Button>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("clients"); // NEW!
  Meteor.subscribe("trainers");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    client: Clients.find({ _id: Meteor.userId() }).fetch()
  };
})(withStyles(styles)(UnlikeButton));
