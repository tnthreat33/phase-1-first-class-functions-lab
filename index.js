// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)}

const returnLastTwoDrivers = function (drivers) {
        return drivers.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier (fare){
    return (value)=> fare * value
}

const fareDoubler = function (num) {
    let fare = createFareMultiplier (num)
    return fare 
}