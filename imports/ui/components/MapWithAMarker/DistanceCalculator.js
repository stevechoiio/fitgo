import geolib from 'geolib';

// create a function that takes in starting position, array of positions, and distance. return only the positions that fits under the filter

const distanceFilter = (clientPosition, trainerPosition, filter) => {
  // return trainerPosition.map(trainerLocation => {
  let distance = geolib.getDistance(trainerPosition, clientPosition);

  if (distance < filter) {
    return distance;
  }
  // });
};

export default distanceFilter;
