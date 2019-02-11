import React from "react";

import MapWithAMarker from "../MapWithAMarker/index";

class UserMapView extends React.PureComponent {
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

export default UserMapView;
