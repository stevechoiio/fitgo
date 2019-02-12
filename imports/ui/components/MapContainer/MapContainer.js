import React, { Component } from "react";
import MapWithAMarker from "../MapWithAMarker/";
class MapContainer extends Component {
  render() {
    return (
      <div>
        <MapWithAMarker />
        <h1>MapContainerComponent</h1>
      </div>
    );
  }
}

export default MapContainer;
