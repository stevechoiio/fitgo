import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clients } from '../../../api/clients';
import { Trainers } from '../../../api/trainers';
import Email from '@material-ui/icons/Email';
import Goal from '@material-ui/icons/FlashOn';
import {
  withStyles,
  Grid,
  Chip,
  Typography,
  Avatar,
  Card
} from '@material-ui/core';
import styles from './styles';

const ClientsList = ({ classes, currentUserId, clients, trainers }) => {
  const filteredtrainers = trainers.filter(
    trainer => trainer._id === currentUserId
  );

  const filteredClients = clients.filter(client => {
    return filteredtrainers.find(trainer => {
      return trainer.clients.includes(client._id);
    });
  });
  return (
    <div>
      <Grid
        container
        className={classes.rootClients}
        justify='flex-start'
        direction='row'
      >
        {filteredClients.length === 0 ? null : (
          <Typography
            variant='h3'
            gutterBottom
            color='primary'
            className={classes.heading}
          >
            Clients
          </Typography>
        )}

        {filteredClients.map(client => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            className={classes.control}
            key={client._id}
          >
            <Card className={classes.profileWrapper}>
              <Fragment>
                <div className={classes.profileInfo}>
                  <Typography variant='h4' gutterBottom>
                    {client.name}
                  </Typography>
                  <Typography
                    variant='h6'
                    gutterBottom
                    color='primary'
                    className={classes.subtitle}
                  >
                    <Goal />
                    &nbsp;GOALS
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    {client.goals}
                  </Typography>
                  <Chip
                    icon={<Email />}
                    label={`EMAIL - ${client.email}`}
                    className={classes.chip}
                    color='secondary'
                  />
                </div>
                <div className={classes.grow} />
                <Grid container className={classes.avatarWrapper}>
                  <Avatar
                    alt=''
                    src='http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg'
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

ClientsList.propTypes = {
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
})(withStyles(styles)(ClientsList));
