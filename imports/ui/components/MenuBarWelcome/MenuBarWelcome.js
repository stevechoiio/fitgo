import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar, Button } from '@material-ui/core';
import styles from './styles';

const MenuBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.menuBar}>
        <Toolbar>
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
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);
