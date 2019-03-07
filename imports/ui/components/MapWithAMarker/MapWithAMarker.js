import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { compose, withProps, withHandlers, withState } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle
} from 'react-google-maps';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Trainers } from '../../../api/trainers';
import { Clients } from '../../../api/clients';
import {
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Button,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FindMeButton from '../FindMeButton';
import OptionList from '../OptionsList';
import FavouriteIcon from '../FavouriteIcon';
import { styles, googleMapStyle } from './styles';
import geolib from 'geolib';

const distanceFilter = (clientPosition, trainerPosition, filter) => {
  let distance = geolib.getDistance(trainerPosition, clientPosition);

  if (distance < filter) {
    return trainerPosition;
  } else {
    return;
  }
};

class MapWithAMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentZoom: 32,
      activeUserFocus: true,
      radius: 5,
      currentLatLng: {
        latitude: 0,
        longitude: 0
      },
      isMarkerShown: false,
      open: true,
      selectedSkills: [],
      trainers: this.props.trainers
    };
  }

  handleSkillsSelected = skill => {
    let selectedSkills = this.state.selectedSkills;
    if (selectedSkills.includes(skill)) {
      const index = selectedSkills.indexOf(skill);
      selectedSkills.splice(index, 1);
    } else selectedSkills.push(skill);
    this.setState({ selectedSkills });
    this.filterTrainers(this.props.trainers);
  };

  filterTrainers = trainers => {
    if (this.state.selectedSkills.length > 0) {
      const filteredTrainers = this.state.selectedSkills.map(skill => {
        return trainers.find(trainer => {
          return trainer.skills.includes(skill);
        });
      });
      this.setState({ trainers: filteredTrainers });
    } else {
      this.setState({ trainers: this.props.trainers });
    }
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  radiusChanger = (event, value) => {
    this.setState({ radius: value });
  };

  componentDidMount() {
    this.moveToUser();
    this.setState({ trainers: this.props.trainers });
  }

  handleActiveUserFocus = () => {
    this.props.setZoomToDefault();
  };

  moveToUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(prevState => ({
          currentLatLng: {
            ...prevState.currentLatLng,
            latitude: parseFloat(`${position.coords.latitude}`),
            longitude: parseFloat(`${position.coords.longitude}`)
          },
          currentZoom: this.props.zoom
        }));
      });
    } else {
      error => console.log(error);
    }
  };

  handleMarkerClick = clickedTrainer => {
    this.setState({ clickedTrainer: clickedTrainer });
  };

  render() {
    const { classes, theme, trainers } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <div className={classes.root}>
          <CssBaseline />
          <Toolbar disableGutters={!open} className={classes.toolbar}>
            <IconButton
              color='secondary'
              aria-label='Open drawer'
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <Button
                className={classes.logo}
                color='inherit'
                aria-label='Home'
                href='/'
              >
                <img src='/dark-logo.svg' alt='FitGO Logo' width='60' />
              </Button>

              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'ltr' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <OptionList
              handleSkills={this.handleSkillsSelected}
              radiusChanger={this.radiusChanger}
            />
            <Divider />
            {this.state.clickedTrainer && (
              <List className={classes.trainerProfileWrapper}>
                <img
                  src='http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg'
                  alt='Trainer Profile Image'
                  width='100%'
                />
                <ListItem
                  key={this.state.clickedTrainer._id}
                  value={this.state.clickedTrainer}
                >
                  <ListItemText>
                    <Typography variant='h4' className={classes.capitalize}>
                      {this.state.clickedTrainer.name}
                    </Typography>
                    <Typography variant='h6' gutterBottom>
                      {this.state.clickedTrainer.email.address}
                    </Typography>
                    <Typography
                      variant='subtitle2'
                      className={classes.subheading}
                    >
                      Education
                    </Typography>
                    <Typography component='p' gutterBottom>
                      {this.state.clickedTrainer.education}
                    </Typography>
                    <Typography
                      variant='subtitle2'
                      className={classes.subheading}
                    >
                      Languages
                    </Typography>
                    <Typography
                      component='p'
                      gutterBottom
                      className={classNames(classes.chip, classes.capitalize)}
                    >
                      {this.state.clickedTrainer.languages}
                    </Typography>
                    <Typography
                      variant='subtitle2'
                      className={classes.subheading}
                    >
                      Skills
                    </Typography>
                    <Typography component='p' className={classes.capitalize}>
                      {this.state.clickedTrainer.skills.join(', ')}
                    </Typography>
                  </ListItemText>
                  <FavouriteIcon
                    trainerID={this.state.clickedTrainer._id}
                    clientID={this.props.currentUserId}
                  />
                </ListItem>
              </List>
            )}
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open
            })}
          >
            <FindMeButton
              moveToUser={this.moveToUser}
              isActiveUserFocus={this.state.activeUserFocus}
              handleActiveUserFocus={this.handleActiveUserFocus}
            />

            {trainers && trainers.length > 0 && (
              <GoogleMap
                options={{ styles: googleMapStyle }}
                defaultZoom={16}
                center={{
                  lat: parseFloat(this.state.currentLatLng.latitude),
                  lng: parseFloat(this.state.currentLatLng.longitude)
                }}
                zoom={this.state.currentZoom}
                ref={this.props.onMapMounted}
                trainer={this.props.trainers}
              >
                <div>
                  {this.state.currentLatLng.latitude === 0 &&
                  this.state.currentLatLng.longitude === 0 ? null : (
                    <Circle
                      defaultCenter={{
                        lat: this.state.currentLatLng.latitude,
                        lng: this.state.currentLatLng.longitude
                      }}
                      visible={true}
                      radius={this.state.radius * 480}
                      options={{
                        fillColor: '#72afd3',
                        fillOpacity: 0.5,
                        strokeWeight: 2,
                        strokeColor: '#37ecba',
                        strokeOpacity: 0.5,
                        clickable: false,

                        zIndex: 1
                      }}
                    />
                  )}
                  <Marker
                    position={{
                      lat: this.state.currentLatLng.latitude,
                      lng: this.state.currentLatLng.longitude
                    }}
                    onClick={this.props.onMarkerClick}
                    defaultIcon='/marker-client.png'
                  />

                  {this.state.trainers.map(trainer => {
                    if (trainer) {
                      const trainerLocation = distanceFilter(
                        this.state.currentLatLng,
                        trainer.currentLocation,
                        this.state.radius * 500
                      );

                      return trainerLocation ? (
                        <Marker
                          key={trainer._id}
                          position={{
                            lat: trainerLocation.latitude,
                            lng: trainerLocation.longitude
                          }}
                          onClick={() => this.handleMarkerClick(trainer)}
                          defaultIcon='/marker-trainer.png'
                        />
                      ) : null;
                    }
                  })}
                </div>
              </GoogleMap>
            )}
          </main>
        </div>
      </Fragment>
    );
  }
}

MapWithAMarker.propTypes = {
  classes: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired,
  currentUserId: PropTypes.string.isRequired,
  onMapMounted: PropTypes.func.isRequired,
  onZoomChange: PropTypes.func.isRequired,
  onZoomChanged: PropTypes.func.isRequired,
  setZoomToDefault: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  trainers: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired
};

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBWPwKUYnXu1nJSeEr8SQKEXJ2jAfKYdXA',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withState('zoom', 'onZoomChange', 12),
  withHandlers(() => {
    const refs = {
      map: undefined
    };
    return {
      onMapMounted: () => ref => {
        refs.map = ref;
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom());
      },
      setZoomToDefault: () => () => {
        refs.map.setZoom(16);
      }
    };
  }),
  withGoogleMap,
  withTracker(() => {
    Meteor.subscribe('trainers');
    Meteor.subscribe('clients');
    return {
      trainers: Trainers.find({}).fetch(),
      clients: Clients.find({}).fetch(),
      currentUserId: Meteor.userId()
    };
  }),
  withStyles(styles, { withTheme: true })
)(props => <MapWithAMarker {...props} />);
