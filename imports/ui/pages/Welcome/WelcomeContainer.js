import React, { Fragment } from 'react';
import Welcome from './Welcome';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const WelcomeContainer = ({ classes }) => {
  return (
    <Fragment>
      <Welcome classes={classes} />
    </Fragment>
  );
};

export default withStyles(styles)(WelcomeContainer);
