import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Typography, withStyles, Grid, Paper } from '@material-ui/core';

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        alignItems='center'
        justify='flex-start'
      >
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper} elevation={1}>
            <Typography variant='h2' gutterBottom>
              About Us
            </Typography>
            <Typography variant='h6' gutterBottom>
              FitGO is a web application that gives users more convenient access
              to personal trainers nearby.{' '}
            </Typography>
            <Typography variant='h6' gutterBottom>
              The main feature of the application is a map that will help users
              filter personal trainers by distance and by skills.{' '}
            </Typography>
            <Typography variant='h6' gutterBottom>
              Users will see personal trainers' information and can favour the
              trainers. Personal trainers have a profile page where they can see
              a list of users that have favored them.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object
};
export default withStyles(styles)(About);
