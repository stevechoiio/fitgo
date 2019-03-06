import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Clients } from "../../../api/clients";
import { withStyles, IconButton } from "@material-ui/core";
import FavIconFilled from "@material-ui/icons/Favorite";
import FavIconOutline from "@material-ui/icons/FavoriteBorder";
import styles from "./styles";
import PropTypes from "prop-types";

class FavouriteIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false
    };
  }
  componentDidMount() {
    this.setState({
      favourite: this.props.client[0].trainers.includes(this.props.trainerID)
    });
  }

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
    const { favourite } = this.state;

    return (
      <div>
        <IconButton
          onClick={() => {
            if (!this.state.favourite) {
              this.addClientTrainerMatch();
            } else {
              this.deleteClientTrainerMatch();
            }
          }}
          style={{ color: "#FAB3A9" }}
        >
          {favourite ? <FavIconFilled /> : <FavIconOutline />}
        </IconButton>
      </div>
    );
  }
}

FavouriteIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  client: PropTypes.array.isRequired,
  clientID: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired,
  trainerID: PropTypes.string.isRequired
};

export default withTracker(() => {
  Meteor.subscribe("clients");
  Meteor.subscribe("trainers");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    client: Clients.find({ _id: Meteor.userId() }).fetch()
  };
})(withStyles(styles)(FavouriteIcon));
