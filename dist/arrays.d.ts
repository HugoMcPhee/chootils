export declare function limitArrayLength(theArray: any[], limit: number): void;
export declare function addToLimitedArray(theArray: any[], newItem: any, limit: number): void;
export declare function getUniqueArrayItems<T_ArrayItem>(theArray: T_ArrayItem[] | readonly T_ArrayItem[]): T_ArrayItem[];
export declare function addItemToUniqueArray(theArray: any[], newItem: any): any[];
export declare function mergeIntoArray(theArray: any, newArray: any): void;
export declare function removeItemFromArray<T_ArrayItem>(theArray: T_ArrayItem[], theItem: T_ArrayItem): T_ArrayItem[];
export declare function removeItemFromArrayInPlace<T_ArrayItem>(theArray: T_ArrayItem[], theItem: T_ArrayItem): T_ArrayItem[];
export declare function keyBy<T_ArrayItem extends Record<any, any>>(theArray: T_ArrayItem[], theKey?: keyof T_ArrayItem, transformKey?: (theKey: string) => string, // to allow editing a key before storing it
excludeName?: string): Record<string, T_ArrayItem>;
export declare function getRandomArrayItem<T>(theArray: T[]): T;
export declare function insertTowardsGoalArray<T_ItemType>({ newItem, currentArray, goalArray, }: {
    newItem: T_ItemType;
    currentArray: T_ItemType[];
    goalArray: T_ItemType[];
}): T_ItemType[];
export declare function chooseClosestBeforeItemInArray<T_ArrayItem extends any, T_TheArray extends T_ArrayItem[], T_FullArray extends readonly T_ArrayItem[], T_GoalItem extends T_ArrayItem>({ smallArray, fullArray, goalItem, }: {
    smallArray: T_TheArray;
    fullArray: T_FullArray;
    goalItem: T_GoalItem;
}): T_GoalItem;
