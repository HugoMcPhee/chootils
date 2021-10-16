export function forEach(theArray, whatToDo) {
    const arrayLength = theArray.length;
    for (let index = 0; index < arrayLength; index++) {
        whatToDo(theArray[index], index);
    }
}
export function forEachReverse(theArray, whatToDo) {
    const arrayLength = theArray.length;
    for (let index = arrayLength - 1; index >= 0; index--) {
        whatToDo(theArray[index], index);
    }
}
export function breakableForEach(theArray, whatToDo) {
    for (let index = 0; index < theArray.length; index++) {
        if (whatToDo(theArray[index], index)) {
            return true;
        }
    }
}
