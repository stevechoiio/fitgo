import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Trainers } from "../../../api/trainers";
import { Clients } from "../../../api/clients";
import {
  Grid,
  Button,
  withStyles,
  Dialog,
  Fab,
  Typography,
  TextField,
  FormLabel,
  FormControl,
  FormGroup
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import classNames from "classnames";
import styles from "./styles";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClient: true,
      open: false
    };
  }

  onSubmit = ({
    name,
    username,
    skills,
    goals,
    phone,
    education,
    languages
  }) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const location = {
          latitude: latitude,
          longitude: longitude
        };
        if (this.state.isClient) {
          console.log("adding userinfo to clients");
          Clients.insert({
            name,
            username,
            _id: this.props.currentUserId,
            email: this.props.currentUser.emails[0],
            goals,
            trainers: []
          });
        } else {
          console.log("adding userinfo to trainers");
          Trainers.insert({
            name,
            username,
            _id: this.props.currentUserId,
            email: this.props.currentUser.emails[0],
            skills,
            currentLocation: location,
            phone,
            education,
            languages,
            clients: []
          });
        }
      });
    }
  };

  validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name Required";
    }
    if (!values.username) {
      errors.username = "Username Required";
    }
    this.props.clients.map(client => {
      if (values.username && client.username === values.username) {
        errors.username = "Username already registered";
      }
    });
    if (this.state.isClient && !values.goals) {
      errors.goals = "Goals Required";
    }
    this.props.trainers.map(trainer => {
      if (values.username && trainer.username === values.username) {
        errors.username = "Username already registered";
      }
    });
    this.props.trainers.map(trainer => {
      if (values.phone && trainer.phone === values.phone) {
        errors.phone = "Phone number already registered";
      }
    });
    if (!this.state.isClient && !values.languages) {
      errors.languages = "Languages Required";
    }
    if (!this.state.isClient && !values.phone) {
      errors.phone = "Phone Number Required";
    }
    if (!this.state.isClient && !values.skills) {
      errors.skills = "Skills Required";
    }
    if (!this.state.isClient && !values.education) {
      errors.education = "Education Information Required";
    }
    return errors;
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    console.log("TRAINERS -", this.props.trainers);
    console.log("CLIENTS -", this.props.clients);

    return (
      <Grid
        container
        className={classes.root}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Button
          variant="outlined"
          color="primary"
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
            aria-label="Close"
            className={classes.closeBtn}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </Fab>
          <Grid
            container
            className={classes.rootDialog}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <img src="/light-logo.svg" alt="fitGO Logo" width="33%" />
            <Grid item xs={10} sm={6} md={6} lg={4}>
              <Form
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <Typography variant="h5" gutterBottom color="primary">
                      Required Information
                    </Typography>

                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      onClick={() => {
                        this.setState({ isClient: !this.state.isClient });
                      }}
                      fullWidth
                    >
                      {!this.state.isClient ? (
                        <Typography variant="button">I am a client</Typography>
                      ) : (
                        <Typography variant="button">I am a trainer</Typography>
                      )}
                    </Button>

                    <Field name="name">
                      {({ input, meta }) => (
                        <FormControl fullWidth className={classes.formControl}>
                          <TextField
                            id="outlined-dense"
                            label="Fullname"
                            className={classNames(
                              classes.textField,
                              classes.dense
                            )}
                            margin="dense"
                            variant="outlined"
                            required
                            value={""}
                            {...input}
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </FormControl>
                      )}
                    </Field>

                    <Field name="username">
                      {({ input, meta }) => (
                        <FormControl fullWidth className={classes.formControl}>
                          <TextField
                            id="outlined-dense"
                            label="Username"
                            className={classNames(
                              classes.textField,
                              classes.dense
                            )}
                            margin="dense"
                            variant="outlined"
                            required
                            value={""}
                            {...input}
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </FormControl>
                      )}
                    </Field>

                    {this.state.isClient ? (
                      <Field name="goals">
                        {({ input, meta }) => (
                          <FormControl
                            fullWidth
                            className={classes.formControl}
                          >
                            <TextField
                              id="outlined-dense"
                              label="Goals"
                              className={classNames(
                                classes.textField,
                                classes.dense
                              )}
                              margin="dense"
                              variant="outlined"
                              required
                              value={""}
                              {...input}
                            />
                            {meta.error && meta.touched && (
                              <span>{meta.error}</span>
                            )}
                          </FormControl>
                        )}
                      </Field>
                    ) : null}

                    {this.state.isClient ? null : (
                      <Fragment>
                        <div className={classes.langPhone}>
                          <Field name="languages">
                            {({ input, meta }) => (
                              <FormControl
                                fullWidth
                                className={classes.formControl}
                              >
                                <TextField
                                  id="outlined-dense"
                                  label="Languages"
                                  className={classNames(
                                    classes.textField,
                                    classes.dense
                                  )}
                                  margin="dense"
                                  variant="outlined"
                                  required
                                  helperText="Separate languages with a comma."
                                  value={""}
                                  {...input}
                                />
                                {meta.error && meta.touched && (
                                  <span>{meta.error}</span>
                                )}
                              </FormControl>
                            )}
                          </Field>

                          <div className={classes.grow} />
                          <Field name="phone">
                            {({ input, meta }) => (
                              <FormControl
                                fullWidth
                                className={classes.formControl}
                              >
                                <TextField
                                  id="outlined-dense"
                                  label="Phone"
                                  className={classNames(
                                    classes.textField,
                                    classes.dense
                                  )}
                                  margin="dense"
                                  variant="outlined"
                                  required
                                  helperText="XXX-XXX-XXXX"
                                  value={""}
                                  {...input}
                                />
                                {meta.error && meta.touched && (
                                  <span>{meta.error}</span>
                                )}
                              </FormControl>
                            )}
                          </Field>
                        </div>

                        <Field name="education">
                          {({ input, meta }) => (
                            <div>
                              <TextField
                                id="outlined-dense"
                                label="Education"
                                className={classNames(
                                  classes.textField,
                                  classes.dense
                                )}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                                required
                                value={""}
                                {...input}
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>

                        <FormControl
                          required
                          component="fieldset"
                          className={classes.formControl}
                        >
                          <FormLabel component="legend">
                            Pick one or more
                          </FormLabel>
                          <FormGroup className={classes.skills}>
                            {/* start of skills */}
                            {/* <label>Skills</label> */}
                            <div>
                              <label>
                                <Field
                                  name="skills"
                                  component="input"
                                  type="checkbox"
                                  value="yoga"
                                />{" "}
                                yoga
                              </label>
                              <label>
                                <Field
                                  name="skills"
                                  component="input"
                                  type="checkbox"
                                  value="crossfit"
                                />{" "}
                                crossfit
                              </label>
                              <label>
                                <Field
                                  name="skills"
                                  component="input"
                                  type="checkbox"
                                  value="weightlifting"
                                />{" "}
                                weight lifting
                              </label>
                              <label>
                                <Field
                                  name="skills"
                                  component="input"
                                  type="checkbox"
                                  value="strengthtraining"
                                />{" "}
                                strength training
                              </label>
                              <label>
                                <Field
                                  name="skills"
                                  component="input"
                                  type="checkbox"
                                  value="bodybuilding"
                                />{" "}
                                body building
                              </label>
                              <label>
                                <Field
                                  name="skills"
                                  component="input"
                                  type="checkbox"
                                  value="powerlifting"
                                />{" "}
                                power lifting
                              </label>
                              <label>
                                <Field
                                  name="skills"
                                  component="input"
                                  type="checkbox"
                                  value="running"
                                />{" "}
                                running
                              </label>
                            </div>
                          </FormGroup>
                        </FormControl>
                      </Fragment>
                    )}

                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      fullWidth
                      type="submit"
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
  Meteor.subscribe("clients");
  Meteor.subscribe("trainers");
  console.log(Meteor.user());
  return {
    currentUserId: Meteor.userId(),
    currentUser: Meteor.user(),
    trainers: Trainers.find().fetch(),
    clients: Clients.find().fetch()
  };
})(withStyles(styles)(Onboard));
