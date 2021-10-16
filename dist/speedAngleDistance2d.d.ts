import { Point2D } from "./points2d";
export declare function getVectorSpeed(theVector: Point2D): number;
export declare function getVectorAngle(theVector: Point2D): number;
export declare function getVectorDistance(vectorA: Point2D, vectorB: Point2D): number;
export declare function getVectorFromSpeedAndAngle(speed: number, angle: number): Point2D;
declare type SpeedAndAngle = {
    speed: number;
    angle: number;
};
export declare function getSpeedAndAngleFromVector(theSpeedVector: Point2D): SpeedAndAngle;
export declare function getShortestAngle(prevAngle: number, newAngle: number): number;
export {};
