import React, { Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clients } from '../../../api/clients';
import { Trainers } from '../../../api/trainers';
import Email from '@material-ui/icons/Email';
import Skill from '@material-ui/icons/FlashOn';
import Education from '@material-ui/icons/School';
import Language from '@material-ui/icons/Language';
import Phone from '@material-ui/icons/Smartphone';
import {
  withStyles,
  Grid,
  Chip,
  Typography,
  Avatar,
  Card,
  CardActions
} from '@material-ui/core';
import classNames from 'classnames';
import UnlikeButton from '../UnlikeButton';
import styles from './styles';

const FavouriteTrainers = ({ classes, trainers, currentUserId, clients }) => {
  const filteredClients = clients.filter(
    client => client._id === currentUserId
  );

  const filteredTrainers = trainers.filter(trainer => {
    return filteredClients.find(client => {
      return client.trainers.includes(trainer._id);
    });
  });

  return (
    <div>
      <Grid container className={classes.rootTrainers} justify='flex-start'>
        {filteredTrainers.length === 0 ? null : (
          <Typography
            variant='h3'
            gutterBottom
            color='primary'
            className={classes.heading}
          >
            Trainers
          </Typography>
        )}

        {filteredTrainers.map(trainer => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            className={classes.control}
            key={trainer._id}
          >
            <Card className={classes.profileWrapper}>
              <Fragment>
                <div className={classes.profileInfo}>
                  <Typography variant='h4' gutterBottom>
                    {trainer.name}
                  </Typography>
                  <Typography
                    variant='h6'
                    color='primary'
                    className={classes.subtitle}
                  >
                    <Education />
                    &nbsp;EDUCATION
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    {trainer.education}
                  </Typography>
                  <Typography
                    variant='h6'
                    color='primary'
                    className={classes.subtitle}
                  >
                    <Skill />
                    &nbsp;SKILLS
                  </Typography>
                  <Typography
                    variant='body1'
                    gutterBottom
                    className={classes.capitalize}
                  >
                    {trainer.skills.join(', ')}
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
                  <CardActions>
                    <UnlikeButton trainerID={trainer._id} />
                  </CardActions>
                </div>
                <div className={classes.grow} />
                <Grid container className={classes.avatarWrapper}>
                  <Avatar
                    alt='Trainer Profile Image'
                    src='http://www.laughspark.info/thumbfiles/290X169/cute-funny-cat-doing-yoga-635731348673174049-13773.jpg'
                    className={classes.avatar}
                  />
                </Grid>
              </Fragment>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

FavouriteTrainers.propTypes = {
  classes: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired,
  currentUserId: PropTypes.string.isRequired,
  trainers: PropTypes.array.isRequired
};

export default withTracker(() => {
  Meteor.subscribe('clients');
  Meteor.subscribe('trainers');
  return {
    trainers: Trainers.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({}).fetch()
  };
})(withStyles(styles)(FavouriteTrainers));
