import { subtractPoints, Point2D } from "./points2d";
import { toRadians, toDegrees } from "./speedAngleDistance";

export function getVectorSpeed(theVector: Point2D): number {
  return Math.hypot(theVector.x, theVector.y);
}

export function getVectorAngle(theVector: Point2D): number {
  return toDegrees(Math.atan2(theVector.y, theVector.x));
}
export function getVectorDistance(vectorA: Point2D, vectorB: Point2D): number {
  return Math.abs(getVectorSpeed(subtractPoints(vectorA, vectorB)));
}

export function getVectorFromSpeedAndAngle(
  speed: number,
  angle: number
): Point2D {
  return {
    x: Math.cos(toRadians(angle)) * speed,
    y: Math.sin(toRadians(angle)) * speed,
  };
}

type SpeedAndAngle = {
  speed: number;
  angle: number;
};

export function getSpeedAndAngleFromVector(
  theSpeedVector: Point2D
): SpeedAndAngle {
  return {
    // speed: Math.hypot(theSpeedVector.x, theSpeedVector.y) * 0.6, // this makes it flick?
    speed: getVectorSpeed(theSpeedVector),
    angle: getVectorAngle(theSpeedVector),
  };
}

export function getShortestAngle(prevAngle: number, newAngle: number) {
  // from user151496 and frodo2975 https://stackoverflow.com/a/14498790
  return ((((newAngle - prevAngle) % 360) + 540) % 360) - 180;
}
