const returnFirstTwoDrivers = function(driversArray){
    return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMult){
    return function(fare){
        return fareMult * fare};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, func){
    return func(driversArray);
}
