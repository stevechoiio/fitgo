import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Trainers } from '../../../api/trainers';
import { Clients } from '../../../api/clients';
import FullScreenLoader from '../../components/FullScreenLoader/';
import MapWithAMarker from '../../components/MapWithAMarker';
import { withStyles, Grid } from '@material-ui/core';
import styles from './styles';

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 50
    };
  }

  radiusChanger = value => {
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
            direction='row'
            alignItems='center'
            justify='center'
          >
            <Grid item xs={12} sm={12}>
              <MapWithAMarker />
            </Grid>
            */}
          </Grid>
        </div>
      );
    }
  }
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired
};

export default withTracker(() => {
  Meteor.subscribe('clients');
  Meteor.subscribe('trainers');
  return {
    trainers: Trainers.find({}).fetch(),
    clients: Clients.find({}).fetch(),
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(Feature));
