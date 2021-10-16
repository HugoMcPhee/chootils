export declare function forEach<T_ArrayItem>(theArray: T_ArrayItem[] | Readonly<T_ArrayItem[]>, whatToDo: (item: T_ArrayItem, index: number) => any): void;
export declare function forEachReverse<T_ArrayItem>(theArray: T_ArrayItem[] | Readonly<T_ArrayItem[]>, whatToDo: (item: T_ArrayItem, index: number) => any): void;
export declare function breakableForEach<T_ArrayItem>(theArray: T_ArrayItem[] | Readonly<T_ArrayItem[]>, whatToDo: (item: T_ArrayItem, index: number) => any): true | undefined;
