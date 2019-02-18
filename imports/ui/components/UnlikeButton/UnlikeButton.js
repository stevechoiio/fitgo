import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import { withTracker } from 'meteor/react-meteor-data';
import { Clients } from '../../../api/clients';
import styles from './styles';
import PropTypes from 'prop-types';

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
      'trainers.removeClientsFromTrainers',
      currentUserId,
      trainerID
    );
    await Meteor.call(
      'clients.deleteTrainersfromClients',
      trainerID,
      currentUserId
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Button
        onClick={() => {
          this.deleteClientTrainerMatch();
          console.log('deleting');
        }}
        variant='outlined'
        size='medium'
        color='primary'
        className={classes.unlike}
      >
        Unlike Trainer
      </Button>
    );
  }
}

UnlikeButton.propTypes = {
  classes: PropTypes.object
};
export default withTracker(() => {
  Meteor.subscribe('clients');
  Meteor.subscribe('trainers');

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    client: Clients.find({ _id: Meteor.userId() }).fetch()
  };
})(withStyles(styles)(UnlikeButton));
