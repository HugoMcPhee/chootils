export declare function limitArrayLength(theArray: any[], limit: number): void;
export declare function addToLimitedArray(theArray: any[], newItem: any, limit: number): void;
export declare function getUniqueArrayItems<T_ArrayItem>(theArray: T_ArrayItem[] | readonly T_ArrayItem[]): T_ArrayItem[];
export declare function addItemToUniqueArray<T_ArrayItem extends any>(theArray: T_ArrayItem[] | readonly T_ArrayItem[], newItem: T_ArrayItem): T_ArrayItem[];
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
export declare function filterMap<T_ArrayItem extends any, T_NewArrayItem>(array: T_ArrayItem[], changeOrCheckFunc: (item: T_ArrayItem) => T_NewArrayItem | false | undefined): T_NewArrayItem[];
export declare function fastFilter<T_ArrayItem extends any>(array: T_ArrayItem[], filterFunc: (item: T_ArrayItem) => boolean | undefined | null): T_ArrayItem[];
