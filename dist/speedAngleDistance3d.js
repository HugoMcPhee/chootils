import { subtractPoints } from "./points3d";
import { toRadians, toDegrees } from "./speedAngleDistance";
import { getVectorSpeed as getVectorSpeed2d } from "./speedAngleDistance2d";
// not correct but good for comparing distances
export function getVectorSpeedQuick(theVector) {
    return (theVector.x * theVector.x +
        theVector.y * theVector.y +
        theVector.z * theVector.z);
}
export function getVectorSpeed(theVector) {
    return Math.sqrt(getVectorSpeedQuick(theVector));
}
export function getVectorAngle(theVector) {
    return {
        horizontal: toDegrees(Math.atan2(theVector.y, theVector.x)),
        vertical: toDegrees(Math.atan2(theVector.z, getVectorSpeed2d({ x: theVector.x, y: theVector.y }))),
    };
}
// maybe rename get point distance?
export function getVectorDistance(vectorA, vectorB) {
    return Math.abs(getVectorSpeed(subtractPoints(vectorA, vectorB)));
}
export function getPointDistanceQuick(vectorA, vectorB) {
    return Math.abs(getVectorSpeedQuick(subtractPoints(vectorA, vectorB)));
}
export function getVectorFromSpeedAndAngle(speed, angle) {
    const yaw = toRadians(angle.horizontal);
    const pitch = toRadians(angle.vertical);
    return {
        x: Math.cos(yaw) * Math.cos(pitch) * speed,
        y: Math.sin(yaw) * Math.cos(pitch) * speed,
        z: Math.sin(pitch) * speed,
    };
}
export function getSpeedAndAngleFromVector(theSpeedVector) {
    return {
        speed: getVectorSpeed(theSpeedVector),
        angle: getVectorAngle(theSpeedVector),
    };
}
