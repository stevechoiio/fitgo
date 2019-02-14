import React, { Fragment } from "react";
import Profile from "./Profile";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Clients } from "../../../../imports/api/clients";
import { withRouter } from "react-router-dom";

const ProfileContainer = ({ classes }) => {
  return (
    <Fragment>
      <Profile />
    </Fragment>
  );
};

//export default withStyles(styles)(ProfileContainer);

export default withRouter(ProfileContainer);
