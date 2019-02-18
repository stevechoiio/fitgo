import React, { Fragment } from 'react';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';

const ProfileContainer = ({ classes }) => {
  return (
    <Fragment>
      <Profile />
    </Fragment>
  );
};

export default withRouter(ProfileContainer);
