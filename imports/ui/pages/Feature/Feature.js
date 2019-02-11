import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import GoogleMaps from '../../../ui/components//Map';
import OptionBar from '../../components/OptionBar';
import TrainersDrawer from '../../components/TrainersDrawer';

import styles from './styles';

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 50
    };
  }
  radiusChanger = (event, value) => {
    this.setState({ radius: value });
  };
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        direction='row'
        alignItems='center'
        justify='center'
      >
        {/* <Grid item xs={12} sm={12} md={6}>
          FEATURE
        </Grid> */}
        {/* <TrainersDrawer /> */}
        <Grid item xs={12} sm={12}>
          <GoogleMaps radius={this.state.radius} />
          <OptionBar radiusChanger={this.radiusChanger} />
        </Grid>
      </Grid>
    );
  }
}
// const Feature = ({ classes }) => {
//   return (
//     <Grid
//       container
//       className={classes.root}
//       direction="row"
//       alignItems="center"
//       justify="center"
//     >
//       <Grid item xs={12} sm={12} md={6}>
//         FEATURE
//       </Grid>
//       <Grid item xs={12} sm={12} md={6}>
//         <GoogleMaps />
//         <OptionBar />
//       </Grid>
//     </Grid>
//   );
// };

export default Feature;
