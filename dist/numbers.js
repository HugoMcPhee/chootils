export function shortenDecimals(theNumber) {
    return Math.floor(theNumber * 100000) / 100000;
}
export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
}
export function toDifferentRange(theValue, inputRange, outputRange) {
    const inputLow = inputRange[0];
    const inputHigh = inputRange[1];
    const lowRange = outputRange[0];
    const highRange = outputRange[1];
    return (((theValue - inputLow) / (inputHigh - inputLow)) * (highRange - lowRange) +
        lowRange);
}
export function zeroToOneToRange(theValue, theRange) {
    const inputLow = 0;
    const inputHigh = 1;
    const lowRange = theRange[0];
    const highRange = theRange[1];
    return (((theValue - inputLow) / (inputHigh - inputLow)) * (highRange - lowRange) +
        lowRange);
}
export function rangeToZeroToOne(theValue, theRange) {
    const lowRange = theRange[0];
    const highRange = theRange[1];
    return (theValue - lowRange) / (highRange - lowRange);
}
export function interpolateValues(currentValue, previousValue, percentOfCurrent) {
    const percentOfPrevious = 1 - percentOfCurrent;
    return currentValue * percentOfCurrent + previousValue * percentOfPrevious;
}
export function minMaxRange(number, min, max) {
    return Math.min(Math.max(number, min), max);
}
