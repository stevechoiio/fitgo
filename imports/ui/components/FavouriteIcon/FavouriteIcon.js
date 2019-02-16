import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import FavIconFilled from "@material-ui/icons/Favorite";
import FavIconOutline from "@material-ui/icons/FavoriteBorder";
import styles from "./styles";
import IconButton from "@material-ui/core/IconButton";
import { withTracker } from "meteor/react-meteor-data";
import { Trainers } from "../../../api/trainers";
import { Clients } from "../../../api/clients";
//check for the database to determine the favoruite
//Call the Method here -

/// in this HeartIcon component, you are going to receive the trainer_id<<<<
/// using that, you need to pull out the trainers collection, and find the trainer, and then , check if the clients:[] has current.user.id. if yes => then heart should be filled, if not then it should be empty.

class FavouriteIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: this.props.client[0].trainers.includes(this.props.trainerID)
    };
  }

  // trainerFavourited = () => {};

  // toggleFavorite = () => {
  //   this.setState({ favourite: !this.state.favourite });
  //   console.log(this.state.favourite);
  // };
  addClientTrainerMatch = async () => {
    const { trainerID, currentUserId } = this.props;

    await Meteor.call(
      "trainers.addClientsToTrainers",
      currentUserId,
      trainerID
    );
    await Meteor.call("clients.addTrainersToClients", trainerID, currentUserId);

    this.setState({
      favourite: !this.state.favourite
    });
  };
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

    this.setState({
      favourite: !this.state.favourite
    });
  };

  render() {
    const { trainerID, clientID } = this.props;
    const { favourite } = this.state;

    return (
      <div>
        <IconButton
          onClick={() => {
            if (!this.state.favourite) {
              console.log("adding");
              this.addClientTrainerMatch();
            } else {
              console.log("deleting");
              this.deleteClientTrainerMatch();
            }
          }}
          color="primary"
        >
          {favourite ? <FavIconFilled /> : <FavIconOutline />}
        </IconButton>
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
})(withStyles(styles)(FavouriteIcon));
