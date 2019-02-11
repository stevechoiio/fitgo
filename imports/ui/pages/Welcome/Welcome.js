import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountsUIWrapper from '../../components/AccountsUIWrapper/';
import Button from '@material-ui/core/Button';
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

        <Typography component='h2' variant='h1' color='primary' gutterBottom>
          Move + Believe
        </Typography>
        <Button variant='outlined' color='primary' className={classes.button}>
          Join
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.loginWrapper}>
        {/* <Typography gutterBottom variant='headline'>
          Welcome home.
        </Typography> */}
        {/* <div className={classes.loginWrapper}> */}
        <AccountsUIWrapper />
        <Typography component='h2' variant='h1' color='primary'>
          Right Side
        </Typography>
        {/* </div> */}
      </Grid>
    </Grid>
  );
};

export default Welcome;
