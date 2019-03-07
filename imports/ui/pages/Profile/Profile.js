import React, { Component } from 'react';
import { Clients } from '../../../api/clients';
import { Trainers } from '../../../api/trainers';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
  Grid,
  Paper,
  Chip,
  Typography,
  Avatar
} from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import Language from '@material-ui/icons/Language';
import Skill from '@material-ui/icons/AddCircleOutline';
import Phone from '@material-ui/icons/Smartphone';
import FavouriteTrainers from '../../components/FavouriteTrainers';
import ClientsList from '../../components/ClientsList';
import classNames from 'classnames';
import styles from './styles';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    const { classes, currentUserId } = this.props;
    const trainers = this.props.trainers.filter(
      trainer => trainer._id === currentUserId
    );
    const clients = this.props.clients.filter(
      client => client._id === currentUserId
    );

    return (
      <Grid
        container
        className={classes.root}
        direction='row'
        alignItems='center'
        justify='center'
      >
        {trainers.map(trainer => (
          <Grid container justify='center' key={trainer._id}>
            <Grid item xs={12} sm={12} md={8}>
              <Paper className={classes.profileWrapper} elevation={3}>
                <div className={classes.profileInfo}>
                  <Typography
                    variant='h2'
                    gutterBottom
                    className={classes.capitalize}
                  >
                    {trainer.name}
                  </Typography>
                  <Typography variant='h6' color='secondary'>
                    EDUCATION
                  </Typography>
                  <Typography variant='h6' gutterBottom>
                    {trainer.education}
                  </Typography>
                  <Chip
                    icon={<Phone />}
                    label={`PHONE - ${trainer.phone}`}
                    className={classes.chip}
                    color='secondary'
                  />
                  <Chip
                    icon={<Email />}
                    label={`EMAIL - ${trainer.email}`}
                    className={classes.chip}
                    color='secondary'
                  />
                  <Chip
                    icon={<Language />}
                    label={`LANGUAGES - ${trainer.languages}`}
                    className={classNames(classes.chip, classes.capitalize)}
                    color='secondary'
                  />
                  <Chip
                    icon={<Skill />}
                    label={`SKILLS - ${trainer.skills.join(', ')}`}
                    className={classNames(classes.chip, classes.capitalize)}
                    color='secondary'
                  />
                </div>
                <div className={classes.grow} />
                <Grid container className={classes.avatarWrapper}>
                  <Avatar
                    alt=''
                    src='http://www.laughspark.info/thumbfiles/290X169/cute-funny-cat-doing-yoga-635731348673174049-13773.jpg'
                    className={classes.avatar}
                  />
                </Grid>
              </Paper>
            </Grid>
            <ClientsList />
          </Grid>
        ))}

        {clients.map(client => (
          <Grid container justify='center' key={client._id}>
            <Grid item xs={12} sm={12} md={8}>
              <Paper className={classes.profileWrapper} elevation={3}>
                <Grid container className={classes.avatarWrapper}>
                  <Avatar
                    alt=''
                    src='http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg'
                    className={classes.avatar}
                  />
                </Grid>
                <div className={classes.profileInfo}>
                  <Typography variant='h2' gutterBottom>
                    {client.name}
                  </Typography>
                  <Typography variant='h5' gutterBottom>
                    {client.goals}
                  </Typography>
                  <Chip
                    icon={<Email />}
                    label={`EMAIL - ${client.email}`}
                    className={classes.chip}
                    color='secondary'
                  />
                </div>
              </Paper>
            </Grid>
            <FavouriteTrainers />
          </Grid>
        ))}
      </Grid>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired,
  currentUserId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  trainers: PropTypes.array.isRequired
};

export default withTracker(() => {
  Meteor.subscribe('clients');
  Meteor.subscribe('trainers');
  return {
    trainers: Trainers.find({}).fetch(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({}).fetch()
  };
})(withStyles(styles)(withRouter(Profile)));
