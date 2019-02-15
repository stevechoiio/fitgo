import React, { Component } from 'react';
import { Clients } from '../../../api/clients';
import { Trainers } from '../../../api/trainers';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  Button,
  Chip,
  Typography,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core/styles';
import Email from '@material-ui/icons/Email';
import Goal from '@material-ui/icons/FlashOn';
import styles from './styles';
import { CardActionArea } from '@material-ui/core';

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
          className={classes.rootClients}
          // spacing={24}
          justify='flex-start'
          // direction='row'
          // alignItems='center'
          // justify='center'
        >
          <Typography
            variant='h3'
            gutterBottom
            color='primary'
            className={classes.heading}
          >
            Clients
          </Typography>

          {filteredClients.map(client => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className={classes.control}
              key={client._id}
            >
              <Card className={classes.card}>
                <CardActionArea>
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
                    <Typography
                      variant='overline'
                      gutterBottom
                      color='secondary'
                    >
                      {/* <Goal /> */}
                      GOALS
                    </Typography>
                    <Typography variant='overline' gutterBottom>
                      <Goal />
                      {client.goals}
                    </Typography>
                    <Chip
                      icon={<Email />}
                      label={`EMAIL - ${client.email}`}
                      className={classes.chip}
                      color='secondary'
                    />
                  </div>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Unlike
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

ClientsList.propTypes = {
  name: PropTypes.string,
  goals: PropTypes.string,
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
