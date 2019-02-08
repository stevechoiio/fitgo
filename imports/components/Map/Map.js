import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} from 'react-google-maps';

// const MapWithADirectionsRenderer = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWPwKUYnXu1nJSeEr8SQKEXJ2jAfKYdXA&callback=initMap",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       const DirectionsService = new google.maps.DirectionsService();
//       DirectionsService.route(
//         {
//           origin: new google.maps.LatLng({
//             lat: props.currentLocation.lat,
//             lng: props.currentLocation.lng
//           }),
//           destination: new google.maps.LatLng(41.85258, -87.65141),
//           travelMode: google.maps.TravelMode.DRIVING
//         },
//         (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             this.setState({
//               directions: result
//             });
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         }
//       );
//     }
//   })
// )(props => (
//   <GoogleMap
//     defaultZoom={16}
//     defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
//   >
//     {props.directions && <DirectionsRenderer directions={props.directions} />}
//   </GoogleMap>
// ));
const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBWPwKUYnXu1nJSeEr8SQKEXJ2jAfKYdXA&callback=initMap',
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

export default Map;