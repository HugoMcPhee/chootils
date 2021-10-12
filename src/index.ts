export function makePropertyIfDoesntExist(
  theObject: { [key: string]: any },
  propertyName: string,
  initialValue: any
) {
  if (!theObject[propertyName]) {
    theObject[propertyName] = initialValue;
  }
}

export function typedKeys<T_Object extends Record<any, any>>(
  theObject: T_Object
) {
  return Object.keys(theObject) as (keyof T_Object)[];
}
