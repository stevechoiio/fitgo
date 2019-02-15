import React, { Component } from 'react';
import { Clients } from '../../../api/clients';
import { Trainers } from '../../../api/trainers';
import { withTracker } from 'meteor/react-meteor-data';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Email from '@material-ui/icons/Email';
import Goal from '@material-ui/icons/FlashOn';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import PropTypes from 'prop-types';

class ClientsList extends Component {
  componentDidMount() {}

  render() {
    const { classes, trainers, clients } = this.props;
    const filteredClients = clients.filter(client => {
      return trainers.find(trainer => {
        return trainer.clients.includes(client._id);
      });
    });

    console.log(filteredClients);

    return (
      <div>
        <Grid
          container
          className={classes.root}
          direction='row'
          alignItems='center'
          justify='center'
        >
          {filteredClients.map(client => (
            <Grid item xs={12} sm={12} md={8} key={client._id}>
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

                  <Chip
                    icon={<Goal />}
                    label={`GOALS - ${client.goals}`}
                    className={classes.chip}
                    color='secondary'
                  />
                  <Chip
                    icon={<Email />}
                    label={`EMAIL - ${client.email}`}
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

ClientsList.propTypes = {
  name: PropTypes.string,
  goal: PropTypes.string,
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
})(withStyles(styles)(ClientsList));
