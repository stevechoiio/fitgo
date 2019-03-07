import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, Link } from 'react-router-dom';
import { Clients } from '../../../api/clients';
import { Trainers } from '../../../api/trainers';
import PropTypes from 'prop-types';
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import styles from './styles';
import ProfileIcon from '@material-ui/icons/PersonPin';
import SignoutIcon from '@material-ui/icons/HighlightOff';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, trainers, clients } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const user = clients[0].name ? clients[0].name : trainers[0].name;

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

              {/* <Button color='primary' href='/profile'>
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
              </Button> */}

              <Button
                color='primary'
                aria-haspopup='true'
                aria-owns={open ? 'menu-appbar' : undefined}
                onClick={this.handleMenu}
              >
                {user}
              </Button>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem
                  className={classes.menuItem}
                  onClick={this.handleClose}
                  component={Link}
                  to='/profile'
                >
                  <ListItemIcon className={classes.icon}>
                    <ProfileIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.primary }}
                    inset
                    primary='Your Profile'
                  />
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  <ListItemIcon className={classes.icon}>
                    <SignoutIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.primary }}
                    inset
                    primary='Sign Out'
                  />
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

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
