import React, { Component, Fragment } from 'react';
import { compose, withProps, withHandlers, withState } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import distanceFilter from './DistanceCalculator';
import GoogleMapStyles from './GoogleMapStyles.json';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import OptionList from '../OptionsList';
import Fab from '@material-ui/core/Fab';
import LocationIcon from '@material-ui/icons/Navigation';
import FindMeBtn from '../FindMeBtn/';
import { withTracker } from 'meteor/react-meteor-data';
import styles from './styles';
import { Meteor } from 'meteor/meteor';
import { Trainers } from '../../../api/trainers';
import FavIconFilled from '@material-ui/icons/Favorite';
import FavIconOutline from '@material-ui/icons/FavoriteBorder';

const FavIcon = ({ favourite, onClick }) => {
  return (
    <IconButton onClick={onClick} color='primary'>
      {favourite ? <FavIconFilled /> : <FavIconOutline />}
    </IconButton>
  );
};

class MapWithAMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentZoom: null,
      activeUserFocus: true,
      radius: 50,
      currentLatLng: {
        latitude: 0,
        longitude: 0
      },
      // isMarkerShown: false,
      open: true, // drawer,
      skills: [],
      favourite: false,
      selectedSkills: []
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
      this.setState({ trainers });
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

  toggleFavorite = () => {
    this.setState({ favourite: !this.state.favourite });
    console.log(this.state.favourite);
  };

  render() {
    const { classes, theme } = this.props;
    const { open, trainers } = this.state;

    // console.log(trainers);
    // const skillsFilter = (selectedTags, trainers) => {
    //   return trainers.filter(trainer => {
    //     return trainer.skills.some(skill => selectedTags.includes(skill));
    //   });
    // };

    // console.log(skillsFilter(this.state.skills, LocationListOfTrainers));

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
              <img
                src='/black-logo.svg'
                alt='FitGO Logo'
                width='60'
                className={classes.logo}
              />
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
              handleSkillsSelected={this.handleSkillsSelected}
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
                    <Typography variant='h4'>
                      {this.state.clickedTrainer.name}
                    </Typography>
                    <Typography variant='h6' gutterBottom>
                      {this.state.clickedTrainer.email}
                    </Typography>
                    <Typography variant='button' color='secondary'>
                      Education
                    </Typography>
                    <Typography component='p' gutterBottom>
                      {this.state.clickedTrainer.education}
                    </Typography>
                    <Typography variant='button' color='secondary'>
                      Languages
                    </Typography>
                    <Typography component='p' gutterBottom>
                      {this.state.clickedTrainer.languages.join(', ')}
                    </Typography>
                    <Typography variant='button' color='secondary'>
                      Skills
                    </Typography>
                    <Typography component='p' className={classes.capitalize}>
                      {this.state.clickedTrainer.skills.join(', ')}
                    </Typography>
                  </ListItemText>
                  <FavIcon
                    favourite={this.state.favourite}
                    onClick={this.toggleFavorite}
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
            {/* <div className={classes.drawerHeader} /> */}
            <FindMeBtn
              moveToUser={this.moveToUser}
              isActiveUserFocus={this.state.activeUserFocus}
              handleActiveUserFocus={this.handleActiveUserFocus}
            />

            {trainers && trainers.length > 0 && (
              <GoogleMap
                options={{ styles: GoogleMapStyles }}
                defaultZoom={16}
                center={{
                  lat: parseFloat(this.state.currentLatLng.latitude),
                  lng: parseFloat(this.state.currentLatLng.longitude)
                }}
                zoom={this.state.currentZoom}
                // onZoomChanged={this.props.onZoomChanged}
                ref={this.props.onMapMounted}
                trainer={this.props.trainers}
              >
                <div>
                  <Marker
                    position={{
                      lat: this.state.currentLatLng.latitude,
                      lng: this.state.currentLatLng.longitude
                    }}
                    onClick={this.props.onMarkerClick}
                  />
                  {console.log(trainers, trainers !== undefined)}
                  {!trainers.includes(undefined) &&
                    trainers.length > 0 &&
                    trainers.map(trainer => (
                      <Marker
                        key={trainer._id}
                        position={{
                          lat: trainer.currentLocation.latitude,
                          lng: trainer.currentLocation.longitude
                        }}
                        onClick={() => this.handleMarkerClick(trainer)}
                      />
                    ))}
                </div>
              </GoogleMap>
            )}
          </main>
        </div>
      </Fragment>
    );
  }
}

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
    return {
      trainers: Trainers.find({}).fetch()
    };
  }),
  withStyles(styles, { withTheme: true })
)(props => <MapWithAMarker {...props} />);
