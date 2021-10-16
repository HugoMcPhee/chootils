import { breakableForEach, forEach } from "./loops";
export function limitArrayLength(theArray, limit) {
    if (theArray.length > limit) {
        theArray.shift();
    }
}
export function addToLimitedArray(theArray, newItem, limit) {
    limitArrayLength(theArray, limit);
    theArray.push(newItem);
}
export function getUniqueArrayItems(theArray) {
    return [...new Set(theArray)];
}
export function addItemToUniqueArray(theArray, newItem) {
    const newArray = theArray.slice(0);
    newArray.push(newItem);
    return getUniqueArrayItems(newArray);
}
export function mergeIntoArray(theArray, newArray) {
    theArray.push.apply(theArray, newArray);
}
export function removeItemFromArray(theArray, theItem) {
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
export function removeItemFromArrayInPlace(theArray, theItem) {
    const removeIndex = theArray.indexOf(theItem);
    if (removeIndex > -1) {
        theArray.splice(removeIndex, 1);
    }
    return theArray;
}
export function keyBy(theArray, theKey = "name", transformKey, // to allow editing a key before storing it
excludeName) {
    const newObject = {};
    if (excludeName) {
        forEach(theArray, (loopedItem) => {
            var _a;
            const loopedName = loopedItem[theKey];
            if (loopedName !== excludeName) {
                const newKey = (_a = transformKey === null || transformKey === void 0 ? void 0 : transformKey(loopedItem[theKey])) !== null && _a !== void 0 ? _a : loopedItem[theKey];
                newObject[newKey] = loopedItem;
            }
        });
    }
    else {
        forEach(theArray, (loopedItem) => {
            var _a;
            const newKey = (_a = transformKey === null || transformKey === void 0 ? void 0 : transformKey(loopedItem[theKey])) !== null && _a !== void 0 ? _a : loopedItem[theKey];
            newObject[newKey] = loopedItem;
        });
    }
    return newObject;
}
export function getRandomArrayItem(theArray) {
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
export function insertTowardsGoalArray({ newItem, currentArray, goalArray, }) {
    /*
    Rules in order
    Moves to after the item that was before it
    Move to before the item that was after it?
    Move to the after the item that was 2 before it
    2 after it etc
    Or just add to the end if none of the items are the same
    */
    const currentIitemIndexInGoalArray = goalArray.indexOf(newItem);
    const beforeGoalItemsUnreversed = goalArray.slice(0, currentIitemIndexInGoalArray);
    const afterGoalItems = goalArray.slice(currentIitemIndexInGoalArray + 1, goalArray.length);
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
        }
        else if (afterGoalItem) {
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
export function chooseClosestBeforeItemInArray({ smallArray, fullArray, goalItem, }) {
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
    return foundItem;
}
