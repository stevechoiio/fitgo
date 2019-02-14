import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import MapWithAMarker from "../../components/MapWithAMarker";
import { withTracker } from "meteor/react-meteor-data";
import { withStyles } from "@material-ui/core/styles";
import { Trainers } from "../../../api/trainers";
import { Clients } from "../../../api/clients";
import FullScreenLoader from "../../components/FullScreenLoader/";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 50
    };
  }

  radiusChanger = (event, value) => {
    this.setState({ radius: value });
  };

  render() {
    const { classes, currentUserId } = this.props;

    if (!currentUserId) {
      return <FullScreenLoader />;
    } else {
      return (
        <div>
          <Grid
            container
            className={classes.root}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12} sm={12}>
              <MapWithAMarker />
            </Grid>
            {/* <button
              onClick={() => {
                Meteor.call('trainers.addClientsToTrainers', currentUserId, '1');
                Meteor.call('clients.addTrainersToClients', '1', currentUserId);
              }}
            >
              My Favorite Trainer
            </button> */}
          </Grid>
        </div>
      );
    }

    return (
      <div>
        <Grid
          container
          className={classes.root}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} sm={12}>
            <MapWithAMarker />
          </Grid>
          {/* <button
            onClick={() => {
              Meteor.call('trainers.addClientsToTrainers', currentUserId, '1');
              Meteor.call('clients.addTrainersToClients', '1', currentUserId);
            }}
          >
            My Favorite Trainer
          </button> */}
        </Grid>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(Feature));
