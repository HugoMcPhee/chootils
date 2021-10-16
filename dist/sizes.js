export function defaultSize() {
    return { width: 0, height: 0 };
}
export function multiplySize(theSize, amount) {
    return {
        width: theSize.width * amount,
        height: theSize.height * amount,
    };
}
export function subtractSizes(mainSize, otherSize) {
    return {
        width: mainSize.width - otherSize.width,
        height: mainSize.height - otherSize.height,
    };
}
