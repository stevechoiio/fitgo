import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import distance from "./DistanceCalculator";

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
    defaultZoom={16}
    center={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{
          lat: props.currentLocation.lat,
          lng: props.currentLocation.lng
        }}
        onClick={props.onMarkerClick}
      />
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
      isMarkerShown: false
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
      <div>
        <MapWithAMarker
          isMarkerShown={this.state.isMarkerShown}
          currentLocation={this.state.currentLatLng}
        />
      </div>
    );
  }
}

export default GoogleMaps;
