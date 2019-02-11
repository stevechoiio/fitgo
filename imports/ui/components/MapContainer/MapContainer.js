import React, { Component } from "react";

import OptionBar from "../OptionBar";
import UserMapView from "../UserMapView/index";
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 50,
      zoom: 15
    };
  }

  radiusChanger = (event, value) => {
    this.setState({ radius: value });
  };
  zoomToUser = (event, value) => {
    this.setState({ zoom: 15 });
  };
  //   moveToUser = (event, value) => {
  //     console.log("movevmoevmoe");
  //   };

  moveToUser = () => {
    console.log("clicked");
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
      <div>
        <UserMapView
          radius={this.state.radius}
          zoom={this.state.zoom}
          moveToUser={this.moveToUser}
        />
        <OptionBar
          radiusChanger={this.radiusChanger}
          zoomToUser={this.zoomToUser}
          moveToUser={this.moveToUser}
        />
        <h1>MapContainerComponent</h1>
      </div>
    );
  }
}

export default MapContainer;
