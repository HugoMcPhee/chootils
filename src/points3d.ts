import { interpolateValues, shortenDecimals } from "./numbers";
import { Size } from "./sizes";

export type Point3D = { x: number; y: number; z: number };

// TODO defaltPoint or zeroPoint
export function defaultPosition(partialPoints?: Partial<Point3D>): Point3D {
  if (!partialPoints) {
    return { x: 0, y: 0, z: 0 };
  }
  return { x: 0, y: 0, z: 0, ...partialPoints };
}

export function pointIsZero(thePoint: Point3D) {
  return thePoint.x === 0 && thePoint.y === 0 && thePoint.z === 0;
}

export function samePoints(pointA: Point3D, pointB: Point3D): boolean {
  return (
    pointA.x === pointB.x && pointA.y === pointB.y && pointA.z === pointB.z
  );
}

export function copyPoint(thePoint: Point3D): Point3D {
  return {
    x: thePoint.x,
    y: thePoint.y,
    z: thePoint.z,
  };
}

export function multiplyPoint(thePoint: Point3D, amount: number): Point3D {
  return {
    x: thePoint.x * amount,
    y: thePoint.y * amount,
    z: thePoint.z * amount,
  };
}
export function dividePoint(thePoint: Point3D, amount: number): Point3D {
  return {
    x: thePoint.x / amount,
    y: thePoint.y / amount,
    z: thePoint.z / amount,
  };
}
export function dividePoints(mainPoint: Point3D, otherPoint: Point3D): Point3D {
  return {
    x: mainPoint.x / otherPoint.x,
    y: mainPoint.y / otherPoint.y,
    z: mainPoint.z / otherPoint.z,
  };
}
export function addPoints(mainPoint: Point3D, otherPoint: Point3D): Point3D {
  return {
    x: mainPoint.x + otherPoint.x,
    y: mainPoint.y + otherPoint.y,
    z: mainPoint.z + otherPoint.z,
  };
}
export function subtractPoints(
  mainPoint: Point3D,
  otherPoint: Point3D
): Point3D {
  return {
    x: mainPoint.x - otherPoint.x,
    y: mainPoint.y - otherPoint.y,
    z: mainPoint.z - otherPoint.z,
  };
}
export function subtractPointsSafer(
  mainPoint: Point3D,
  otherPoint: Point3D
): Point3D {
  return {
    x: shortenDecimals(mainPoint.x) - shortenDecimals(otherPoint.x),
    y: shortenDecimals(mainPoint.y) - shortenDecimals(otherPoint.y),
    z: shortenDecimals(mainPoint.z) - shortenDecimals(otherPoint.z),
  };
}

export function subtractSizeFromPoint(
  mainPoint: Point3D,
  otherSize: Size
): Point3D {
  return {
    x: mainPoint.x - otherSize.width,
    y: mainPoint.y - otherSize.height,
    z: mainPoint.z - otherSize.height,
  };
}
export function sizeToPoint(theSize: Size): Point3D {
  return {
    x: theSize.width,
    y: theSize.height,
    z: theSize.height,
  };
}

export function updatePoint(thePoint: Point3D, newPoint: Point3D) {
  thePoint.x = newPoint.x;
  thePoint.y = newPoint.y;
  thePoint.z = newPoint.z;
}

export function getAveragePoint(pointsArray: Point3D[]) {
  let averagePoint: Point3D = { x: 0, y: 0, z: 0 };
  const combinedPoints: Point3D = { x: 0, y: 0, z: 0 };
  const pointsAmount = pointsArray.length;

  for (var i = 0; i < pointsAmount; i++) {
    combinedPoints.x += pointsArray[i].x;
    combinedPoints.y += pointsArray[i].y;
    combinedPoints.z += pointsArray[i].z;
  }
  if (pointsAmount > 0) {
    averagePoint = dividePoint(combinedPoints, pointsAmount);
  }
  return averagePoint;
}

export function getAveragePointWithoutEmptyEnds(pointsArray: Point3D[]) {
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
  currentPoint: Point3D,
  previousValue: Point3D,
  percentOfCurrent: number
): Point3D {
  return {
    x: interpolateValues(currentPoint.x, previousValue.x, percentOfCurrent),
    y: interpolateValues(currentPoint.y, previousValue.y, percentOfCurrent),
    z: interpolateValues(currentPoint.z, previousValue.z, percentOfCurrent),
  };
}

export function getPointsCenter(pointA: Point3D, pointB: Point3D) {
  return {
    x: (pointA.x + pointB.x) * 0.5,
    y: (pointA.y + pointB.y) * 0.5,
    z: (pointA.z + pointB.z) * 0.5,
  };
}
