import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import LocationIcon from '@material-ui/icons/Navigation';
import ListIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import styles from './styles';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';

LocationIcon = props => {
  return (
    <SvgIcon {...props}>
      <path d='M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z' />
    </SvgIcon>
  );
};

const FindMeBtn = ({
  classes,
  moveToUser,
  isActiveUserFocus,
  handleActiveUserFocus
}) => {
  return (
    <Fragment>
      {isActiveUserFocus && (
        <Fab
          color='inherit'
          aria-label='Find Me'
          className={classes.focusBtn}
          onClick={moveToUser}
        >
          <LocationIcon
            className={classes.icon}
            component={svgProps => (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id='gradient1'>
                    <stop offset='30%' stopColor='#37ecba' />
                    <stop offset='70%' stopColor='#72afd3' />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: 'url(#gradient1)'
                })}
              </svg>
            )}
          />
        </Fab>
      )}
    </Fragment>
  );
};

FindMeBtn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FindMeBtn);
