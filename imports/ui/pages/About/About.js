import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import OptionList from "../../components/OptionsList";

const About = ({ classes }) => {
  return (
    <div>
      <Typography className={classes.description}>
        FitGo is a desktop application made for personal trainers and clients to
        be able to more easily connect with one another. It features a map that
        allows clients to view personal trainers in their area, with the ability
        to filter specific skills that they're looking for in a trainer. The
        client can also adjust the distance/radius that they are searching from
        based on their current location, and "favorite" certain trainers to be
        saved in a convenient list for later reference. Clients and trainers
        also have their own profiles listing further details about what skills
        and certification they have.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(About);
