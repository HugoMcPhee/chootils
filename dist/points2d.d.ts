import { Size } from "./sizes";
import { ArrayPoint2D } from "./shapes";
export declare type Point2D = {
    x: number;
    y: number;
};
export declare function defaultPosition(partialPoints?: Partial<Point2D>): Point2D;
export declare function pointIsZero(thePoint: Point2D): boolean;
export declare function samePoints(pointA: Point2D, pointB: Point2D): boolean;
export declare function copyPoint(thePoint: Point2D): Point2D;
export declare function multiplyPoint(thePoint: Point2D, amount: number): Point2D;
export declare function dividePoint(thePoint: Point2D, amount: number): Point2D;
export declare function dividePoints(mainPoint: Point2D, otherPoint: Point2D): Point2D;
export declare function addPoints(mainPoint: Point2D, otherPoint: Point2D): Point2D;
export declare function subtractPoints(mainPoint: Point2D, otherPoint: Point2D): Point2D;
export declare function subtractPointsSafer(mainPoint: Point2D, otherPoint: Point2D): Point2D;
export declare function subtractSizeFromPoint(mainPoint: Point2D, otherSize: Size): Point2D;
export declare function sizeToPoint(theSize: Size): Point2D;
export declare function updatePoint(thePoint: Point2D, newPoint: Point2D): void;
export declare function getAveragePoint(pointsArray: Point2D[]): Point2D;
export declare function getAveragePointWithoutEmptyEnds(pointsArray: Point2D[]): Point2D;
export declare function zeroPoint(): {
    x: number;
    y: number;
};
export declare function interpolatePoints(currentPoint: Point2D, previousValue: Point2D, percentOfCurrent: number): Point2D;
export declare function getPointsCenter(pointA: Point2D, pointB: Point2D): {
    x: number;
    y: number;
};
export declare function point2DToArray(thePoint: Point2D): ArrayPoint2D;
