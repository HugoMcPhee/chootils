import { Point2D } from "./points2d";
import { Size } from "./sizes";
import { Polygon } from "./shapes";
export declare type Rect = {
    top: number;
    left: number;
    bottom: number;
    right: number;
};
export declare type Measurement = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare type MeasurementPoints = {
    topLeft: Point2D;
    topRight: Point2D;
    bottomRight: Point2D;
    bottomLeft: Point2D;
};
export declare function defaultMeasurement(): Measurement;
export declare function defaultRect(): {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
export declare function getRectCenter(rect: Rect): Point2D;
export declare function getMeasurementCenter(measurement: Measurement): Point2D;
export declare function rectToMeasurement(rect: Rect): Measurement;
export declare function measurementToRect(measurement: Measurement): Rect;
export declare function getPointsFromMeasurement(measurement: Measurement): MeasurementPoints;
export declare function getLinesFromMeasurementPoints(points: MeasurementPoints): {
    top: {
        startPoint: Point2D;
        endPoint: Point2D;
    };
    right: {
        startPoint: Point2D;
        endPoint: Point2D;
    };
    bottom: {
        startPoint: Point2D;
        endPoint: Point2D;
    };
    left: {
        startPoint: Point2D;
        endPoint: Point2D;
    };
};
export declare function rectsIntersect(rectA: Rect, rectB: Rect): boolean;
export declare function pointInsideRect(thePoint: Point2D, theRect: Rect): boolean;
export declare function getRectIntersection(rectA: Rect, rectB: Rect): Rect;
export declare function subtractRect(rectA: Rect, rectB: Rect): Rect[];
export declare function rectIsEmpty(rectA: Rect): boolean;
export declare function restrictRectTo(rectA: Rect, rectB: Rect): Rect;
export declare function rectToPolygon(theRect: Rect): Polygon;
export declare function measurementToPolygon(theMeasurement: Measurement): Polygon;
export declare function getNormalizedPointInBox(thePoint: Point2D, theBox: Size): {
    x: number;
    y: number;
};
export declare function getPointFromNormalizedPointInBox(percentPoint: Point2D, theBox: Size): {
    x: number;
    y: number;
};
export declare function getBoxCenter(theSize: Size): Point2D;
