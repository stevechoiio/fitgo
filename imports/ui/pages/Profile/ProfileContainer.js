import React, { Fragment } from "react";
import Profile from "./Profile";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ProfileContainer = ({ classes }) => {
  return (
    <Fragment>
      <Profile />
    </Fragment>
  );
};

export default withStyles(styles)(ProfileContainer);
