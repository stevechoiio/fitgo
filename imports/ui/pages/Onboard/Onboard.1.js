import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from "styled-components";
// import a11yChecker from "a11y-checker";
import { Form, Field } from 'react-final-form';
import { withTracker } from 'meteor/react-meteor-data';
// import { ReactComponent } from "../media/logo.svg";

import { Meteor } from 'meteor/meteor';
import { Trainers } from '../../../api/trainers';
import { Clients } from '../../../api/clients';
import AccountForm from '../../components/AccountForm/AccountForm';
import './styles.js';

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClient: true
      // isTrainer: true
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
          console.log('adding userinfo to clients');
          Clients.insert({
            name,
            username,
            _id: this.props.currentUserId,
            email: this.props.currentUser.emails[0],
            goals,
            trainers: []
          });
        } else {
          console.log('adding userinfo to trainers');
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
      errors.name = 'Name Required';
    }
    if (!values.username) {
      errors.username = 'Username Required';
    }
    // if (!values.languages) {
    //   errors.languages = "Languages Info Required";
    // }

    // if (!values.phone) {
    //   errors.phone = "Phone Number Required";
    // }
    this.props.trainers.map(trainer => {
      if (values.username && trainer.username === values.username) {
        errors.username = 'username already exists as a trainer';
      }
    });
    // this.props.trainers.map(trainer => {
    //   if (values.phone && trainer.phone === values.phone) {
    //     errors.phone = "This phone number is already registered";
    //   }
    // });
    this.props.clients.map(client => {
      if (values.username && client.username === values.username) {
        errors.username = 'Username already exists as a client';
      }
    });
    // if (!this.state.isClient && !values.skills) {
    //   errors.skills = "Skills required";
    // }
    // return errors;
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
              <Field name='name'>
                {({ input, meta }) => (
                  <div>
                    <label>Name</label>
                    <input {...input} type='text' placeholder='Name' />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name='username'>
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <input {...input} type='text' placeholder='Username' />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            {this.state.isClient ? (
              <div>
                <Field name='goals'>
                  {({ input, meta }) => (
                    <div>
                      <label>Goals</label>
                      <input {...input} type='text' placeholder='Goals' />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
            ) : null}
            {this.state.isClient ? null : (
              <div>
                <div>
                  <Field name='phone'>
                    {({ input, meta }) => (
                      <div>
                        <label>Phone</label>
                        <input
                          {...input}
                          type='text'
                          placeholder='XXX-XXX-XXXX'
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div>
                  <Field name='education'>
                    {({ input, meta }) => (
                      <div>
                        <label>Education</label>
                        <input
                          {...input}
                          type='text'
                          placeholder='Educational Information'
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div>
                  <Field name='languages'>
                    {({ input, meta }) => (
                      <div>
                        <label>Languages</label>
                        <input
                          {...input}
                          type='text'
                          placeholder='Languages Info'
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <label>Skills</label>
                <div>
                  <label>
                    <Field
                      name='skills'
                      component='input'
                      type='checkbox'
                      value='yoga'
                    />{' '}
                    yoga
                  </label>
                  <label>
                    <Field
                      name='skills'
                      component='input'
                      type='checkbox'
                      value='crossfit'
                    />{' '}
                    crossfit
                  </label>
                  <label>
                    <Field
                      name='skills'
                      component='input'
                      type='checkbox'
                      value='weightlifting'
                    />{' '}
                    weight lifting
                  </label>
                  <label>
                    <Field
                      name='skills'
                      component='input'
                      type='checkbox'
                      value='strengthtraining'
                    />{' '}
                    strength training
                  </label>
                  <label>
                    <Field
                      name='skills'
                      component='input'
                      type='checkbox'
                      value='bodybuilding'
                    />{' '}
                    body building
                  </label>
                  <label>
                    <Field
                      name='skills'
                      component='input'
                      type='checkbox'
                      value='powerlifting'
                    />{' '}
                    power lifting
                  </label>
                  <label>
                    <Field
                      name='skills'
                      component='input'
                      type='checkbox'
                      value='running'
                    />{' '}
                    running
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
    );
  }
}
export default withTracker(() => {
  Meteor.subscribe('clients');
  Meteor.subscribe('trainers');
  console.log(Meteor.user());
  return {
    currentUserId: Meteor.userId(),
    currentUser: Meteor.user(),
    trainers: Trainers.find().fetch(),
    clients: Clients.find().fetch()
  };
})(Onboard);
