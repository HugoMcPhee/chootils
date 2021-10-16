export declare function makePropertyIfDoesntExist(theObject: {
    [key: string]: any;
}, propertyName: string, initialValue: any): void;
export declare function typedKeys<T_Object extends Record<any, any>>(theObject: T_Object): (keyof T_Object)[];
