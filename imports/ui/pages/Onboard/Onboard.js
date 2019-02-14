import React, { Component } from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
// import a11yChecker from "a11y-checker";
import { Form, Field } from "react-final-form";
import { withTracker } from "meteor/react-meteor-data";
// import { ReactComponent } from "../media/logo.svg";

import "./styles.css";
import { Meteor } from "meteor/meteor";

import { Trainers } from "../../../api/trainers";
import { Clients } from "../../../api/clients";

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
          console.log("adding userinfo to clients");
          Clients.insert({
            fullname,
            username,
            _id: this.props.currentUserId,
            trainers: []
          });
        } else {
          console.log("adding userinfo to trainers");
          Trainers.insert({
            fullname,
            username,
            _id: this.props.currentUserId,
            skills,
            currentLocation: location,
            clients: []
          });
        }
      });
    }
  };

  validate = values => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "fullname Required";
    }

    if (!values.username) {
      errors.username = "username required";
    }
    this.props.trainers.map(trainer => {
      if (values.username && trainer.username === values.username) {
        errors.username = "username already exists as a trainer";
      }
    });
    this.props.clients.map(client => {
      if (values.username && client.username === values.username) {
        errors.username = "username already exists as a client";
      }
    });

    if (!this.state.isClient && !values.skills) {
      errors.skills = "skills required";
    }
    return errors;
  };
  render() {
    console.log(this.props.trainers);
    console.log(this.props.clients);
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid, value }) => (
          <form onSubmit={handleSubmit}>
            <h2>We need your information</h2>
            <button
              onClick={() => {
                this.setState({ isClient: !this.state.isClient });
              }}
            >
              {!this.state.isClient ? (
                <h1>I am a client</h1>
              ) : (
                <h2>I am a trainer</h2>
              )}
            </button>

            <div>
              {/* <label>Full Name</label> */}
              <Field name="fullname">
                {({ input, meta }) => (
                  <div>
                    <label>Full Name</label>
                    <input {...input} type="text" placeholder="Full Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="username">
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <input {...input} type="text" placeholder="Username" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            {this.state.isClient ? null : (
              <div>
                <label>Skills</label>
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
              </div>
            )}
            <button type="submit" disabled={pristine || invalid}>
              Submit
            </button>
          </form>
        )}
      />
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("clients");
  Meteor.subscribe("trainers");
  return {
    currentUserId: Meteor.userId(),
    trainers: Trainers.find().fetch(),
    clients: Clients.find().fetch()
  };
})(Onboard);
