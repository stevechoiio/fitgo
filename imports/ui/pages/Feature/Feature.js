import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import MapWithAMarker from '../../components/MapWithAMarker';
import { withTracker } from 'meteor/react-meteor-data';
import { withStyles } from '@material-ui/core/styles';
import { Trainers } from "../../../api/trainers"
import { Clients } from "../../../api/clients"




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

  addTrainersToClients = trainer => {};

  addClientsToTrainers = client => {};

  render() {
    const { classes, currentUserId } = this.props;

    return (
      <div>
        <Grid
          container
          className={classes.root}
          direction="row"
          alignItems="center"
          justify="center"
        >
          {/* <Grid item xs={12} sm={12} md={6}>
          FEATURE 
        </Grid> */}
<<<<<<< HEAD
        {/* <Grid item xs={12} sm={12}> */}
        <MapWithAMarker />
        {/* </Grid> */}
=======
        <Grid item xs={12} sm={12} md={6}>
          <MapWithAMarker />
        </Grid>
        <button
          onClick={() => {
            console.log(currentUserId);
            Meteor.call("trainers.addClientsToTrainers", currentUserId, "1");
            Meteor.call("clients.addTrainersToClients", "1", currentUserId);
          }}
        >
        My Favorite Trainer :)
        </button>
>>>>>>> 0f39260d5a135d408dd043f5e5a142a047a59c27
      </Grid>
        
      </div>
    );
  }
}


export default withTracker(() => {
  Meteor.subscribe("clients"); // NEW!
  Meteor.subscribe("trainers");
  return {
    trainers: Trainers.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({}).fetch()
  };
})(withStyles(styles)(Feature));
