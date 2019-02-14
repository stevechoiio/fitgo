import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { withTracker } from 'meteor/react-meteor-data';
import { withStyles } from '@material-ui/core/styles';
import { Meteor } from 'meteor/meteor';
import { Trainers } from '../../../api/trainers';
import { Clients } from '../../../api/clients';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
import styles from './styles';

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClient: true
    };
  }

  onSubmit = ({ fullname, username, skills }) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const location = {
          lat: latitude,
          long: longitude
        };

        if (this.state.isClient) {
          console.log('adding userinfo to clients');
          Clients.insert({
            fullname,
            username,
            _id: this.props.currentUserId
          });
        } else {
          console.log('adding userinfo to trainers');
          Trainers.insert({
            fullname,
            username,
            _id: this.props.currentUserId,
            skills,
            currentLocation: location
          });
        }
      });
    }
  };

  validate = () => {};

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        direction='row'
        alignItems='center'
        justify='center'
      >
        <Grid
          item
          xs={10}
          sm={6}
          md={6}
          lg={4}
          className={classes.loginWrapper}
        >
          <Paper className={classes.paper} elevation={3}>
            <img src='/light-logo.svg' alt='fitGO Logo' width='100%' />
            <Form
              onSubmit={this.onSubmit}
              validate={this.validate}
              render={({ handleSubmit, pristine, invalid, value }) => (
                <form onSubmit={handleSubmit}>
                  <Typography variant='h5' gutterBottom color='primary'>
                    Required Information
                  </Typography>
                  <Button
                    variant='outlined'
                    color='primary'
                    className={classes.button}
                    onClick={() => {
                      this.setState({ isClient: !this.state.isClient });
                    }}
                    fullWidth
                  >
                    {!this.state.isClient ? (
                      <Typography variant='button'>I am a client.</Typography>
                    ) : (
                      <Typography variant='button'>I am a trainer.</Typography>
                    )}
                  </Button>

                  <div>
                    <label>Full Name</label>
                    <Field
                      name='fullname'
                      component='input'
                      placeholder='Full Name'
                    />
                  </div>
                  <div>
                    <label>Username</label>
                    <Field
                      name='Username'
                      component='input'
                      placeholder='Username'
                    />
                  </div>

                  {/* <div className={classes.margin}>
                    <Grid container spacing={8} alignItems='flex-end'>
                      <Grid item>
                        <AccountCircle />
                      </Grid>
                      <Grid item>
                        <TextField
                          id='input-with-icon-grid'
                          label='With a grid'
                        />
                      </Grid>
                    </Grid>
                  </div> */}

                  {this.state.isClient ? null : (
                    <div>
                      <label>Skills</label>
                      <div>
                        <label>
                          <Field
                            name='skills'
                            component='input'
                            type='checkbox'
                            value='weightlifting'
                          />{' '}
                          Weight-lifting
                        </label>
                        <label>
                          <Field
                            name='skills'
                            component='input'
                            type='checkbox'
                            value='yoga'
                          />{' '}
                          Yoga
                        </label>
                      </div>
                    </div>
                  )}
                  <button type='submit' disabled={pristine || invalid}>
                    Submit
                  </button>
                </form>
              )}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('clients');
  Meteor.subscribe('trainers');
  return {
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(Onboard));
