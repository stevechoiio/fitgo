import React, { Component, Fragment } from "react";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import { Clients } from "../../../api/clients";
import { Trainers } from "../../../api/trainers";
import Email from "@material-ui/icons/Email";
import Skill from "@material-ui/icons/FlashOn";
import Education from "@material-ui/icons/School";
import Language from "@material-ui/icons/Language";
import Phone from "@material-ui/icons/Smartphone";
import {
  withStyles,
  Grid,
  Chip,
  Typography,
  Avatar,
  Card,
  CardActions
} from "@material-ui/core";
import classNames from "classnames";
import UnlikeButton from "../UnlikeButton";
import styles from "./styles";

class FavouriteTrainers extends Component {
  componentDidMount() {}

  render() {
    const { classes, trainers, currentUserId } = this.props;

    const clients = this.props.clients.filter(
      client => client._id === currentUserId
    );

    const filteredTrainers = trainers.filter(trainer => {
      return clients.find(client => {
        return client.trainers.includes(trainer._id);
      });
    });

    return (
      <div>
        <Grid
          container
          className={classes.rootTrainers}
          justify="flex-start"
          // direction="row"
        >
          {filteredTrainers.length === 0 ? null : (
            <Typography
              variant="h3"
              gutterBottom
              color="primary"
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
                    <Typography variant="h4" gutterBottom>
                      {trainer.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom color="secondary">
                      <Education /> EDUCATION
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      className={classes.education}
                    >
                      {trainer.education}
                    </Typography>
                    <Chip
                      icon={<Phone />}
                      label={`PHONE - ${trainer.phone}`}
                      className={classes.chip}
                      color="secondary"
                    />
                    <Chip
                      icon={<Email />}
                      label={`EMAIL - ${trainer.email}`}
                      className={classes.chip}
                      color="secondary"
                    />
                    <Chip
                      icon={<Language />}
                      label={`LANGUAGES - ${trainer.languages}`}
                      className={classNames(classes.chip, classes.languages)}
                      color="secondary"
                    />
                    <Chip
                      icon={<Skill />}
                      label={`SKILLS - ${trainer.skills.join(", ")}`}
                      className={classNames(classes.chip, classes.skills)}
                      color="secondary"
                    />
                    <CardActions>
                      <UnlikeButton trainerID={trainer._id} />
                    </CardActions>
                  </div>
                  <div className={classes.grow} />
                  <Grid container className={classes.avatarWrapper}>
                    <Avatar
                      alt="Trainer Profile Image"
                      src="http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg"
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
  }
}

FavouriteTrainers.propTypes = {
  classes: PropTypes.object
};

export default withTracker(() => {
  Meteor.subscribe("clients");
  Meteor.subscribe("trainers");
  console.log(Meteor.user());
  return {
    trainers: Trainers.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({}).fetch()
  };
})(withStyles(styles)(FavouriteTrainers));
