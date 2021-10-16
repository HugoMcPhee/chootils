import { Measurement } from "./rects";
import { Point2D } from "./points2d";
import { CSSProperties } from "react";
import { Size } from "./sizes";
export declare type BoundingRect = ClientRect | DOMRect | null;
export declare type ReactRef = null | HTMLElement;
export declare function sizeFromRef(theRef: ReactRef): Size;
export declare function customElementsFromPoint(thePoint: Point2D): Element[];
export declare function fastStyleUpdate(theRef: ReactRef, theStyle: CSSProperties): void;
export declare function getScrollOffset(): {
    x: number;
    y: number;
};
export declare function getBoundingRect(theRef: Element): DOMRect;
export declare function getScreenMeasurement(): {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare function getScreenRect(): import("./rects").Rect;
export declare function screenToGlobalPosition(thePoint: Point2D): Point2D;
export declare function instantScrollToPoint(thePoint: Point2D): void;
export declare function nearEdgeOfScreen(globalPoint: Point2D, edgeDistance?: number): boolean;
export declare function scrollHereIfOffscreen(globalPoint: Point2D): void;
export declare function smoothScrollToPoint(globalPoint: Point2D, screenMeasurement?: Measurement): void;
