import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LocationIcon from "@material-ui/icons/NearMe";
import ListIcon from "@material-ui/icons/List";
import FilterIcon from "@material-ui/icons/EditAttributes";
import RadiusSlider from "../RadiusSlider";
import styles from "./styles";

class LabelBottomNavigation extends React.Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, radiusChanger } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.rootOptBar}>
        <RadiusSlider radiusChanger={radiusChanger} />
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          // className={classes.rootBtmNav}
        >
          <BottomNavigationAction
            label="Location"
            value="location"
            icon={<LocationIcon />}
          />
          <BottomNavigationAction
            label="List"
            value="list"
            icon={<ListIcon />}
          />
          <BottomNavigationAction
            label="Filter"
            value="filter"
            icon={<FilterIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LabelBottomNavigation);
