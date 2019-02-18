import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withTracker } from "meteor/react-meteor-data";
import FullScreenLoader from "../../components/FullScreenLoader/";

const About = ({ classes, currentUserId } = this.props) => {
  if (!currentUserId) {
    return <FullScreenLoader />;
  } else {
    return <div />;
  }
};

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(About));
