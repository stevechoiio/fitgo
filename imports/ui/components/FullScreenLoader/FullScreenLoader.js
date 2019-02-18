import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  withStyles,
  Grid,
  CircularProgress
} from '@material-ui/core/';
import styles from './styles';

const FullScreenLoader = ({ classes }) => {
  return (
    <Grid
      container
      className={classes.container}
      justify='center'
      alignItems='center'
    >
      <Grid item className={classes.wrapper}>
        <img src='/light-logo.svg' alt='fitGO Logo' width='80' />
        <CircularProgress
          size={120}
          className={classes.progress}
          color='secondary'
        />
        <Typography variant='h3' className={classes.message} color='primary'>
          Conditionally Display...
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(FullScreenLoader);
