import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  FormControl
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RadiusSlider from '../RadiusSlider';
import styles from './styles';

class OptionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        'yoga',
        'crossfit',
        'weight training',
        'strength training',
        'body building',
        'power lifting',
        'running'
      ],
      checked: [0]
    };
  }

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
                >
                  <Checkbox
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
