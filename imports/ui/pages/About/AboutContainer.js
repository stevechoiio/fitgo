import React, { Fragment } from "react";
import About from "./About";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Clients } from "../../../api/clients";
import { withRouter } from "react-router-dom";

const AboutContainer = ({ classes }) => {
  return (
    <Fragment>
      <About classes={classes} />
    </Fragment>
  );
};

export default withRouter(AboutContainer);
