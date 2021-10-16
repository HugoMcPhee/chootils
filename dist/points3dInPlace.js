import { interpolateValues, shortenDecimals } from "./numbers";
export function multiplyPoint(thePoint, amount) {
    thePoint.x *= amount;
    thePoint.y *= amount;
    thePoint.z *= amount;
    return thePoint;
}
export function dividePoint(thePoint, amount) {
    thePoint.x /= amount;
    thePoint.y /= amount;
    thePoint.z /= amount;
    return thePoint;
}
export function dividePoints(mainPoint, otherPoint) {
    mainPoint.x /= otherPoint.x;
    mainPoint.y /= otherPoint.y;
    mainPoint.z /= otherPoint.z;
    return mainPoint;
}
export function addPoints(mainPoint, otherPoint) {
    mainPoint.x += otherPoint.x;
    mainPoint.y += otherPoint.y;
    mainPoint.z += otherPoint.z;
    return mainPoint;
}
export function subtractPoints(mainPoint, otherPoint) {
    mainPoint.x -= otherPoint.x;
    mainPoint.y -= otherPoint.y;
    mainPoint.z -= otherPoint.z;
    return mainPoint;
}
export function subtractPointsSafer(mainPoint, otherPoint) {
    mainPoint.x = shortenDecimals(mainPoint.x) - shortenDecimals(otherPoint.x);
    mainPoint.y = shortenDecimals(mainPoint.y) - shortenDecimals(otherPoint.y);
    mainPoint.z = shortenDecimals(mainPoint.z) - shortenDecimals(otherPoint.z);
    return mainPoint;
}
export function subtractSizeFromPoint(mainPoint, otherSize) {
    mainPoint.x -= otherSize.width;
    mainPoint.y -= otherSize.height;
    mainPoint.z -= otherSize.height;
    return mainPoint;
}
export function interpolatePoints(currentPoint, previousValue, percentOfCurrent) {
    currentPoint.x = interpolateValues(currentPoint.x, previousValue.x, percentOfCurrent);
    currentPoint.y = interpolateValues(currentPoint.y, previousValue.y, percentOfCurrent);
    currentPoint.z = interpolateValues(currentPoint.z, previousValue.z, percentOfCurrent);
    return currentPoint;
}
export function getPointsCenter(pointA, pointB) {
    pointA.x = (pointA.x + pointB.x) * 0.5;
    pointA.y = (pointA.y + pointB.y) * 0.5;
    pointA.z = (pointA.z + pointB.z) * 0.5;
    return pointA;
}
