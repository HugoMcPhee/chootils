import { interpolateValues, shortenDecimals } from "./numbers";
import { Point3D } from "./points3d";
import { Size } from "./sizes";

export function multiplyPoint(thePoint: Point3D, amount: number): Point3D {
  thePoint.x *= amount;
  thePoint.y *= amount;
  thePoint.z *= amount;
  return thePoint;
}
export function dividePoint(thePoint: Point3D, amount: number): Point3D {
  thePoint.x /= amount;
  thePoint.y /= amount;
  thePoint.z /= amount;
  return thePoint;
}
export function dividePoints(mainPoint: Point3D, otherPoint: Point3D): Point3D {
  mainPoint.x /= otherPoint.x;
  mainPoint.y /= otherPoint.y;
  mainPoint.z /= otherPoint.z;
  return mainPoint;
}
export function addPoints(mainPoint: Point3D, otherPoint: Point3D): Point3D {
  mainPoint.x += otherPoint.x;
  mainPoint.y += otherPoint.y;
  mainPoint.z += otherPoint.z;
  return mainPoint;
}
export function subtractPoints(
  mainPoint: Point3D,
  otherPoint: Point3D
): Point3D {
  mainPoint.x -= otherPoint.x;
  mainPoint.y -= otherPoint.y;
  mainPoint.z -= otherPoint.z;
  return mainPoint;
}
export function subtractPointsSafer(
  mainPoint: Point3D,
  otherPoint: Point3D
): Point3D {
  mainPoint.x = shortenDecimals(mainPoint.x) - shortenDecimals(otherPoint.x);
  mainPoint.y = shortenDecimals(mainPoint.y) - shortenDecimals(otherPoint.y);
  mainPoint.z = shortenDecimals(mainPoint.z) - shortenDecimals(otherPoint.z);
  return mainPoint;
}

export function subtractSizeFromPoint(
  mainPoint: Point3D,
  otherSize: Size
): Point3D {
  mainPoint.x -= otherSize.width;
  mainPoint.y -= otherSize.height;
  mainPoint.z -= otherSize.height;
  return mainPoint;
}

export function interpolatePoints(
  currentPoint: Point3D,
  previousValue: Point3D,
  percentOfCurrent: number
): Point3D {
  currentPoint.x = interpolateValues(
    currentPoint.x,
    previousValue.x,
    percentOfCurrent
  );
  currentPoint.y = interpolateValues(
    currentPoint.y,
    previousValue.y,
    percentOfCurrent
  );
  currentPoint.z = interpolateValues(
    currentPoint.z,
    previousValue.z,
    percentOfCurrent
  );
  return currentPoint;
}

export function getPointsCenter(pointA: Point3D, pointB: Point3D) {
  pointA.x = (pointA.x + pointB.x) * 0.5;
  pointA.y = (pointA.y + pointB.y) * 0.5;
  pointA.z = (pointA.z + pointB.z) * 0.5;
  return pointA;
}
