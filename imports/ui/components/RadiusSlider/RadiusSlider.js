import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";
import styles from "./styles";

class RadiusSlider extends Component {
  state = {
    value: 50
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
        <Typography id="label">Radius</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

RadiusSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadiusSlider);
