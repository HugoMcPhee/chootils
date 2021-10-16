import { subtractPoints } from "./points2d";
import { toRadians, toDegrees } from "./speedAngleDistance";
export function getVectorSpeed(theVector) {
    return Math.hypot(theVector.x, theVector.y);
}
export function getVectorAngle(theVector) {
    return toDegrees(Math.atan2(theVector.y, theVector.x));
}
export function getVectorDistance(vectorA, vectorB) {
    return Math.abs(getVectorSpeed(subtractPoints(vectorA, vectorB)));
}
export function getVectorFromSpeedAndAngle(speed, angle) {
    return {
        x: Math.cos(toRadians(angle)) * speed,
        y: Math.sin(toRadians(angle)) * speed,
    };
}
export function getSpeedAndAngleFromVector(theSpeedVector) {
    return {
        // speed: Math.hypot(theSpeedVector.x, theSpeedVector.y) * 0.6, // this makes it flick?
        speed: getVectorSpeed(theSpeedVector),
        angle: getVectorAngle(theSpeedVector),
    };
}
export function getShortestAngle(prevAngle, newAngle) {
    // from user151496 and frodo2975 https://stackoverflow.com/a/14498790
    return ((((newAngle - prevAngle) % 360) + 540) % 360) - 180;
}
