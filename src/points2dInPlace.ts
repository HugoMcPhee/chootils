import { interpolateValues, shortenDecimals } from "./numbers";
import { Size } from "./sizes";
import { Point2D } from "./points2d";

export function multiplyPoint(thePoint: Point2D, amount: number): Point2D {
  thePoint.x *= amount;
  thePoint.y *= amount;
  return thePoint;
}
export function dividePoint(thePoint: Point2D, amount: number): Point2D {
  thePoint.x /= amount;
  thePoint.y /= amount;
  return thePoint;
}
export function dividePoints(mainPoint: Point2D, otherPoint: Point2D): Point2D {
  mainPoint.x /= otherPoint.x;
  mainPoint.y /= otherPoint.y;
  return mainPoint;
}
export function addPoints(mainPoint: Point2D, otherPoint: Point2D): Point2D {
  mainPoint.x += otherPoint.x;
  mainPoint.y += otherPoint.y;
  return mainPoint;
}

export function subtractPoints(
  mainPoint: Point2D,
  otherPoint: Point2D
): Point2D {
  mainPoint.x -= otherPoint.x;
  mainPoint.y -= otherPoint.y;
  return mainPoint;
}
export function subtractPointsSafer(
  mainPoint: Point2D,
  otherPoint: Point2D
): Point2D {
  mainPoint.x = shortenDecimals(mainPoint.x) - shortenDecimals(otherPoint.x);
  mainPoint.y = shortenDecimals(mainPoint.y) - shortenDecimals(otherPoint.y);
  return mainPoint;
}

export function subtractSizeFromPoint(
  mainPoint: Point2D,
  otherSize: Size
): Point2D {
  mainPoint.x -= otherSize.width;
  mainPoint.y -= otherSize.height;
  return mainPoint;
}

export function interpolatePoints(
  currentPoint: Point2D,
  previousValue: Point2D,
  percentOfCurrent: number
): Point2D {
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
  return currentPoint;
}

export function getPointsCenter(pointA: Point2D, pointB: Point2D) {
  pointA.x = (pointA.x + pointB.x) * 0.5;
  pointA.y = (pointA.y + pointB.y) * 0.5;
  return pointA;
}
