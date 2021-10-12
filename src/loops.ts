export function forEach<T_ArrayItem>(
  theArray: T_ArrayItem[] | Readonly<T_ArrayItem[]>,
  whatToDo: (item: T_ArrayItem, index: number) => any
) {
  const arrayLength = theArray.length;
  for (let index = 0; index < arrayLength; index++) {
    whatToDo(theArray[index], index);
  }
}

export function forEachReverse<T_ArrayItem>(
  theArray: T_ArrayItem[] | Readonly<T_ArrayItem[]>,
  whatToDo: (item: T_ArrayItem, index: number) => any
) {
  const arrayLength = theArray.length;
  for (let index = arrayLength - 1; index >= 0; index--) {
    whatToDo(theArray[index], index);
  }
}

export function breakableForEach<T_ArrayItem>(
  theArray: T_ArrayItem[] | Readonly<T_ArrayItem[]>,
  whatToDo: (item: T_ArrayItem, index: number) => any
) {
  for (let index = 0; index < theArray.length; index++) {
    if (whatToDo(theArray[index], index)) {
      return true;
    }
  }
}
