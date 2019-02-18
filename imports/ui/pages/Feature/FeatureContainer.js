import React from "react";
import Feature from "./Feature";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const FeatureContainer = ({ classes }) => <Feature classes={classes} />;

export default withStyles(styles)(FeatureContainer);
