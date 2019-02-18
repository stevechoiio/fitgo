import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import styles from './styles';

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
        <Typography id='label'>Distance</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby='label'
          onChange={this.handleChange}
        />
        <h1>{Math.trunc(this.state.value)}km</h1>
        <button
          onClick={() => {
            this.setState({ value: 1 });
            this.handleChange(event, 1);
          }}
        >
          1km
        </button>
        <button
          onClick={() => {
            this.setState({ value: 5 });
            this.handleChange(event, 5);
          }}
        >
          5km
        </button>
        <button
          onClick={() => {
            this.setState({ value: 10 });
            this.handleChange(event, 10);
          }}
        >
          10km
        </button>
      </div>
    );
  }
}

RadiusSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadiusSlider);
