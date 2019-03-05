import React, { Component } from "react";
import { Grid, withStyles, Typography, Button, Modal } from "@material-ui/core";
import AccountsUIWrapper from "../../components/AccountsUIWrapper";
import styles from "./styles";
import PropTypes from "prop-types";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

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
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} sm={12} md={4} className={classes.statement}>
          <Typography component="h2" variant="h1" color="primary">
            Move +
          </Typography>
          <Typography component="h2" variant="h1" color="primary" gutterBottom>
            Believe
          </Typography>
          <Button variant="outlined" color="primary" onClick={this.handleOpen}>
            Join
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={8} className={classes.loginWrapper}>
          <Modal
            aria-labelledby="signup-login"
            aria-describedby="signup-login"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div
              className={classes.paper}
              open={this.state.open}
              onClose={this.handleClose}
            >
              <img src="/light-logo.svg" alt="fitGO Logo" width="100%" />
              <AccountsUIWrapper />
            </div>
          </Modal>
        </Grid>
      </Grid>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withStyles(styles)(Welcome);
