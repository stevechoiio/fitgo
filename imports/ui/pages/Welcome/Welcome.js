import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountsUIWrapper from '../../components/AccountsUIWrapper/';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import styles from './styles';

class Welcome extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
        <Grid item xs={12} sm={12} md={6}>
          {/* <Typography
          variant='button'
          gutterBottom
          className={classes.subheading}
        >
          Boomtown
        </Typography> */}

          <Typography component='h2' variant='h1' color='primary'>
            Move +
          </Typography>
          <Typography component='h2' variant='h1' color='primary' gutterBottom>
            Believe
          </Typography>
          <Button
            variant='outlined'
            color='primary'
            // className={classes.button}
            onClick={this.handleOpen}
          >
            Join
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.loginWrapper}>
          <Modal
            aria-labelledby='signup-login'
            aria-describedby='signup-login'
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div
              className={classes.paper}
              open={this.state.open}
              onClose={this.handleClose}
            >
              <img src='/light-logo.svg' alt='fitGO Logo' width='100%' />
              <AccountsUIWrapper />
            </div>
          </Modal>
        </Grid>
      </Grid>
    );
  }
}

export default Welcome;
