import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AccountsUIWrapper from "../AccountsUIWrapper/";
import styles from "./styles";
import { withRouter } from "react-router";

const MenuBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      {window.location.pathname == "/" ||
      window.location.pathname == "/onboard" ? (
        <AppBar position="static" className={classes.menuBarTransparent}>
          <Toolbar>
            <Button
              className={classes.homeButton}
              color="primary"
              aria-label="Home"
              href="/"
            >
              <img src="/light-logo.svg" alt="fitGO Logo" width="60" />
            </Button>
            <div className={classes.grow} />
            <div className={classes.optns}>
              <Button color="primary" href="/profile">
                Profile
              </Button>
              <Button color="primary" href="/about">
                About
              </Button>
              <Button color="primary">
                <AccountsUIWrapper />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="static" className={classes.menuBarColor}>
          <Toolbar>
            <Button
              className={classes.homeButton}
              color="primary"
              aria-label="Home"
              href="/"
            >
              <img src="/light-logo.svg" alt="fitGO Logo" width="60" />
            </Button>
            <div className={classes.grow} />
            <div className={classes.optns}>
              <Button color="primary" href="/profile">
                Profile
              </Button>
              <Button color="primary" href="/about">
                About
              </Button>
              <Button color="primary">
                <AccountsUIWrapper />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);
