import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
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
            <Button color='primary'>Join</Button>
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
