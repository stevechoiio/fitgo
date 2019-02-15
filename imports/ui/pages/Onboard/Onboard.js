import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { withTracker } from 'meteor/react-meteor-data';
import { withStyles } from '@material-ui/core/styles';
import { Meteor } from 'meteor/meteor';
import { Trainers } from '../../../api/trainers';
import { Clients } from '../../../api/clients';
import { Grid, Paper, Typography, Button, TextField } from '@material-ui/core';
import classNames from 'classnames';
import validate from './helpers/validation';
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
              // validate={values => {
              //   return validate(values);
              // }}
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

                  <TextField
                    id='outlined-dense'
                    label='Fullname'
                    className={classNames(classes.textField, classes.dense)}
                    margin='dense'
                    variant='outlined'
                    fullWidth
                    required
                  />
                  <TextField
                    id='outlined-dense'
                    label='Username'
                    className={classNames(classes.textField, classes.dense)}
                    margin='dense'
                    variant='outlined'
                    fullWidth
                    required
                  />

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
                  {/* <button type='submit' disabled={pristine || invalid}>
                    Submit
                  </button> */}
                  <Button
                    variant='outlined'
                    color='primary'
                    className={classes.button}
                    onClick={() => {
                      this.setState({ isClient: !this.state.isClient });
                    }}
                    fullWidth
                    disabled={pristine || invalid}
                  >
                    Submit
                  </Button>
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
