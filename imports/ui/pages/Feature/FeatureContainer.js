import React, { Fragment } from 'react';
import Feature from './Feature';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const FeatureContainer = ({ classes }) => {
  return (
    <Fragment>
      <Feature />
    </Fragment>
  );
};

export default withStyles(styles)(FeatureContainer);
