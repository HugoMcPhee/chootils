export type Size = { width: number; height: number };

export function defaultSize(): Size {
  return { width: 0, height: 0 };
}

export function multiplySize(theSize: Size, amount: number): Size {
  return {
    width: theSize.width * amount,
    height: theSize.height * amount,
  };
}

export function subtractSizes(mainSize: Size, otherSize: Size): Size {
  return {
    width: mainSize.width - otherSize.width,
    height: mainSize.height - otherSize.height,
  };
}
