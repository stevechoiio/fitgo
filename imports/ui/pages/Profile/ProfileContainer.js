import React, { Fragment } from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Clients } from '../../../../imports/api/clients';

import { withTracker } from 'meteor/react-meteor-data';


const ProfileContainer = ({ classes }) => {
  return (
    <Fragment>
      <Profile />
    </Fragment>
  );
};

//export default withStyles(styles)(ProfileContainer);

export default withTracker(() => {
  Meteor.subscribe('clients'); // NEW!


  return {
    clients: Clients.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),

  };
})(ProfileContainer);
