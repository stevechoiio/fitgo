import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Typography, withStyles } from "@material-ui/core/";
import CircularProgress from "@material-ui/core/CircularProgress";

const FullScreenLoader = ({ classes }) => {
  return (
    <div className={classes.loaderContainer}>
      <CircularProgress className={classes.progress} />
      <Typography className={classes.loaderText}>
        Conditionally Display...
      </Typography>
    </div>
  );
};

export default withStyles(styles)(FullScreenLoader);
