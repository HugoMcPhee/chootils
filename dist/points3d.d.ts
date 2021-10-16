import { Size } from "./sizes";
export declare type Point3D = {
    x: number;
    y: number;
    z: number;
};
export declare function defaultPosition(partialPoints?: Partial<Point3D>): Point3D;
export declare function pointIsZero(thePoint: Point3D): boolean;
export declare function samePoints(pointA: Point3D, pointB: Point3D): boolean;
export declare function copyPoint(thePoint: Point3D): Point3D;
export declare function multiplyPoint(thePoint: Point3D, amount: number): Point3D;
export declare function dividePoint(thePoint: Point3D, amount: number): Point3D;
export declare function dividePoints(mainPoint: Point3D, otherPoint: Point3D): Point3D;
export declare function addPoints(mainPoint: Point3D, otherPoint: Point3D): Point3D;
export declare function subtractPoints(mainPoint: Point3D, otherPoint: Point3D): Point3D;
export declare function subtractPointsSafer(mainPoint: Point3D, otherPoint: Point3D): Point3D;
export declare function subtractSizeFromPoint(mainPoint: Point3D, otherSize: Size): Point3D;
export declare function sizeToPoint(theSize: Size): Point3D;
export declare function updatePoint(thePoint: Point3D, newPoint: Point3D): void;
export declare function getAveragePoint(pointsArray: Point3D[]): Point3D;
export declare function getAveragePointWithoutEmptyEnds(pointsArray: Point3D[]): Point3D;
export declare function zeroPoint(): {
    x: number;
    y: number;
};
export declare function interpolatePoints(currentPoint: Point3D, previousValue: Point3D, percentOfCurrent: number): Point3D;
export declare function getPointsCenter(pointA: Point3D, pointB: Point3D): {
    x: number;
    y: number;
    z: number;
};
