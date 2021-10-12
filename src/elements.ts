import {
  measurementToRect,
  getMeasurementCenter,
  pointInsideRect,
  Measurement,
} from "./rects";
import { Point2D, subtractPoints } from "./points2d";
import { CSSProperties } from "react";
import { Size } from "./sizes";

export type BoundingRect = ClientRect | DOMRect | null;
export type ReactRef = null | HTMLElement;

export function sizeFromRef(theRef: ReactRef): Size {
  return {
    width: theRef ? theRef.offsetWidth : 0,
    height: theRef ? theRef.offsetHeight : 0,
  };
}

export function customElementsFromPoint(thePoint: Point2D) {
  const globalPoint = screenToGlobalPosition(thePoint);
  const screenMeasurement = getScreenMeasurement();
  const screenRect = measurementToRect(screenMeasurement);
  const isOnScreen = pointInsideRect(globalPoint, screenRect);

  if (!isOnScreen) {
    console.log("not dfjg");
    const scrollingElement = document.scrollingElement;
    if (scrollingElement) {
      let theElementsFromPoint = [] as Element[];

      const screenCenter = getMeasurementCenter(screenMeasurement);

      const originalScroll = {
        x: scrollingElement.scrollLeft,
        y: scrollingElement.scrollTop,
      };

      const amountToScroll = subtractPoints(globalPoint, screenCenter);

      // scrollingElement.scrollLeft = originalScroll.x + amountToScroll.x;
      // scrollingElement.scrollTop = originalScroll.y + amountToScroll.y;
      theElementsFromPoint = document.elementsFromPoint(thePoint.x, thePoint.y);
      setTimeout(() => {
        window.scrollTo({
          left: originalScroll.x + amountToScroll.x,
          top: originalScroll.y + amountToScroll.y,
          behavior: "smooth",
        });
        // scrollingElement.scrollLeft = originalScroll.x;
        // scrollingElement.scrollTop = originalScroll.y;
      }, 0);
      return theElementsFromPoint;
    }
  }

  return document.elementsFromPoint(thePoint.x, thePoint.y);
}

export function fastStyleUpdate(theRef: ReactRef, theStyle: CSSProperties) {
  if (theRef) {
    Object.assign(theRef.style, theStyle);
  }
}

export function getScrollOffset() {
  const scrollingElement = document.scrollingElement;

  return {
    x: scrollingElement ? scrollingElement.scrollLeft : 0,
    y: scrollingElement ? scrollingElement.scrollTop : 0,
  };
}

export function getBoundingRect(theRef: Element) {
  return (
    theRef && theRef.getBoundingClientRect && theRef.getBoundingClientRect()
  );
}

export function getScreenMeasurement() {
  const scrollPosition = getScrollOffset();
  // var browserZoomLevel = Math.round(window.devicePixelRatio * 100);

  return {
    x: scrollPosition.x,
    y: scrollPosition.y,
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function getScreenRect() {
  return measurementToRect(getScreenMeasurement());
}

export function screenToGlobalPosition(thePoint: Point2D): Point2D {
  const scrollPosition = getScrollOffset();
  return { x: thePoint.x + scrollPosition.x, y: thePoint.y + scrollPosition.y };
}

export function instantScrollToPoint(thePoint: Point2D) {}

export function nearEdgeOfScreen(globalPoint: Point2D, edgeDistance?: number) {
  const theEdgeDistance = edgeDistance || 100;

  const screenMeasurement = getScreenMeasurement();
  const screenRect = measurementToRect(screenMeasurement);
  const screenRectShrunk = {
    top: screenRect.top + theEdgeDistance,
    bottom: screenRect.bottom - theEdgeDistance,
    left: screenRect.left + theEdgeDistance,
    right: screenRect.right - theEdgeDistance,
  };
  const isOnScreen = pointInsideRect(globalPoint, screenRectShrunk);
  return !isOnScreen;
}

export function scrollHereIfOffscreen(globalPoint: Point2D) {
  const screenMeasurement = getScreenMeasurement();
  const screenRect = measurementToRect(screenMeasurement);
  const isOnScreen = pointInsideRect(globalPoint, screenRect);

  if (!isOnScreen) {
    smoothScrollToPoint(globalPoint, screenMeasurement);
  }
}

export function smoothScrollToPoint(
  globalPoint: Point2D,
  screenMeasurement?: Measurement
) {
  const scrollingElement = document.scrollingElement;
  const theScreenMeasurement = screenMeasurement || getScreenMeasurement();

  if (scrollingElement) {
    const screenCenter = getMeasurementCenter(theScreenMeasurement);

    const originalScroll = {
      x: scrollingElement.scrollLeft,
      y: scrollingElement.scrollTop,
    };

    const amountToScroll = subtractPoints(globalPoint, screenCenter);

    window.scrollTo({
      left: originalScroll.x + amountToScroll.x,
      top: originalScroll.y + amountToScroll.y,
      behavior: "smooth",
    });
  }
}
