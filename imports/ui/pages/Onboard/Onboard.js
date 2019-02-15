import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Trainers } from '../../../api/trainers';
import { Clients } from '../../../api/clients';
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  withStyles,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  Toolbar,
  IconButton,
  Fab
} from '@material-ui/core';
import classNames from 'classnames';
import validate from './helpers/validation';
import styles from './styles';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction='up' {...props} />;
}

class Onboard extends Component {
  constructor(props) {
    super(props);
    // state = {
    //   open: false
    // };
    this.state = {
      isClient: true,
      yoga: false,
      crossfit: false,
      weighttraining: false,
      strengthtraining: false,
      bodybuilding: false,
      powerlifting: false,
      running: false,
      open: false // dialog
    };
  }

  handleChange = skill => event => {
    this.setState({ [skill]: event.target.checked });
    console.log('Skills', this.state.skill);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
    const {
      yoga,
      crossfit,
      weighttraining,
      strengthtraining,
      bodybuilding,
      powerlifting,
      running
    } = this.state;

    return (
      <Grid
        container
        className={classes.root}
        direction='row'
        alignItems='center'
        justify='center'
      >
        <Button
          variant='outlined'
          color='primary'
          onClick={this.handleClickOpen}
        >
          Let's Get Moving!
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <Fab
            aria-label='Close'
            className={classes.closeBtn}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </Fab>
          <Grid
            container
            className={classes.rootDialog}
            direction='row'
            alignItems='center'
            justify='center'
          >
            <img src='/light-logo.svg' alt='fitGO Logo' width='50%' />
            <Grid item xs={10} sm={6} md={6} lg={4}>
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
                        <Typography variant='button'>I am a client</Typography>
                      ) : (
                        <Typography variant='button'>I am a trainer</Typography>
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
                      // <div>
                      //   <label>Skills</label>
                      //   <div>
                      //     <label>
                      //       <Field
                      //         name='skills'
                      //         component='input'
                      //         type='checkbox'
                      //         value='weightlifting'
                      //       />{' '}
                      //       Weight-lifting
                      //     </label>
                      //     <label>
                      //       <Field
                      //         name='skills'
                      //         component='input'
                      //         type='checkbox'
                      //         value='yoga'
                      //       />{' '}
                      //       Yoga
                      //     </label>
                      //   </div>
                      // </div>

                      <FormControl
                        required
                        component='fieldset'
                        className={classes.formControl}
                      >
                        <FormLabel component='legend'>
                          Pick one or more
                        </FormLabel>
                        <FormGroup className={classes.skills}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={yoga}
                                onChange={this.handleChange('yoga')}
                                value='yoga'
                              />
                            }
                            label='Yoga'
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={crossfit}
                                onChange={this.handleChange('crossfit')}
                                value='crossfit'
                              />
                            }
                            label='Crossfit'
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={weighttraining}
                                onChange={this.handleChange('weighttraining')}
                                value='weighttraining'
                              />
                            }
                            label='Weight Training'
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={strengthtraining}
                                onChange={this.handleChange('strengthtraining')}
                                value='strengthtraining'
                              />
                            }
                            label='Strength Training'
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={bodybuilding}
                                onChange={this.handleChange('bodybuilding')}
                                value='bodybuilding'
                              />
                            }
                            label='Body Building'
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={powerlifting}
                                onChange={this.handleChange('powerlifting')}
                                value='powerlifting'
                              />
                            }
                            label='Power Lifting'
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={running}
                                onChange={this.handleChange('running')}
                                value='running'
                              />
                            }
                            label='Running'
                          />
                        </FormGroup>
                      </FormControl>
                    )}
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
            </Grid>
          </Grid>
        </Dialog>
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
