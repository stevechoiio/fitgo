import React, { Component } from "react";
import { Clients } from "../../../api/clients";
import { Trainers } from "../../../api/trainers";
import { withTracker } from "meteor/react-meteor-data";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Email from "@material-ui/icons/Email";
import Education from "@material-ui/icons/School";
import Language from "@material-ui/icons/Language";
import Skill from "@material-ui/icons/AddCircleOutline";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class FavoriteTrainers extends Component {
  componentDidMount() {
    // const trainers = this.props.trainers.filter((trainer) => trainer.username === currentUser.username)
    // console.log(trainers);
  }

  render() {
    const { classes, trainers, clients} = this.props;
   
    console.log(trainers);
    console.log(clients)
    // const trainers = this.props.trainers.filter(
    //   trainer => trainer._id === clients.trainers[indexedDB]
    // );


    return (
      <div>
        <Grid
          container
          className={classes.root}
          direction="row"
          alignItems="center"
          justify="center"
        >
          {trainers.map(trainer => (
            <Grid item xs={12} sm={12} md={8} key={trainer._id}>
              <Paper className={classes.profileWrapper} elevation={3}>
                <Grid container className={classes.avatarWrapper}>
                  <Avatar
                    alt=""
                    src="http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg"
                    className={classes.avatar}
                  />
                </Grid>
                <div className={classes.profileInfo}>
                  <Typography variant="h2" gutterBottom>
                    {trainer.name}
                  </Typography>

                  <Chip
                    // icon={<Email />}
                    label={`Phone - ${trainer.phone}`}
                    className={classes.chip}
                    color="secondary"
                  />
                   <Chip
                    icon={<Email />}
                    label={`EMAIL - ${trainer.email}`}
                    className={classes.chip}
                    color="secondary"
                  />

                  {/* <Chip
                    icon={<Skill />}
                    label={`SKILLS - ${trainer.skills.join(", ")}`}
                    className={classes.chip}
                    color="secondary"
                  /> */}
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("clients"); // NEW!
  Meteor.subscribe("trainers");
  console.log(Meteor.user());
  return {
    trainers: Trainers.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({}).fetch()
  };
})(withStyles(styles)(FavoriteTrainers));
