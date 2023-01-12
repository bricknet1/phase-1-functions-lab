// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup-42);
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(pickup, dropoff) {
    return (Math.abs(pickup-dropoff)) * 264;
}

function calculatesFarePrice(pickup, dropoff) {
    const feetTravelled = distanceTravelledInFeet(pickup, dropoff);
    if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled < 2500) {
        return 25;
    } else if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled >= 2500) {
        return 'cannot travel that far'
}
}

console.log(distanceFromHqInFeet(34,32));