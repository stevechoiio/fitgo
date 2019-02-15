import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import styles from "./styles";
import RadiusSlider from "../RadiusSlider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControl from "@material-ui/core/FormControl";

class OptionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        "yoga",
        "crossfit",
        "weight training",
        "strength training",
        "body building",
        "power lifting",
        "running"
      ],
      checked: [0]
    };
  }

  // handleChange = event => {
  //   this.setState({ skills: event.target.value });
  //   this.props.selectedSkills(event, this.state.skills);
  //   console.log(this.state.skills);
  // };

  render() {
    const { classes, radiusChanger, handleSkills } = this.props;
    const { skills } = this.state;

    return (
      <List className={classes.rootOptList}>
        <RadiusSlider radiusChanger={radiusChanger} />
        <ExpansionPanel className={classes.expPanel}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expSum}
          >
            <Typography>Skills Filter</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.listSkills}>
            <FormControl className={classes.formControl}>
              {skills.map(skill => (
                <ListItem
                  key={skill}
                  value={skill}
                  role={undefined}
                  dense
                  button
                  // onClick={this.handleToggle(skill)}
                >
                  <Checkbox
                    // checked={this.state.checked.indexOf(skill) !== -1}
                    tabIndex={-1}
                    disableRipple
                    className={classes.listItem}
                    onChange={() => {
                      handleSkills(skill);
                    }}
                  />
                  <ListItemText primary={skill} className={classes.liText} />
                </ListItem>
              ))}
            </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </List>
    );
  }
}

OptionsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OptionsList);
