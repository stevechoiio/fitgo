import React from 'react';
import ReactDOM from 'react-dom';
// import WelcomeBg from '../../../images/welcome.jpg';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountsUIWrapper from '../../components/AccountsUIWrapper/';
import styles from './styles';

const Welcome = ({ classes }) => {
  return (
    <Grid
      container
      className={classes.root}
      direction='row'
      alignItems='center'
      justify='center'
    >
      <Grid item xs={12} sm={12} md={6}>
        {/* <Typography
          variant='button'
          gutterBottom
          className={classes.subheading}
        >
          Boomtown
        </Typography> */}
        <Typography variant='display4' className={classes.headline}>
          Left Side
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.loginWrapper}>
        {/* <Typography gutterBottom variant='headline'>
          Welcome home.
        </Typography> */}
        {/* <div className={classes.loginWrapper}> */}
        <AccountsUIWrapper />
        <Typography variant='display4' className={classes.headline}>
          Right Side
        </Typography>
        {/* </div> */}
      </Grid>
    </Grid>
  );
};

export default Welcome;
