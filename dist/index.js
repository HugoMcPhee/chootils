export function makePropertyIfDoesntExist(theObject, propertyName, initialValue) {
    if (!theObject[propertyName]) {
        theObject[propertyName] = initialValue;
    }
}
export function typedKeys(theObject) {
    return Object.keys(theObject);
}
