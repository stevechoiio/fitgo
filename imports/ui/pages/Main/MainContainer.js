import React, { Fragment } from 'react';
import Main from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const MainContainer = ({ classes }) => {
  return (
    <Fragment>
      <Main />
    </Fragment>
  );
};

export default withStyles(styles)(MainContainer);
