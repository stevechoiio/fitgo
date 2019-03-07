import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import { Clients } from '../../../api/clients';
import { Trainers } from '../../../api/trainers';
import PropTypes from 'prop-types';
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  Typography
} from '@material-ui/core';
import styles from './styles';

const MenuBar = ({ classes, trainers, clients }) => {
  const user = clients[0].name ? clients[0].name : trainers[0].name;
  console.log(user);
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.menuBar}>
        <Toolbar className={classes.toolbar}>
          <Button
            className={classes.homeButton}
            color='primary'
            aria-label='Home'
            href='/'
          >
            <img src='/light-logo.svg' alt='fitGO Logo' width='60' />
          </Button>
          <div className={classes.grow} />
          <div className={classes.optns}>
            <Button color='primary' href='/about'>
              About
            </Button>
            <Button color='primary' href='/profile'>
              Profile
            </Button>
            <Typography
              variant='button'
              color='primary'
              className={classes.user}
            >
              {user}
            </Typography>
            <Button
              color='primary'
              onClick={() => {
                localStorage.clear();
              }}
            >
              Sign Out
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withTracker(() => {
  Meteor.subscribe('clients');
  Meteor.subscribe('trainers');
  return {
    trainers: Trainers.find({ _id: Meteor.userId() }).fetch(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({ _id: Meteor.userId() }).fetch()
  };
})(withStyles(styles)(withRouter(MenuBar)));
