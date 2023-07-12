const liftA = {
    currentFloor: 0,
    isBusy: false,
};

const liftB = {
    currentFloor: 8,
    isBusy: false,
};


function sendNearestLift(callingFloor) {
    const distanceToA = Math.abs(liftA.currentFloor - callingFloor);
    const distanceToB = Math.abs(liftB.currentFloor - callingFloor);

    if (!liftA.isBusy && !liftB.isBusy) {

        if (distanceToA <= distanceToB) {

            sendLiftToFloor(liftA, callingFloor);
        } else {

            sendLiftToFloor(liftB, callingFloor);
        }
    } else if (!liftA.isBusy) {

        sendLiftToFloor(liftA, callingFloor);
    } else if (!liftB.isBusy) {

        sendLiftToFloor(liftB, callingFloor);
    } else {

        if (distanceToA <= distanceToB) {

            sendLiftToFloor(liftA, callingFloor);
        } else {

            sendLiftToFloor(liftB, callingFloor);
        }
    }
}


function sendLiftToFloor(lift, floor) {
    lift.isBusy = true;
    console.log(`We send the elevator ${lift} per floor ${floor}`);
}

sendNearestLift(1);
