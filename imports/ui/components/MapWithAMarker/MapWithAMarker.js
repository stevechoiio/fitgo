import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import distanceFilter from "./DistanceCalculator";
import GoogleMapStyles from "./GoogleMapStyles.json";

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

const MapWithAMarker = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWPwKUYnXu1nJSeEr8SQKEXJ2jAfKYdXA&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    options={{ styles: GoogleMapStyles }}
    defaultZoom={16}
    center={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
    zoom={props.zoom}
  >
    {props.isMarkerShown && (
      <div>
        <Marker
          position={{
            lat: props.currentLocation.lat,
            lng: props.currentLocation.lng
          }}
          onClick={props.onMarkerClick}
        />
        {distanceFilter(
          {
            latitude: props.currentLocation.lat,
            longitude: props.currentLocation.lng
          },
          LocationListOfTrainers,
          props.radius * 1000
        ).map(trainer => {
          return trainer ? (
            <Marker
              position={{ lat: trainer.latitude, lng: trainer.longitude }}
            />
          ) : null;
        })}
      </div>
    )}
  </GoogleMap>
));
class GoogleMaps extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false,
      zoom: 15
    };
  }

  showCurrentLocation = () => {
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

  componentDidMount() {
    this.showCurrentLocation();
  }

  render() {
    return (
      <MapWithAMarker
        isMarkerShown={this.state.isMarkerShown}
        currentLocation={this.state.currentLatLng}
        radius={this.props.radius}
        showCurrentLocation={this.showCurrentLocation}
        zoom={this.props.zoom}
        moveToUser={this.props.moveToUser}
      />
    );
  }
}

export default GoogleMaps;
