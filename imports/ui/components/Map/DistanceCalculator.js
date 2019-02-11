import geolib from "geolib";

49.008712, -122.751125;
const distance = geolib.getDistance(
  { latitude: 49.020412, longitude: -122.698813 },
  { latitude: 49.008712, longitude: -122.751125 }
);

// create a function that takes in starting position, array of positions, and distance. return only the positions that fits under the filter

const distanceFilter = (clientPosition, TrainerPosition, filter) => {
  return TrainerPosition.map(trainerLocation => {
    let distance = geolib.getDistance(trainerLocation, clientPosition);

    if (distance < filter) {
      return trainerLocation;
    }
  });
};

const myLocation = { latitude: 49.020412, longitude: -122.698813 };
const LocationListOfTrainers = [
  { latitude: 49.008712, longitude: -122.751125 },
  { latitude: 49.008712, longitude: -123.751125 },
  { latitude: 49.008712, longitude: -121.751125 }
];

const filteredDistance = distanceFilter(
  myLocation,
  LocationListOfTrainers,
  500000
);

console.log(filteredDistance);
export default distanceFilter;
