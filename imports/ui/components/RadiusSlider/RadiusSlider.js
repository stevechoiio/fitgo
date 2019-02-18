import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Button, Fab } from "@material-ui/core";
import Slider from "@material-ui/lab/Slider";
import styles from "./styles";

class RadiusSlider extends Component {
  state = {
    value: 5
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.radiusChanger(event, value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.rootSlider}>
        <Typography id="label">
          Distance {Math.trunc(this.state.value)} km
        </Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          onChange={this.handleChange}
        />
        <div className={classes.btnDist}>
          <Fab
            size="small"
            color="primary"
            aria-label="Add"
            className={classes.button}
            onClick={() => {
              this.setState({ value: 1 });
              this.handleChange(event, 1);
            }}
          >
            1km
          </Fab>
          <Fab
            size="small"
            color="primary"
            aria-label="Add"
            className={classes.button}
            onClick={() => {
              this.setState({ value: 5 });
              this.handleChange(event, 5);
            }}
          >
            5km
          </Fab>
          <Fab
            size="small"
            color="primary"
            aria-label="Add"
            className={classes.button}
            onClick={() => {
              this.setState({ value: 10 });
              this.handleChange(event, 10);
            }}
          >
            10km
          </Fab>
        </div>
      </div>
    );
  }
}

RadiusSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  radiusChanger: PropTypes.func.isRequired
};

export default withStyles(styles)(RadiusSlider);
