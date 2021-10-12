import { forEach } from "./loops";
import { toRadians } from "./speedAngleDistance";
import { Point2D } from "./points2d";

export type ArrayPoint2D = [number, number];
export type Polygon = ArrayPoint2D[];
export type Point2DPolygon = Point2D[];

export type EdgeName = "top" | "right" | "bottom" | "left";

export const edgeNames: EdgeName[] = ["top", "right", "bottom", "left"];

export function getTrianglePoints(
  originalPoint: Point2D,
  distance: number,
  cursorAngleRange: number,
  angle: number
) {
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

export function getCenterOfPoints(pointsArray: Point2DPolygon) {
  let combinedX = 0;
  let combinedY = 0;
  forEach(pointsArray, (loopedPoint: Point2D) => {
    combinedX += loopedPoint.x;
    combinedY += loopedPoint.y;
  });
  return {
    x: combinedX / pointsArray.length,
    y: combinedY / pointsArray.length,
  };
}
