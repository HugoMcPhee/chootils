import { Point2D } from "./points2d";
export declare type ArrayPoint2D = [number, number];
export declare type Polygon = ArrayPoint2D[];
export declare type Point2DPolygon = Point2D[];
export declare type EdgeName = "top" | "right" | "bottom" | "left";
export declare const edgeNames: EdgeName[];
export declare function getTrianglePoints(originalPoint: Point2D, distance: number, cursorAngleRange: number, angle: number): {
    originalPoint: Point2D;
    firstPoint: {
        x: number;
        y: number;
    };
    secondPoint: {
        x: number;
        y: number;
    };
};
export declare function getCenterOfPoints(pointsArray: Point2DPolygon): {
    x: number;
    y: number;
};
