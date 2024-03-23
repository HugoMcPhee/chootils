export function shortenDecimals(theNumber: number) {
  return Math.floor(theNumber * 100000) / 100000;
}

export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
}

export function toDifferentRange(
  theValue: number,
  inputRange: [number, number],
  outputRange: [number, number]
) {
  const inputLow = inputRange[0];
  const inputHigh = inputRange[1];
  const lowRange = outputRange[0];
  const highRange = outputRange[1];
  return (
    ((theValue - inputLow) / (inputHigh - inputLow)) * (highRange - lowRange) +
    lowRange
  );
}
export function zeroToOneToRange(theValue: number, theRange: [number, number]) {
  const inputLow = 0;
  const inputHigh = 1;
  const lowRange = theRange[0];
  const highRange = theRange[1];
  return (
    ((theValue - inputLow) / (inputHigh - inputLow)) * (highRange - lowRange) +
    lowRange
  );
}
export function rangeToZeroToOne(theValue: number, theRange: [number, number]) {
  const lowRange = theRange[0];
  const highRange = theRange[1];
  return (theValue - lowRange) / (highRange - lowRange);
}

export function interpolateValues(
  currentValue: number,
  previousValue: number,
  percentOfCurrent: number
) {
  const percentOfPrevious = 1 - percentOfCurrent;
  return currentValue * percentOfCurrent + previousValue * percentOfPrevious;
}

// NOTE maybe rename to limitToRange
export function minMaxRange(number: number, min: number, max: number) {
  return Math.min(Math.max(number, min), max);
}
