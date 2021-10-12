import { interpolateValues, shortenDecimals } from "./numbers";
import { Size } from "./sizes";
import { ArrayPoint2D } from "./shapes";

export type Point2D = { x: number; y: number };

export function defaultPosition(partialPoints?: Partial<Point2D>): Point2D {
  if (!partialPoints) {
    return { x: 0, y: 0 };
  }
  return { x: 0, y: 0, ...partialPoints };
}

export function pointIsZero(thePoint: Point2D) {
  return thePoint.x === 0 && thePoint.y === 0;
}

export function samePoints(pointA: Point2D, pointB: Point2D): boolean {
  return pointA.x === pointB.x && pointA.y === pointB.y;
}

export function copyPoint(thePoint: Point2D): Point2D {
  return {
    x: thePoint.x,
    y: thePoint.y,
  };
}

export function multiplyPoint(thePoint: Point2D, amount: number): Point2D {
  return {
    x: thePoint.x * amount,
    y: thePoint.y * amount,
  };
}
export function dividePoint(thePoint: Point2D, amount: number): Point2D {
  return {
    x: thePoint.x / amount,
    y: thePoint.y / amount,
  };
}
export function dividePoints(mainPoint: Point2D, otherPoint: Point2D): Point2D {
  return {
    x: mainPoint.x / otherPoint.x,
    y: mainPoint.y / otherPoint.y,
  };
}
export function addPoints(mainPoint: Point2D, otherPoint: Point2D): Point2D {
  return {
    x: mainPoint.x + otherPoint.x,
    y: mainPoint.y + otherPoint.y,
  };
}

export function subtractPoints(
  mainPoint: Point2D,
  otherPoint: Point2D
): Point2D {
  return {
    x: mainPoint.x - otherPoint.x,
    y: mainPoint.y - otherPoint.y,
  };
}
export function subtractPointsSafer(
  mainPoint: Point2D,
  otherPoint: Point2D
): Point2D {
  return {
    x: shortenDecimals(mainPoint.x) - shortenDecimals(otherPoint.x),
    y: shortenDecimals(mainPoint.y) - shortenDecimals(otherPoint.y),
  };
}

export function subtractSizeFromPoint(
  mainPoint: Point2D,
  otherSize: Size
): Point2D {
  return {
    x: mainPoint.x - otherSize.width,
    y: mainPoint.y - otherSize.height,
  };
}
export function sizeToPoint(theSize: Size): Point2D {
  return {
    x: theSize.width,
    y: theSize.height,
  };
}

export function updatePoint(thePoint: Point2D, newPoint: Point2D) {
  thePoint.x = newPoint.x;
  thePoint.y = newPoint.y;
}

export function getAveragePoint(pointsArray: Point2D[]) {
  let averagePoint: Point2D = { x: 0, y: 0 };
  const combinedPoints: Point2D = { x: 0, y: 0 };
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

export function getAveragePointWithoutEmptyEnds(pointsArray: Point2D[]) {
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

export function interpolatePoints(
  currentPoint: Point2D,
  previousValue: Point2D,
  percentOfCurrent: number
): Point2D {
  return {
    x: interpolateValues(currentPoint.x, previousValue.x, percentOfCurrent),
    y: interpolateValues(currentPoint.y, previousValue.y, percentOfCurrent),
  };
}

export function getPointsCenter(pointA: Point2D, pointB: Point2D) {
  return {
    x: (pointA.x + pointB.x) * 0.5,
    y: (pointA.y + pointB.y) * 0.5,
  };
}

export function point2DToArray(thePoint: Point2D): ArrayPoint2D {
  return [thePoint.x, thePoint.y];
}
