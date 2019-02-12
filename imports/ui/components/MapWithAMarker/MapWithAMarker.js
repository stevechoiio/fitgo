import React, { Fragment } from "react";
import { compose, withProps, withHandlers, withState } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import distanceFilter from "./DistanceCalculator";
import GoogleMapStyles from "./GoogleMapStyles.json";
import OptionBar from "../OptionBar/index";

const LocationListOfTrainers = [
  { latitude: 49.008712, longitude: -122.751125 },
  { latitude: 49.008712, longitude: -123.751125 },
  { latitude: 49.008712, longitude: -121.751125 },
  { latitude: 48.028712, longitude: -122.751125 },
  { latitude: 49.044233, longitude: -123.751125 },
  { latitude: 59.005112, longitude: -121.751125 },
  { latitude: 41.008712, longitude: -123.123425 },
  { latitude: 46.053212, longitude: -125.751125 },
  { latitude: 45.006612, longitude: -114.756665 },
  { latitude: 48.003432, longitude: -133.751925 },
  { latitude: 49.192222, longitude: -113.751125 },
  { latitude: 55.666412, longitude: -121.751555 },
  { latitude: 49.209017, longitude: -122.842986 }
];

class MapWithAMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentZoom: null,
      activeUserFocus: true,
      radius: 50,
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false
    };
  }
  radiusChanger = (event, value) => {
    this.setState({ radius: value });
  };

  componentDidMount() {
    this.moveToUser();
    this.setState({ currentZoom: this.props.zoom });
  }

  handleActiveUserFocus = () => {
    this.props.setZoomToDefault();
    // console.log(this.props.onMapMounted);
  };

  moveToUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(prevState => ({
          currentLatLng: {
            ...prevState.currentLatLng,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          isMarkerShown: true
        }));
      });
    } else {
      error => console.log(error);
    }
  };
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <GoogleMap
          options={{ styles: GoogleMapStyles }}
          defaultZoom={16}
          center={{
            lat: this.state.currentLatLng.lat,
            lng: this.state.currentLatLng.lng
          }}
          zoom={this.state.currentZoom}
          onZoomChanged={this.props.onZoomChanged}
          ref={this.props.onMapMounted}
        >
          {this.state.isMarkerShown && (
            <div>
              <Marker
                position={{
                  lat: this.state.currentLatLng.lat,
                  lng: this.state.currentLatLng.lng
                }}
                onClick={this.props.onMarkerClick}
              />
              {distanceFilter(
                {
                  latitude: this.state.currentLatLng.lat,
                  longitude: this.state.currentLatLng.lng
                },
                LocationListOfTrainers,
                this.state.radius * 1000
              ).map((trainer, i) => {
                return trainer ? (
                  <Marker
                    key={i}
                    position={{
                      lat: trainer.latitude,
                      lng: trainer.longitude
                    }}
                  />
                ) : null;
              })}
            </div>
          )}
        </GoogleMap>
        <OptionBar
          radiusChanger={this.radiusChanger}
          moveToUser={this.moveToUser}
          isActiveUserFocus={this.state.activeUserFocus}
          handleActiveUserFocus={this.handleActiveUserFocus}
        />
      </Fragment>
    );
  }
}
// );

export default compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWPwKUYnXu1nJSeEr8SQKEXJ2jAfKYdXA&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withState("zoom", "onZoomChange", 16),
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
  withGoogleMap
)(props => <MapWithAMarker {...props} />);
