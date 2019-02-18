import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles, SvgIcon, Fab } from "@material-ui/core";
import LocationIcon from "@material-ui/icons/Navigation";
import styles from "./styles";

LocationIcon = props => {
  return (
    <SvgIcon {...props}>
      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
    </SvgIcon>
  );
};

const FindMeBtn = ({ classes, moveToUser, isActiveUserFocus }) => {
  return (
    <Fragment>
      {isActiveUserFocus && (
        <Fab
          color="inherit"
          aria-label="Find Me"
          className={classes.focusBtn}
          onClick={moveToUser}
        >
          <LocationIcon
            className={classes.icon}
            component={svgProps => (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor="#37ecba" />
                    <stop offset="70%" stopColor="#72afd3" />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: "url(#gradient1)"
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
