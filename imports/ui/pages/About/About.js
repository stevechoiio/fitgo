import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { withTracker } from 'meteor/react-meteor-data';
import Typography from '@material-ui/core/Typography';
import OptionList from '../../components/OptionsList';
import FullScreenLoader from '../../components/FullScreenLoader/';

const About = ({ classes, currentUserId } = this.props) => {
  if (!currentUserId) {
    return <FullScreenLoader />;
  } else {
    return (
      <div>
        <FullScreenLoader />
      </div>
    );
  }
};

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(About));
