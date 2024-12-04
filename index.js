function distanceFromHqInBlocks(pickupLocation) {
         const headquaters = 42;// Headquarters is on 42nd Street
         return Math.abs(pickupLocation - headquaters)
}
       console.log (distanceFromHqInBlocks(60))

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;// Manhattan blocks are 264 feet long
    return blocks *feetPerBlock
}
        console.log(distanceFromHqInFeet(40))
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start); // Calculate the absolute difference between start and destination
    const feetPerBlock = 264; 
    return blocksTravelled * feetPerBlock;
  }
      console.log( distanceTravelledInFeet(60,40))
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // \$0.02 per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare of \$25 for distances over 2000 but under 2500 feet
    } else {
        return "cannot travel that far"; // Not allowed for distances over 2500 feet
    }
}
console.log(calculatesFarePrice(50, 42));  