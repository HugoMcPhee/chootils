import { measurementToRect, getMeasurementCenter, pointInsideRect, } from "./rects";
import { subtractPoints } from "./points2d";
export function sizeFromRef(theRef) {
    return {
        width: theRef ? theRef.offsetWidth : 0,
        height: theRef ? theRef.offsetHeight : 0,
    };
}
export function customElementsFromPoint(thePoint) {
    const globalPoint = screenToGlobalPosition(thePoint);
    const screenMeasurement = getScreenMeasurement();
    const screenRect = measurementToRect(screenMeasurement);
    const isOnScreen = pointInsideRect(globalPoint, screenRect);
    if (!isOnScreen) {
        console.log("not dfjg");
        const scrollingElement = document.scrollingElement;
        if (scrollingElement) {
            let theElementsFromPoint = [];
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
export function fastStyleUpdate(theRef, theStyle) {
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
export function getBoundingRect(theRef) {
    return (theRef && theRef.getBoundingClientRect && theRef.getBoundingClientRect());
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
export function screenToGlobalPosition(thePoint) {
    const scrollPosition = getScrollOffset();
    return { x: thePoint.x + scrollPosition.x, y: thePoint.y + scrollPosition.y };
}
export function instantScrollToPoint(thePoint) { }
export function nearEdgeOfScreen(globalPoint, edgeDistance) {
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
export function scrollHereIfOffscreen(globalPoint) {
    const screenMeasurement = getScreenMeasurement();
    const screenRect = measurementToRect(screenMeasurement);
    const isOnScreen = pointInsideRect(globalPoint, screenRect);
    if (!isOnScreen) {
        smoothScrollToPoint(globalPoint, screenMeasurement);
    }
}
export function smoothScrollToPoint(globalPoint, screenMeasurement) {
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
