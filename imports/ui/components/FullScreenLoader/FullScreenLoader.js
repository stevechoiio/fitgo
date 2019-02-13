import React, { Fragment } from "react";
import styles from "./styles";
import { Typography, withStyles } from "@material-ui/core/";

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
