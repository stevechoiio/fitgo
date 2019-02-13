import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import CommentIcon from '@material-ui/icons/Comment';
import styles from './styles';
import RadiusSlider from '../RadiusSlider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import LocationIcon from '@material-ui/icons/NearMe';
import FormControl from '@material-ui/core/FormControl';

const skills = [
  'yoga',
  'crossfit',
  'weight training',
  'strength training',
  'body building',
  'power lifting',
  'running'
];

class OptionsList extends React.Component {
  state = {
    checked: [0],
    skill: []
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const {
      classes,
      radiusChanger,
      moveToUser,
      isActiveUserFocus,
      handleActiveUserFocus
    } = this.props;

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
                  onClick={this.handleToggle(skill)}
                >
                  <Checkbox
                    checked={this.state.checked.indexOf(skill) !== -1}
                    tabIndex={-1}
                    disableRipple
                    className={classes.listItem}
                  />
                  {/* <ListItemText primary={`Line item ${value + 1}`} /> */}
                  <ListItemText primary={skill} />
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