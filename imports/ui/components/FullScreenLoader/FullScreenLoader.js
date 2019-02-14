import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { Typography, withStyles } from "@material-ui/core/";
import CircularProgress from "@material-ui/core/CircularProgress";

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

const FullScreenLoader = ({ classes }) => {
  return (
    <div className={classes.loaderContainer}>
      <Typography className={classes.loaderText}>
        Conditionally Display...
      </Typography>
    </div>
  );
};

export default withStyles(styles)(FullScreenLoader);
