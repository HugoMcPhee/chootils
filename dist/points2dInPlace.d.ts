import { Size } from "./sizes";
import { Point2D } from "./points2d";
export declare function multiplyPoint(thePoint: Point2D, amount: number): Point2D;
export declare function dividePoint(thePoint: Point2D, amount: number): Point2D;
export declare function dividePoints(mainPoint: Point2D, otherPoint: Point2D): Point2D;
export declare function addPoints(mainPoint: Point2D, otherPoint: Point2D): Point2D;
export declare function subtractPoints(mainPoint: Point2D, otherPoint: Point2D): Point2D;
export declare function subtractPointsSafer(mainPoint: Point2D, otherPoint: Point2D): Point2D;
export declare function subtractSizeFromPoint(mainPoint: Point2D, otherSize: Size): Point2D;
export declare function interpolatePoints(currentPoint: Point2D, previousValue: Point2D, percentOfCurrent: number): Point2D;
export declare function getPointsCenter(pointA: Point2D, pointB: Point2D): Point2D;