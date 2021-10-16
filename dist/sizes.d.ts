export declare type Size = {
    width: number;
    height: number;
};
export declare function defaultSize(): Size;
export declare function multiplySize(theSize: Size, amount: number): Size;
export declare function subtractSizes(mainSize: Size, otherSize: Size): Size;
