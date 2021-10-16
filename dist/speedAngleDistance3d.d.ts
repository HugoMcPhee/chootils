import { Point3D } from "./points3d";
export declare function getVectorSpeedQuick(theVector: Point3D): number;
export declare function getVectorSpeed(theVector: Point3D): number;
declare type AngleFor3D = {
    horizontal: number;
    vertical: number;
};
export declare function getVectorAngle(theVector: Point3D): AngleFor3D;
export declare function getVectorDistance(vectorA: Point3D, vectorB: Point3D): number;
export declare function getPointDistanceQuick(vectorA: Point3D, vectorB: Point3D): number;
export declare function getVectorFromSpeedAndAngle(speed: number, angle: AngleFor3D): Point3D;
declare type SpeedAndAngle = {
    speed: number;
    angle: AngleFor3D;
};
export declare function getSpeedAndAngleFromVector(theSpeedVector: Point3D): SpeedAndAngle;
export {};
