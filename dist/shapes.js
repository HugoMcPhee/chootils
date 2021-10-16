import { forEach } from "./loops";
import { toRadians } from "./speedAngleDistance";
export const edgeNames = ["top", "right", "bottom", "left"];
export function getTrianglePoints(originalPoint, distance, cursorAngleRange, angle) {
    // first point
    //  TODO could be getVectorFromSpeedAndAngle? with -y
    const firstAngle = toRadians(-angle - cursorAngleRange);
    const firstX = Math.cos(firstAngle) * distance;
    const firstY = -Math.sin(firstAngle) * distance;
    // second point
    const secondAngle = toRadians(-angle + cursorAngleRange);
    const secondX = Math.cos(secondAngle) * distance;
    const secondY = -Math.sin(secondAngle) * distance;
    return {
        originalPoint,
        firstPoint: { x: originalPoint.x + firstX, y: originalPoint.y + firstY },
        secondPoint: { x: originalPoint.x + secondX, y: originalPoint.y + secondY },
    };
}
export function getCenterOfPoints(pointsArray) {
    let combinedX = 0;
    let combinedY = 0;
    forEach(pointsArray, (loopedPoint) => {
        combinedX += loopedPoint.x;
        combinedY += loopedPoint.y;
    });
    return {
        x: combinedX / pointsArray.length,
        y: combinedY / pointsArray.length,
    };
}
