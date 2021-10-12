import { Point2D, sizeToPoint } from "./points2d";
import { defaultSize, Size, multiplySize } from "./sizes";
import { Polygon } from "./shapes";
import { rangeToZeroToOne, zeroToOneToRange } from "./numbers";

export type Rect = {
  top: number;
  left: number;
  bottom: number;
  right: number;
};
export type Measurement = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type MeasurementPoints = {
  topLeft: Point2D;
  topRight: Point2D;
  bottomRight: Point2D;
  bottomLeft: Point2D;
};

export function defaultMeasurement(): Measurement {
  return { x: 0, y: 0, ...defaultSize() };
}

export function defaultRect() {
  return {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  };
}

export function getRectCenter(rect: Rect): Point2D {
  const rectAsMeasurement = rectToMeasurement(rect);
  return getMeasurementCenter(rectAsMeasurement);
}

export function getMeasurementCenter(measurement: Measurement): Point2D {
  return {
    x: measurement.x + measurement.width * 0.5,
    y: measurement.y + measurement.height * 0.5,
  };
}

export function rectToMeasurement(rect: Rect): Measurement {
  return {
    x: rect.left,
    y: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top,
  };
}

export function measurementToRect(measurement: Measurement): Rect {
  return {
    top: measurement.y,
    left: measurement.x,
    bottom: measurement.y + measurement.height,
    right: measurement.x + measurement.width,
  };
}

export function getPointsFromMeasurement(
  measurement: Measurement
): MeasurementPoints {
  const rect: Rect = measurementToRect(measurement);
  return {
    topLeft: { x: rect.left, y: rect.top },
    topRight: { x: rect.right, y: rect.top },
    bottomRight: { x: rect.right, y: rect.bottom },
    bottomLeft: { x: rect.left, y: rect.bottom },
  };
}

export function getLinesFromMeasurementPoints(points: MeasurementPoints) {
  const { topLeft, topRight, bottomRight, bottomLeft } = points;
  return {
    top: { startPoint: topLeft, endPoint: topRight },
    right: { startPoint: topRight, endPoint: bottomRight },
    bottom: { startPoint: bottomRight, endPoint: bottomLeft },
    left: { startPoint: topLeft, endPoint: bottomLeft },
  };
}

export function rectsIntersect(rectA: Rect, rectB: Rect) {
  return (
    rectA.left <= rectB.right &&
    rectB.left <= rectA.right &&
    rectA.top <= rectB.bottom &&
    rectB.top <= rectA.bottom
  );
}

export function pointInsideRect(thePoint: Point2D, theRect: Rect): boolean {
  return (
    thePoint.x >= theRect.left &&
    thePoint.x <= theRect.right &&
    thePoint.y >= theRect.top &&
    thePoint.y <= theRect.bottom
  );
}

export function getRectIntersection(rectA: Rect, rectB: Rect) {
  return restrictRectTo(rectA, rectB);
}

export function subtractRect(rectA: Rect, rectB: Rect) {
  // rectA is the one that gets divided
  // rect b is the other rect, so it returns rectAs rects, after subtracting rectB?
  let tempRect: Rect = defaultRect();
  let result: Rect[] = [];
  const rectIntersection: Rect = getRectIntersection(rectB, rectA);

  if (rectIsEmpty(rectIntersection)) return [{ ...rectA }];
  // setBounds(l,t,r,b)
  // left strip
  tempRect = {
    left: rectA.left,
    top: rectA.top,
    right: rectIntersection.left,
    bottom: rectA.bottom,
  };
  if (!rectIsEmpty(tempRect)) result.push({ ...tempRect });
  // inside strip
  tempRect = {
    left: rectIntersection.left,
    top: rectA.top,
    right: rectIntersection.right,
    bottom: rectIntersection.top,
  };
  if (!rectIsEmpty(tempRect)) result.push({ ...tempRect });
  tempRect = {
    left: rectIntersection.left,
    top: rectIntersection.bottom,
    right: rectIntersection.right,
    bottom: rectA.bottom,
  };
  if (!rectIsEmpty(tempRect)) result.push({ ...tempRect });

  // right strip
  tempRect = {
    left: rectIntersection.right,
    top: rectA.top,
    right: rectA.right,
    bottom: rectA.bottom,
  };
  if (!rectIsEmpty(tempRect)) result.push({ ...tempRect });

  return result;
}

export function rectIsEmpty(rectA: Rect) {
  return rectA.left >= rectA.right || rectA.top >= rectA.bottom;
}

export function restrictRectTo(rectA: Rect, rectB: Rect): Rect {
  if (rectIsEmpty(rectA) || rectIsEmpty(rectB)) return defaultRect();

  let x1 = Math.max(rectA.left, rectB.left);
  let x2 = Math.min(rectA.right, rectB.right);
  let y1 = Math.max(rectA.top, rectB.top);
  let y2 = Math.min(rectA.bottom, rectB.bottom);
  // If width or height is 0, the intersection was empty.

  return {
    left: x1,
    top: y1,
    bottom: y1 + Math.max(0, y2 - y1),
    right: x1 + Math.max(0, x2 - x1),
  };
}

export function rectToPolygon(theRect: Rect): Polygon {
  return [
    [theRect.left, theRect.top],
    [theRect.right, theRect.top],
    [theRect.right, theRect.bottom],
    [theRect.left, theRect.bottom],
  ];
}

export function measurementToPolygon(theMeasurement: Measurement): Polygon {
  return rectToPolygon(measurementToRect(theMeasurement));
}

// Boxes are sizes (like rects with position 0,0 )

export function getNormalizedPointInBox(thePoint: Point2D, theBox: Size) {
  return {
    x: rangeToZeroToOne(thePoint.x, [0, theBox.width]),
    y: rangeToZeroToOne(thePoint.y, [0, theBox.height]),
  };
}

export function getPointFromNormalizedPointInBox(
  percentPoint: Point2D,
  theBox: Size
) {
  return {
    x: zeroToOneToRange(percentPoint.x, [0, theBox.width]),
    y: zeroToOneToRange(percentPoint.y, [0, theBox.height]),
  };
}

export function getBoxCenter(theSize: Size) {
  return sizeToPoint(multiplySize(theSize, 0.5));
}
