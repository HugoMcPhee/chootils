import { interpolateValues, shortenDecimals } from "./numbers";
export function defaultPosition(partialPoints) {
    if (!partialPoints) {
        return { x: 0, y: 0 };
    }
    return { x: 0, y: 0, ...partialPoints };
}
export function pointIsZero(thePoint) {
    return thePoint.x === 0 && thePoint.y === 0;
}
export function samePoints(pointA, pointB) {
    return pointA.x === pointB.x && pointA.y === pointB.y;
}
export function copyPoint(thePoint) {
    return {
        x: thePoint.x,
        y: thePoint.y,
    };
}
export function multiplyPoint(thePoint, amount) {
    return {
        x: thePoint.x * amount,
        y: thePoint.y * amount,
    };
}
export function dividePoint(thePoint, amount) {
    return {
        x: thePoint.x / amount,
        y: thePoint.y / amount,
    };
}
export function dividePoints(mainPoint, otherPoint) {
    return {
        x: mainPoint.x / otherPoint.x,
        y: mainPoint.y / otherPoint.y,
    };
}
export function addPoints(mainPoint, otherPoint) {
    return {
        x: mainPoint.x + otherPoint.x,
        y: mainPoint.y + otherPoint.y,
    };
}
export function subtractPoints(mainPoint, otherPoint) {
    return {
        x: mainPoint.x - otherPoint.x,
        y: mainPoint.y - otherPoint.y,
    };
}
export function subtractPointsSafer(mainPoint, otherPoint) {
    return {
        x: shortenDecimals(mainPoint.x) - shortenDecimals(otherPoint.x),
        y: shortenDecimals(mainPoint.y) - shortenDecimals(otherPoint.y),
    };
}
export function subtractSizeFromPoint(mainPoint, otherSize) {
    return {
        x: mainPoint.x - otherSize.width,
        y: mainPoint.y - otherSize.height,
    };
}
export function sizeToPoint(theSize) {
    return {
        x: theSize.width,
        y: theSize.height,
    };
}
export function updatePoint(thePoint, newPoint) {
    thePoint.x = newPoint.x;
    thePoint.y = newPoint.y;
}
export function getAveragePoint(pointsArray) {
    let averagePoint = { x: 0, y: 0 };
    const combinedPoints = { x: 0, y: 0 };
    const pointsAmount = pointsArray.length;
    for (var i = 0; i < pointsAmount; i++) {
        combinedPoints.x += pointsArray[i].x;
        combinedPoints.y += pointsArray[i].y;
    }
    if (pointsAmount > 0) {
        averagePoint = dividePoint(combinedPoints, pointsAmount);
    }
    return averagePoint;
}
export function getAveragePointWithoutEmptyEnds(pointsArray) {
    const lastVelocity = pointsArray[pointsArray.length - 1];
    if (lastVelocity && pointIsZero(lastVelocity)) {
        pointsArray.pop();
    }
    const firstVelocity = pointsArray[0];
    if (firstVelocity && pointIsZero(firstVelocity)) {
        pointsArray.shift();
    }
    return getAveragePoint(pointsArray);
}
export function zeroPoint() {
    return { x: 0, y: 0 };
}
export function interpolatePoints(currentPoint, previousValue, percentOfCurrent) {
    return {
        x: interpolateValues(currentPoint.x, previousValue.x, percentOfCurrent),
        y: interpolateValues(currentPoint.y, previousValue.y, percentOfCurrent),
    };
}
export function getPointsCenter(pointA, pointB) {
    return {
        x: (pointA.x + pointB.x) * 0.5,
        y: (pointA.y + pointB.y) * 0.5,
    };
}
export function point2DToArray(thePoint) {
    return [thePoint.x, thePoint.y];
}
