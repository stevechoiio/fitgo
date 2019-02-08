import React, { Fragment } from 'react';
import Welcome from './Welcome';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const WelcomeContainer = () => {
  return (
    <Fragment>
      <Welcome />
    </Fragment>
  );
};

export default withStyles(styles)(WelcomeContainer);
