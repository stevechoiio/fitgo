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

  validate = () => {};
  render() {
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
              <label>Full Name</label>
              <Field
                name="fullname"
                component="input"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label>Username</label>
              <Field name="Username" component="input" placeholder="Username" />
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
                      value="weightlifting"
                    />{" "}
                    Weight-lifting
                  </label>
                  <label>
                    <Field
                      name="skills"
                      component="input"
                      type="checkbox"
                      value="yoga"
                    />{" "}
                    Yoga
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
    currentUserId: Meteor.userId()
  };
})(Onboard);
