import React, { Component } from 'react';
import { Clients } from '../../../api/clients';
import { Trainers } from '../../../api/trainers';
import { withTracker } from 'meteor/react-meteor-data';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Email from '@material-ui/icons/Email';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

class FavoriteTrainers extends Component {
  componentDidMount() {}

  render() {
    const { classes, trainers, clients } = this.props;

    console.log(trainers);
    console.log(clients);
    // const trainers = this.props.trainers.filter(
    //   trainer => trainer._id === clients.trainers[indexedDB]
    // );
    const filteredTrainers = trainers.filter(trainer => {
      return clients.find(client => {
        return client.trainers.includes(trainer._id);
      });
    });

    return (
      <div>
        <Grid
          container
          className={classes.root}
          direction='row'
          alignItems='center'
          justify='center'
        >
          <Typography
            variant='h3'
            gutterBottom
            color='primary'
            className={classes.heading}
          >
            Favourite Trainers
          </Typography>
          {filteredTrainers.map(trainer => (
            <Grid item xs={12} sm={12} md={8} key={trainer._id}>
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
                    {trainer.name}
                  </Typography>

                  <Chip
                    label={`Phone - ${trainer.phone}`}
                    className={classes.chip}
                    color='secondary'
                  />
                  <Chip
                    icon={<Email />}
                    label={`EMAIL - ${trainer.email}`}
                    className={classes.chip}
                    color='secondary'
                  />
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

FavoriteTrainers.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string
};

export default withTracker(() => {
  Meteor.subscribe('clients'); // NEW!
  Meteor.subscribe('trainers');
  console.log(Meteor.user());
  return {
    trainers: Trainers.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({}).fetch()
  };
})(withStyles(styles)(FavoriteTrainers));
