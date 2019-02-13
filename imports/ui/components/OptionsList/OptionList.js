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
    checked: [0]
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
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Skills Filter</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.listSkills}>
            {skills.map(value => (
              <ListItem
                key={value}
                role={undefined}
                dense
                button
                onClick={this.handleToggle(value)}
              >
                <Checkbox
                  checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  className={classes.listItem}
                />
                {/* <ListItemText primary={`Line item ${value + 1}`} /> */}
                <ListItemText primary={value} />
              </ListItem>
            ))}
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
