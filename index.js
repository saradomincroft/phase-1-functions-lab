function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    let distanceInBlocks = Math.abs(destination - start);
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      // Price for distance between 400 and 2000 feet (2 cents per foot)
      return (distanceInFeet - 400) * 0.02;
      } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      // Flat fare for distance over 2000 feet and under 2500 feet
      return 25;
  } else if (distanceInFeet >= 2500) {
      return 'cannot travel that far';
  }
}