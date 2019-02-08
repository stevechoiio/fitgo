import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import GoogleMaps from '../../../ui/components//Map';
import OptionBar from '../../components/OptionBar';
import styles from './styles';

const Feature = ({ classes }) => {
  return (
    <Grid
      container
      className={classes.root}
      direction='row'
      alignItems='center'
      justify='center'
    >
      <Grid item xs={12} sm={12} md={6}>
        FEATURE
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <GoogleMaps />
        <OptionBar />
      </Grid>
    </Grid>
  );
};

export default Feature;
