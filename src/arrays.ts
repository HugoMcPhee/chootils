import { breakableForEach, forEach } from "./loops";
import { getRandomInt } from "./numbers";

export function limitArrayLength(theArray: any[], limit: number) {
  if (theArray.length > limit) {
    theArray.shift();
  }
}
export function addToLimitedArray(
  theArray: any[],
  newItem: any,
  limit: number
) {
  limitArrayLength(theArray, limit);
  theArray.push(newItem);
}

export function getUniqueArrayItems<T_ArrayItem>(
  theArray: T_ArrayItem[] | readonly T_ArrayItem[]
) {
  return [...new Set(theArray)];
}

export function addItemToUniqueArray<T_ArrayItem extends any>(
  theArray: T_ArrayItem[] | readonly T_ArrayItem[],
  newItem: T_ArrayItem
) {
  const newArray = theArray.slice(0);
  newArray.push(newItem);
  return getUniqueArrayItems(newArray);
}

export function mergeIntoArray(theArray: any, newArray: any) {
  theArray.push.apply(theArray, newArray);
}

export function removeItemFromArray<T_ArrayItem>(
  theArray: T_ArrayItem[],
  theItem: T_ArrayItem
) {
  const removeIndex = theArray.indexOf(theItem);
  // console.log(removeIndex);
  if (removeIndex > -1) {
    // console.log([
    //   ...theArray.slice(0, removeIndex),
    //   ...theArray.slice(removeIndex + 1)
    // ]);
    return [
      ...theArray.slice(0, removeIndex),
      ...theArray.slice(removeIndex + 1),
    ];
    // return [
    //   ...theArray.slice(0, removeIndex),
    //   ...theArray.slice(removeIndex + 1)
    // ];
  }
  return theArray;
}

export function removeItemFromArrayInPlace<T_ArrayItem>(
  theArray: T_ArrayItem[],
  theItem: T_ArrayItem
) {
  const removeIndex = theArray.indexOf(theItem);
  if (removeIndex > -1) {
    theArray.splice(removeIndex, 1);
  }
  return theArray;
}

export function keyBy<T_ArrayItem extends Record<any, any>>(
  theArray: T_ArrayItem[],
  theKey: keyof T_ArrayItem = "name",
  transformKey?: (theKey: string) => string, // to allow editing a key before storing it
  excludeName?: string
) {
  const newObject: Record<string, T_ArrayItem> = {};
  if (excludeName) {
    forEach(theArray, (loopedItem) => {
      const loopedName: string = loopedItem[theKey];
      if (loopedName !== excludeName) {
        const newKey = transformKey?.(loopedItem[theKey]) ?? loopedItem[theKey];
        newObject[newKey] = loopedItem;
      }
    });
  } else {
    forEach(theArray, (loopedItem) => {
      const newKey = transformKey?.(loopedItem[theKey]) ?? loopedItem[theKey];
      newObject[newKey] = loopedItem;
    });
  }
  return newObject;
}

export function getRandomArrayItem<T>(theArray: T[]): T {
  return theArray[Math.floor(Math.random() * theArray.length)];
}

/*
Tries to insert an item to get closer to the goal array

const allFruit = ["apple", "banana", "carrot", "durian", "eggplant"];
const currentFruit = ["apple", "banana",  "eggplant"];
const newArray = insertTowardsGoalArray({
  newItem: "carrot",
  currentArray: currentFruit,
  goalArray: allFruit
});
// inserts 'carrot' after 'banana'
// > ["apple", "banana", "carrot",  "eggplant"]
*/
export function insertTowardsGoalArray<T_ItemType>({
  newItem,
  currentArray,
  goalArray,
}: {
  newItem: T_ItemType;
  currentArray: T_ItemType[];
  goalArray: T_ItemType[];
}) {
  /*
  Rules in order
  Moves to after the item that was before it
  Move to before the item that was after it?
  Move to the after the item that was 2 before it
  2 after it etc
  Or just add to the end if none of the items are the same
  */

  const currentIitemIndexInGoalArray = goalArray.indexOf(newItem);

  const beforeGoalItemsUnreversed = goalArray.slice(
    0,
    currentIitemIndexInGoalArray
  );
  const afterGoalItems = goalArray.slice(
    currentIitemIndexInGoalArray + 1,
    goalArray.length
  );
  const beforeGoalItems = beforeGoalItemsUnreversed.reverse();
  const loopAmount = Math.max(beforeGoalItems.length, afterGoalItems.length);

  let indexToInsertTo = goalArray.length;

  for (let index = 0; index < loopAmount; index++) {
    const beforeGoalItem = beforeGoalItems[index];
    const afterGoalItem = afterGoalItems[index];

    if (beforeGoalItem) {
      const foundInCurrentIndex = currentArray.indexOf(beforeGoalItem);
      if (foundInCurrentIndex !== -1) {
        indexToInsertTo = foundInCurrentIndex + 1;
        break;
      }
    } else if (afterGoalItem) {
      const foundInCurrentIndex = currentArray.indexOf(afterGoalItem);
      if (foundInCurrentIndex !== -1) {
        indexToInsertTo = foundInCurrentIndex;
        break;
      }
    }
  }

  const editedArray = [...currentArray];
  editedArray.splice(indexToInsertTo, 0, newItem);
  return editedArray;
}

// gets the nearest item to goalItem thats in both the fullArray and goalArray
// (only gets items before the goal item in the fullArray)
// smallArray [ "b", "c","e"]
// full array ["a","b","c","d","e"]
// goalItem "d"
// returns "c"
export function chooseClosestBeforeItemInArray<
  T_ArrayItem extends any,
  T_TheArray extends T_ArrayItem[],
  T_FullArray extends readonly T_ArrayItem[],
  T_GoalItem extends T_ArrayItem
>({
  smallArray,
  fullArray,
  goalItem,
}: {
  smallArray: T_TheArray;
  fullArray: T_FullArray;
  goalItem: T_GoalItem;
}) {
  if (smallArray.includes(goalItem)) {
    return goalItem;
  }

  const currentIitemIndexInGoalArray = fullArray.indexOf(goalItem);

  const beforeGoalItemsReversed = fullArray
    .slice(0, currentIitemIndexInGoalArray)
    .reverse();

  let foundItem = smallArray[0];

  breakableForEach(beforeGoalItemsReversed, (loopedItem) => {
    if (smallArray.includes(loopedItem)) {
      foundItem = loopedItem;
      return true; // break
    }
  });

  // if none was found, use the first item in theArray

  return foundItem as T_GoalItem;
}

// filters and maps in one loop
export function filterMap<T_ArrayItem extends any, T_NewArrayItem>(
  array: T_ArrayItem[],
  changeOrCheckFunc: (item: T_ArrayItem) => T_NewArrayItem | false | undefined
) {
  let newArray: T_NewArrayItem[] = [];
  forEach(array, (item) => {
    const mappedItem = changeOrCheckFunc(item);
    if (mappedItem) newArray.push(mappedItem);
  });
  return newArray;
}

export function fastFilter<T_ArrayItem extends any>(
  array: T_ArrayItem[],
  filterFunc: (item: T_ArrayItem) => boolean | undefined | null
) {
  let filteredItems: T_ArrayItem[] = [];
  forEach(array, (item) => {
    if (filterFunc(item)) filteredItems.push(item);
  });
  return filteredItems;
}

export function chooseRandom<T_Item extends any>(array: T_Item[]) {
  return array[getRandomInt(0, array.length - 1)];
}

export function includes(list: any[] | string, item: any) {
  return list.indexOf(item) > -1;
}
