import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import FullScreenLoader from "../../components/FullScreenLoader/";
import { Meteor } from "meteor/meteor";
import { Typography, withStyles, Grid } from "@material-ui/core";

class About extends Component {
  render() {
    const { classes, currentUserId } = this.props;
    if (!currentUserId) {
      return <FullScreenLoader />;
    } else {
      return (
        <Grid
          container
          className={classes.root}
          direction="row"
          alignItems="center"
          justify="center"
        >
           <div className={classes.banner}>
          <Grid item xs={12} sm={12} md={4} className={classes.statement}>
            <Typography component="h2" variant="h3" gutterBottom>
              About Us
            </Typography>
            <Typography  component="h1" className={classes.description} gutterBottom>
              FitGo is a web application that gives users a more convenient
              access to personal trainers nearby. The main feature of the app is
              a map that will help users filter personal trainers by distance
              and by skills. Users will see personal trainers info and can add
              trainers to favorite list as they wish. Personal trainers will
              also have a profile page and see a list of users that have favored
              them.
            </Typography>
          </Grid>
          </div>
        </Grid>
      );
    }
  }
}
About.propTypes = {
  classes: PropTypes.object
};
export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(About));
