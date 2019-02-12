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
import { LocationListOfTrainers } from "./fakeData";

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
